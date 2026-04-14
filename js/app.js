// js/app.js — Complete SPA logic for Spanish Grammar

// ===== State Management =====
const state = {
  currentTopic: 1,
  scores: {},       // topicId: { correct: n, total: n }
  exerciseStates: {}, // topicId: [ { submitted: bool, selectedAnswer: val } ]
  sidebarOpen: false
};

// ===== DOM References =====
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburger');
const topicList = document.getElementById('topic-list');
const mainContent = document.getElementById('main-content');
const progressText = document.getElementById('progress-text');
const headerProgressFill = document.getElementById('header-progress-fill');

// ===== Initialization =====
function init() {
  loadState();
  renderSidebar();
  loadTopic(state.currentTopic);
  updateProgress();

  hamburger.addEventListener('click', toggleSidebar);
  overlay.addEventListener('click', closeSidebar);
}

// ===== Sidebar =====
function renderSidebar() {
  topicList.innerHTML = '';
  topics.forEach(topic => {
    const score = state.scores[topic.id];
    const isComplete = score && score.total > 0 && score.correct === score.total;
    const isActive = topic.id === state.currentTopic;

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'topic-link' + (isActive ? ' active' : '') + (isComplete ? ' completed' : '');
    a.setAttribute('data-topic-id', topic.id);
    a.setAttribute('role', 'button');
    a.setAttribute('tabindex', '0');
    a.setAttribute('aria-current', isActive ? 'page' : 'false');

    const numBadge = document.createElement('span');
    numBadge.className = 'topic-num';
    numBadge.textContent = topic.id;

    const titleSpan = document.createElement('span');
    titleSpan.textContent = topic.title;

    a.appendChild(numBadge);
    a.appendChild(titleSpan);

    if (isComplete) {
      const check = document.createElement('span');
      check.className = 'topic-check';
      check.textContent = '✓';
      a.appendChild(check);
    }

    a.addEventListener('click', () => {
      navigateToTopic(topic.id);
    });

    a.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigateToTopic(topic.id);
      }
    });

    li.appendChild(a);
    topicList.appendChild(li);
  });
}

function navigateToTopic(id) {
  state.currentTopic = id;
  loadTopic(id);
  renderSidebar();
  if (state.sidebarOpen) closeSidebar();
  mainContent.scrollTop = 0;
  window.scrollTo(0, 0);
}

// ===== Load Topic =====
function loadTopic(id) {
  const topic = topics.find(t => t.id === id);
  if (!topic) return;
  const topicExercises = exercises[id] || [];

  // Ensure exercise state array exists
  if (!state.exerciseStates[id]) {
    state.exerciseStates[id] = topicExercises.map(() => ({ submitted: false, selectedAnswer: null }));
  }

  const html = `
    <div class="topic-header">
      <div class="topic-number-badge">Topic ${topic.id} of 26</div>
      <h1>${escapeHtml(topic.title)}</h1>
    </div>
    ${renderTopicContent(topic)}
    ${renderExercises(topicExercises, id)}
  `;

  mainContent.innerHTML = html;
  attachExerciseHandlers(topicExercises, id);
}

// ===== Render Topic Content =====
function renderTopicContent(topic) {
  let html = '';

  // Explanation
  html += `<div class="explanation">${topic.explanation}</div>`;

  // Tables
  if (topic.tables && topic.tables.length > 0) {
    html += `<div class="tables-section">
      <h2 class="section-title">Conjugation Tables</h2>
      <div class="tables-grid">`;
    topic.tables.forEach(table => {
      const isWide = table.headers.length > 4;
      html += `<div class="table-card${isWide ? ' wide' : ''}">
        <div class="table-card-title">${escapeHtml(table.title)}</div>
        <table class="conj-table" aria-label="${escapeHtml(table.title)}">
          <thead>
            <tr>${table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr>
          </thead>
          <tbody>
            ${table.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>`;
    });
    html += `</div></div>`;
  }

  // Examples
  if (topic.examples && topic.examples.length > 0) {
    html += `<div class="examples-section">
      <h2 class="section-title">Examples</h2>
      <div class="examples-list">`;
    topic.examples.forEach(ex => {
      html += `<div class="example-card">
        <div class="example-spanish">${escapeHtml(ex.spanish)}</div>
        <div class="example-english">${escapeHtml(ex.english)}</div>
      </div>`;
    });
    html += `</div></div>`;
  }

  return html;
}

// ===== Render Exercises =====
function renderExercises(topicExercises, topicId) {
  if (!topicExercises || topicExercises.length === 0) return '';

  const score = state.scores[topicId] || { correct: 0, total: 0 };
  const exStates = state.exerciseStates[topicId] || [];
  const answeredCount = exStates.filter(s => s.submitted).length;
  const progressPct = topicExercises.length > 0 ? (answeredCount / topicExercises.length) * 100 : 0;

  let html = `<div class="exercises-section">
    <div class="exercises-header">
      <h2 class="exercises-title">✏️ Exercises</h2>
      <div class="score-display" id="score-display-${topicId}">
        Score: <span class="score-fraction">${score.correct} / ${score.total}</span>
      </div>
    </div>
    <div class="topic-progress-bar">
      <div class="topic-progress-fill" id="topic-progress-${topicId}" style="width: ${progressPct}%"></div>
    </div>`;

  topicExercises.forEach((exercise, index) => {
    if (exercise.type === 'multiple-choice') {
      html += renderMultipleChoice(exercise, index, topicId, exStates[index]);
    } else if (exercise.type === 'fill-blank') {
      html += renderFillBlank(exercise, index, topicId, exStates[index]);
    }
  });

  html += `</div>`;
  return html;
}

function renderMultipleChoice(exercise, index, topicId, exState) {
  const submitted = exState && exState.submitted;
  const selected = exState ? exState.selectedAnswer : null;

  let cardClass = 'exercise-card';
  if (submitted) {
    cardClass += selected === exercise.correct ? ' answered-correct' : ' answered-wrong';
  }

  let optionsHtml = exercise.options.map((opt, i) => {
    let btnClass = 'mc-btn';
    if (submitted) {
      if (i === exercise.correct) {
        btnClass += selected === i ? ' correct' : ' correct-reveal';
      } else if (i === selected) {
        btnClass += ' wrong';
      }
    }
    const disabledAttr = submitted ? 'disabled' : '';
    return `<button class="${btnClass}" 
      data-topic="${topicId}" 
      data-exercise="${index}" 
      data-option="${i}" 
      ${disabledAttr}
      aria-label="Option ${i + 1}: ${escapeHtml(opt)}"
    >${escapeHtml(opt)}</button>`;
  }).join('');

  let feedbackHtml = '';
  if (submitted) {
    const isCorrect = selected === exercise.correct;
    feedbackHtml = `<div class="feedback ${isCorrect ? 'correct' : 'wrong'} show">
      ${isCorrect ? '✅ Correct!' : `❌ Incorrect. The correct answer is: <strong>${escapeHtml(exercise.options[exercise.correct])}</strong>`}
    </div>`;
  }

  return `<div class="${cardClass}" id="ex-card-${topicId}-${index}">
    <div class="exercise-number">Exercise ${index + 1} · Multiple Choice</div>
    <div class="exercise-question">${escapeHtml(exercise.question)}</div>
    <div class="mc-options">${optionsHtml}</div>
    ${feedbackHtml}
  </div>`;
}

function renderFillBlank(exercise, index, topicId, exState) {
  const submitted = exState && exState.submitted;
  const userAnswer = exState ? exState.selectedAnswer : '';

  let cardClass = 'exercise-card';
  if (submitted) {
    const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(exercise.answer);
    cardClass += isCorrect ? ' answered-correct' : ' answered-wrong';
  }

  const inputClass = submitted
    ? (normalizeAnswer(userAnswer) === normalizeAnswer(exercise.answer) ? 'fill-blank-input correct' : 'fill-blank-input wrong')
    : 'fill-blank-input';

  let feedbackHtml = '';
  if (submitted) {
    const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(exercise.answer);
    feedbackHtml = `<div class="feedback ${isCorrect ? 'correct' : 'wrong'} show">
      ${isCorrect ? '✅ Correct!' : `❌ Incorrect. The correct answer is: <strong>${escapeHtml(exercise.answer)}</strong>`}
    </div>`;
  }

  // Format question: replace ___ with input field or answered value
  const questionDisplay = submitted
    ? escapeHtml(exercise.question).replace('___', `<strong style="color:var(--primary)">${escapeHtml(userAnswer || '')}</strong>`)
    : escapeHtml(exercise.question).replace('___', '<span class="sr-only">blank</span>___');

  return `<div class="${cardClass}" id="ex-card-${topicId}-${index}">
    <div class="exercise-number">Exercise ${index + 1} · Fill in the Blank</div>
    <div class="exercise-question">${questionDisplay}</div>
    <div class="fill-blank-container">
      <input 
        type="text" 
        class="${inputClass}" 
        id="fb-input-${topicId}-${index}"
        data-topic="${topicId}"
        data-exercise="${index}"
        placeholder="Type your answer…"
        value="${escapeHtml(userAnswer || '')}"
        ${submitted ? 'disabled' : ''}
        aria-label="Answer for exercise ${index + 1}"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
      />
      <button 
        class="submit-btn" 
        id="fb-btn-${topicId}-${index}"
        data-topic="${topicId}"
        data-exercise="${index}"
        ${submitted ? 'disabled' : ''}
      >Submit</button>
    </div>
    ${feedbackHtml}
  </div>`;
}

// ===== Attach Event Handlers =====
function attachExerciseHandlers(topicExercises, topicId) {
  topicExercises.forEach((exercise, index) => {
    if (exercise.type === 'multiple-choice') {
      const buttons = mainContent.querySelectorAll(
        `.mc-btn[data-topic="${topicId}"][data-exercise="${index}"]`
      );
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          const optionIndex = parseInt(btn.getAttribute('data-option'), 10);
          handleMCAnswer(topicId, index, optionIndex, exercise);
        });
      });
    } else if (exercise.type === 'fill-blank') {
      const input = document.getElementById(`fb-input-${topicId}-${index}`);
      const submitBtn = document.getElementById(`fb-btn-${topicId}-${index}`);

      if (input) {
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            handleFillBlank(topicId, index, exercise);
          }
        });
      }
      if (submitBtn) {
        submitBtn.addEventListener('click', () => {
          handleFillBlank(topicId, index, exercise);
        });
      }
    }
  });
}

// ===== Handle MC Answer =====
function handleMCAnswer(topicId, exerciseIndex, selectedIndex, exercise) {
  const exStates = state.exerciseStates[topicId];
  if (!exStates || exStates[exerciseIndex].submitted) return;

  const isCorrect = selectedIndex === exercise.correct;
  exStates[exerciseIndex] = { submitted: true, selectedAnswer: selectedIndex };

  // Update score
  if (!state.scores[topicId]) state.scores[topicId] = { correct: 0, total: 0 };
  state.scores[topicId].total += 1;
  if (isCorrect) state.scores[topicId].correct += 1;

  // Update UI for this card
  const card = document.getElementById(`ex-card-${topicId}-${exerciseIndex}`);
  if (card) {
    card.className = `exercise-card ${isCorrect ? 'answered-correct' : 'answered-wrong'}`;

    // Update buttons
    const buttons = card.querySelectorAll('.mc-btn');
    buttons.forEach((btn, i) => {
      btn.disabled = true;
      if (i === exercise.correct) {
        btn.className = selectedIndex === i ? 'mc-btn correct' : 'mc-btn correct-reveal';
      } else if (i === selectedIndex) {
        btn.className = 'mc-btn wrong';
      }
    });

    // Add feedback
    let feedback = card.querySelector('.feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      card.appendChild(feedback);
    }
    feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'} show`;
    feedback.innerHTML = isCorrect
      ? '✅ Correct!'
      : `❌ Incorrect. The correct answer is: <strong>${escapeHtml(exercise.options[exercise.correct])}</strong>`;
  }

  updateScore(topicId);
  saveState();
}

// ===== Handle Fill Blank =====
function handleFillBlank(topicId, exerciseIndex, exercise) {
  const exStates = state.exerciseStates[topicId];
  if (!exStates || exStates[exerciseIndex].submitted) return;

  const input = document.getElementById(`fb-input-${topicId}-${exerciseIndex}`);
  if (!input) return;

  const userAnswer = input.value.trim();
  if (!userAnswer) return;

  const isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(exercise.answer);
  exStates[exerciseIndex] = { submitted: true, selectedAnswer: userAnswer };

  // Update score
  if (!state.scores[topicId]) state.scores[topicId] = { correct: 0, total: 0 };
  state.scores[topicId].total += 1;
  if (isCorrect) state.scores[topicId].correct += 1;

  // Update UI
  const card = document.getElementById(`ex-card-${topicId}-${exerciseIndex}`);
  if (card) {
    card.className = `exercise-card ${isCorrect ? 'answered-correct' : 'answered-wrong'}`;

    input.className = `fill-blank-input ${isCorrect ? 'correct' : 'wrong'}`;
    input.disabled = true;

    const submitBtn = document.getElementById(`fb-btn-${topicId}-${exerciseIndex}`);
    if (submitBtn) submitBtn.disabled = true;

    if (!isCorrect) {
      // Trigger shake by re-applying class
      input.classList.remove('wrong');
      void input.offsetWidth; // force reflow
      input.classList.add('wrong');
    }

    // Add feedback
    let feedback = card.querySelector('.feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      card.appendChild(feedback);
    }
    feedback.className = `feedback ${isCorrect ? 'correct' : 'wrong'} show`;
    feedback.innerHTML = isCorrect
      ? '✅ Correct!'
      : `❌ Incorrect. The correct answer is: <strong>${escapeHtml(exercise.answer)}</strong>`;
  }

  updateScore(topicId);
  saveState();
}

// ===== Update Score Display =====
function updateScore(topicId) {
  const score = state.scores[topicId] || { correct: 0, total: 0 };
  const scoreDisplay = document.getElementById(`score-display-${topicId}`);
  if (scoreDisplay) {
    scoreDisplay.innerHTML = `Score: <span class="score-fraction">${score.correct} / ${score.total}</span>`;
  }

  // Update progress bar
  const topicExercises = exercises[topicId] || [];
  const exStates = state.exerciseStates[topicId] || [];
  const answeredCount = exStates.filter(s => s.submitted).length;
  const progressPct = topicExercises.length > 0 ? (answeredCount / topicExercises.length) * 100 : 0;

  const progressBar = document.getElementById(`topic-progress-${topicId}`);
  if (progressBar) {
    progressBar.style.width = progressPct + '%';
  }

  updateProgress();
  // Refresh sidebar to show/remove checkmarks
  renderSidebar();
}

// ===== Update Header Progress =====
function updateProgress() {
  let completedCount = 0;
  topics.forEach(topic => {
    const score = state.scores[topic.id];
    const topicExercises = exercises[topic.id] || [];
    if (score && topicExercises.length > 0 && score.correct === topicExercises.length) {
      completedCount++;
    }
  });

  if (progressText) {
    progressText.textContent = `${completedCount}/26 topics completed`;
  }
  if (headerProgressFill) {
    headerProgressFill.style.width = `${(completedCount / 26) * 100}%`;
  }
}

// ===== Sidebar Toggle (Mobile) =====
function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  sidebar.classList.toggle('open', state.sidebarOpen);
  overlay.classList.toggle('active', state.sidebarOpen);
  hamburger.classList.toggle('active', state.sidebarOpen);
  hamburger.setAttribute('aria-expanded', state.sidebarOpen.toString());
}

function closeSidebar() {
  state.sidebarOpen = false;
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
  hamburger.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
}

// ===== Persistence (localStorage) =====
const STORAGE_KEY = 'spanish-grammar-state';

function saveState() {
  try {
    const toSave = {
      scores: state.scores,
      exerciseStates: state.exerciseStates,
      currentTopic: state.currentTopic
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {
    // localStorage not available (e.g., private mode restrictions)
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.scores) state.scores = parsed.scores;
      if (parsed.exerciseStates) state.exerciseStates = parsed.exerciseStates;
      if (parsed.currentTopic) state.currentTopic = parsed.currentTopic;
    }
  } catch (e) {
    // Ignore parse errors
  }
}

// ===== Utility Functions =====
function normalizeAnswer(str) {
  if (!str) return '';
  return str.trim().toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // remove diacritics for lenient matching
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ===== Start the App =====
document.addEventListener('DOMContentLoaded', init);
