// js/data.js — All 26 Spanish grammar topics

const topics = [
  {
    id: 1,
    title: "Presente de verbos regulares e irregulares",
    explanation: `<p>The <strong>present tense (presente de indicativo)</strong> describes current actions, habitual actions, and general truths. Spanish verbs belong to three groups based on their infinitive endings: <strong>-AR</strong>, <strong>-ER</strong>, and <strong>-IR</strong>. To conjugate a regular verb, remove the infinitive ending and add the endings for each person.</p>
<p>For <em>-AR verbs</em>: <strong>-o, -as, -a, -amos, -áis, -an</strong>. For <em>-ER verbs</em>: <strong>-o, -es, -e, -emos, -éis, -en</strong>. For <em>-IR verbs</em>: <strong>-o, -es, -e, -imos, -ís, -en</strong>. Notice that -ER and -IR share most endings except the nosotros and vosotros forms.</p>
<p>Many frequent verbs are <strong>irregular</strong> and must be memorized. The most important are: <em>ser</em> (to be — permanent), <em>estar</em> (to be — temporary/location), <em>tener</em> (to have), <em>ir</em> (to go), and <em>hacer</em> (to do/make). These verbs appear in countless structures, so mastering them is essential.</p>`,
    tables: [
      {
        title: "Regular -AR: HABLAR (to speak)",
        headers: ["Person", "Pronoun", "Form"],
        rows: [
          ["1ª sg", "yo", "hablo"],
          ["2ª sg", "tú", "hablas"],
          ["3ª sg", "él/ella/Ud.", "habla"],
          ["1ª pl", "nosotros", "hablamos"],
          ["2ª pl", "vosotros", "habláis"],
          ["3ª pl", "ellos/Uds.", "hablan"]
        ]
      },
      {
        title: "Regular -ER: COMER (to eat)",
        headers: ["Person", "Pronoun", "Form"],
        rows: [
          ["1ª sg", "yo", "como"],
          ["2ª sg", "tú", "comes"],
          ["3ª sg", "él/ella/Ud.", "come"],
          ["1ª pl", "nosotros", "comemos"],
          ["2ª pl", "vosotros", "coméis"],
          ["3ª pl", "ellos/Uds.", "comen"]
        ]
      },
      {
        title: "Regular -IR: VIVIR (to live)",
        headers: ["Person", "Pronoun", "Form"],
        rows: [
          ["1ª sg", "yo", "vivo"],
          ["2ª sg", "tú", "vives"],
          ["3ª sg", "él/ella/Ud.", "vive"],
          ["1ª pl", "nosotros", "vivimos"],
          ["2ª pl", "vosotros", "vivís"],
          ["3ª pl", "ellos/Uds.", "viven"]
        ]
      },
      {
        title: "Irregular Verbs: SER / ESTAR / TENER / IR",
        headers: ["Pronoun", "SER", "ESTAR", "TENER", "IR"],
        rows: [
          ["yo", "soy", "estoy", "tengo", "voy"],
          ["tú", "eres", "estás", "tienes", "vas"],
          ["él/ella", "es", "está", "tiene", "va"],
          ["nosotros", "somos", "estamos", "tenemos", "vamos"],
          ["vosotros", "sois", "estáis", "tenéis", "vais"],
          ["ellos/Uds.", "son", "están", "tienen", "van"]
        ]
      }
    ],
    examples: [
      { spanish: "Yo hablo español todos los días.", english: "I speak Spanish every day." },
      { spanish: "El tren va muy rápido.", english: "The train goes very fast." },
      { spanish: "Nosotros comemos a las dos.", english: "We eat at two o'clock." },
      { spanish: "¿Dónde vives tú?", english: "Where do you live?" },
      { spanish: "Él tiene mucho trabajo.", english: "He has a lot of work." },
      { spanish: "Ella es profesora de música.", english: "She is a music teacher." }
    ]
  },

  {
    id: 2,
    title: "Presente: DAR, TRAER, SABER, OÍR",
    explanation: `<p>Four common Spanish verbs have notable irregularities in the <strong>present tense</strong>. They follow regular patterns for most persons but have a special first-person singular (<em>yo</em>) form that must be memorized.</p>
<p><strong>DAR</strong> (to give): <em>doy</em>, das, da, damos, dais, dan. Note the accent-free monosyllabic forms. <strong>TRAER</strong> (to bring): <em>traigo</em>, traes, trae, traemos, traéis, traen — the <em>-go</em> ending appears in the yo form. <strong>SABER</strong> (to know facts): <em>sé</em>, sabes, sabe, sabemos, sabéis, saben. <strong>OÍR</strong> (to hear): <em>oigo</em>, oyes, oye, oímos, oís, oyen — note the <em>y</em> appearing in some forms.</p>
<p>Remember: <em>SABER</em> means to know a fact or how to do something, while <em>CONOCER</em> means to know a person or place. Similarly, <em>OÍR</em> is to hear (physically) while <em>ESCUCHAR</em> is to listen (actively). These distinctions are important for accurate communication.</p>`,
    tables: [
      {
        title: "DAR (to give)",
        headers: ["Pronoun", "DAR"],
        rows: [
          ["yo", "doy"],
          ["tú", "das"],
          ["él/ella", "da"],
          ["nosotros", "damos"],
          ["vosotros", "dais"],
          ["ellos/Uds.", "dan"]
        ]
      },
      {
        title: "TRAER (to bring)",
        headers: ["Pronoun", "TRAER"],
        rows: [
          ["yo", "traigo"],
          ["tú", "traes"],
          ["él/ella", "trae"],
          ["nosotros", "traemos"],
          ["vosotros", "traéis"],
          ["ellos/Uds.", "traen"]
        ]
      },
      {
        title: "SABER (to know)",
        headers: ["Pronoun", "SABER"],
        rows: [
          ["yo", "sé"],
          ["tú", "sabes"],
          ["él/ella", "sabe"],
          ["nosotros", "sabemos"],
          ["vosotros", "sabéis"],
          ["ellos/Uds.", "saben"]
        ]
      },
      {
        title: "OÍR (to hear)",
        headers: ["Pronoun", "OÍR"],
        rows: [
          ["yo", "oigo"],
          ["tú", "oyes"],
          ["él/ella", "oye"],
          ["nosotros", "oímos"],
          ["vosotros", "oís"],
          ["ellos/Uds.", "oyen"]
        ]
      }
    ],
    examples: [
      { spanish: "Te doy mi número de teléfono.", english: "I give you my phone number." },
      { spanish: "¿Qué traes en la mochila?", english: "What are you bringing in your backpack?" },
      { spanish: "Yo sé la respuesta correcta.", english: "I know the correct answer." },
      { spanish: "Oigo música desde mi cuarto.", english: "I hear music from my room." },
      { spanish: "Ellos traen la comida para la fiesta.", english: "They bring the food for the party." },
      { spanish: "¿Sabes tocar la guitarra?", english: "Do you know how to play the guitar?" }
    ]
  },

  {
    id: 3,
    title: "IR A + INFINITIVO, ACABAR DE + INFINITIVO",
    explanation: `<p><strong>IR A + infinitivo</strong> expresses a future action that is planned or about to happen — equivalent to English "going to + verb." The verb <em>ir</em> is conjugated in the present tense and is followed by <em>a</em> and an infinitive: <em>Voy a estudiar</em> (I'm going to study). This is the most common way to express the near future in everyday Spanish.</p>
<p><strong>ACABAR DE + infinitivo</strong> expresses a recently completed action — equivalent to English "have/has just + past participle." The verb <em>acabar</em> is conjugated in the present tense: <em>Acabo de llegar</em> (I have just arrived). This periphrasis implies the action happened only moments or a short time ago.</p>
<p>Both structures are called <strong>perífrasis verbales</strong> (verbal periphrases) — combinations of a conjugated verb + connector + infinitive. They are extremely common in spoken Spanish and essential for describing timing and sequence of events.</p>`,
    tables: [
      {
        title: "IR A + Infinitivo (Near Future)",
        headers: ["Pronoun", "IR A", "Example"],
        rows: [
          ["yo", "voy a", "Voy a estudiar"],
          ["tú", "vas a", "Vas a comer"],
          ["él/ella", "va a", "Va a salir"],
          ["nosotros", "vamos a", "Vamos a trabajar"],
          ["vosotros", "vais a", "Vais a viajar"],
          ["ellos/Uds.", "van a", "Van a llegar"]
        ]
      },
      {
        title: "ACABAR DE + Infinitivo (Recent Past)",
        headers: ["Pronoun", "ACABAR DE", "Example"],
        rows: [
          ["yo", "acabo de", "Acabo de llegar"],
          ["tú", "acabas de", "Acabas de comer"],
          ["él/ella", "acaba de", "Acaba de salir"],
          ["nosotros", "acabamos de", "Acabamos de terminar"],
          ["vosotros", "acabáis de", "Acabáis de leer"],
          ["ellos/Uds.", "acaban de", "Acaban de abrir"]
        ]
      }
    ],
    examples: [
      { spanish: "Voy a estudiar esta tarde.", english: "I'm going to study this afternoon." },
      { spanish: "Acabo de llegar a casa.", english: "I have just arrived home." },
      { spanish: "¿Vas a venir a la fiesta?", english: "Are you going to come to the party?" },
      { spanish: "Ella acaba de llamar por teléfono.", english: "She has just called on the phone." },
      { spanish: "Vamos a visitar a los abuelos este fin de semana.", english: "We're going to visit the grandparents this weekend." },
      { spanish: "Acaban de publicar el nuevo libro.", english: "They have just published the new book." }
    ]
  },

  {
    id: 4,
    title: "Pronombres personales-complementos. Verbos pronominales",
    explanation: `<p><strong>Object pronouns</strong> replace nouns that function as direct or indirect objects. <em>Direct object pronouns</em> answer the question "what?" or "whom?": <em>me, te, lo/la, nos, os, los/las</em>. <em>Indirect object pronouns</em> answer "to/for whom?": <em>me, te, le, nos, os, les</em>. Object pronouns are placed directly before a conjugated verb or attached to an infinitive or gerund.</p>
<p><strong>Pronominal (reflexive) verbs</strong> use reflexive pronouns (<em>me, te, se, nos, os, se</em>) to indicate that the subject performs the action on itself. Common examples: <em>lavarse</em> (to wash oneself), <em>levantarse</em> (to get up), <em>llamarse</em> (to be called/named). These verbs are listed in dictionaries with <em>-se</em> attached to the infinitive.</p>
<p>When two object pronouns are used together, the indirect pronoun always comes first: <em>Te lo doy</em> (I give it to you). If both pronouns start with <em>l-</em> (le/les + lo/la/los/las), the indirect pronoun <em>le/les</em> becomes <em>se</em>: <em>Se lo doy a él</em> (I give it to him). The order is fixed: reflexive → indirect → direct.</p>`,
    tables: [
      {
        title: "Direct Object Pronouns",
        headers: ["Person", "Singular", "Plural"],
        rows: [
          ["1st", "me (me)", "nos (us)"],
          ["2nd", "te (you)", "os (you all)"],
          ["3rd masc.", "lo (him/it)", "los (them)"],
          ["3rd fem.", "la (her/it)", "las (them)"]
        ]
      },
      {
        title: "Indirect Object Pronouns",
        headers: ["Person", "Singular", "Plural"],
        rows: [
          ["1st", "me (to/for me)", "nos (to/for us)"],
          ["2nd", "te (to/for you)", "os (to/for you all)"],
          ["3rd", "le (to/for him/her)", "les (to/for them)"]
        ]
      },
      {
        title: "Reflexive Verbs — LAVARSE (to wash oneself)",
        headers: ["Pronoun", "Reflexive", "Form"],
        rows: [
          ["yo", "me", "me lavo"],
          ["tú", "te", "te lavas"],
          ["él/ella", "se", "se lava"],
          ["nosotros", "nos", "nos lavamos"],
          ["vosotros", "os", "os laváis"],
          ["ellos/Uds.", "se", "se lavan"]
        ]
      }
    ],
    examples: [
      { spanish: "Me lavo los dientes cada mañana.", english: "I brush my teeth every morning." },
      { spanish: "Te llamo mañana.", english: "I'll call you tomorrow." },
      { spanish: "Ella se levanta a las siete.", english: "She gets up at seven." },
      { spanish: "¿Cómo te llamas?", english: "What is your name?" },
      { spanish: "Lo veo todos los días en clase.", english: "I see him every day in class." },
      { spanish: "Nos sentamos en la primera fila.", english: "We sit in the first row." }
    ]
  },

  {
    id: 5,
    title: "Estilo indirecto",
    explanation: `<p><strong>Indirect speech (estilo indirecto)</strong> is used to report what someone said without quoting them directly. When reporting speech, the tense of the verb in the reported clause usually shifts back in time. The main reporting verbs are <em>decir que</em> (to say that), <em>contar que</em> (to tell that), <em>explicar que</em> (to explain that).</p>
<p>Key tense changes when the reporting verb is in the past: <strong>present → imperfect</strong> (<em>"Tengo hambre" → Dijo que tenía hambre</em>), <strong>preterite → pluperfect</strong> (<em>"Llegué tarde" → Dijo que había llegado tarde</em>), <strong>future → conditional</strong> (<em>"Vendré" → Dijo que vendría</em>). When the reporting verb is in the present, the original tenses are often kept.</p>
<p>Pronouns, possessives, and adverbs also change in indirect speech. <em>Yo</em> → él/ella, <em>mi</em> → su, <em>aquí</em> → allí, <em>hoy</em> → ese día, <em>mañana</em> → el día siguiente. These adjustments are necessary to maintain logical coherence when shifting from direct to reported speech.</p>`,
    tables: [
      {
        title: "Tense Changes in Indirect Speech",
        headers: ["Direct Speech (Estilo Directo)", "Indirect Speech (Estilo Indirecto)"],
        rows: [
          ["Presente: «Tengo hambre»", "Imperfecto: Dijo que tenía hambre"],
          ["Pretérito: «Llegué tarde»", "Pluscuamperfecto: Dijo que había llegado tarde"],
          ["Futuro: «Vendré mañana»", "Condicional: Dijo que vendría al día siguiente"],
          ["Imperativo: «¡Ven!»", "Infinitivo: Le dijo que viniera"],
          ["«Estoy aquí»", "Dijo que estaba allí"],
          ["«Es hoy»", "Dijo que era ese día"]
        ]
      }
    ],
    examples: [
      { spanish: "Dice que tiene hambre.", english: "He says he is hungry." },
      { spanish: "Dijo que vendría mañana.", english: "He said he would come the next day." },
      { spanish: "Me contó que había estado en Madrid.", english: "She told me she had been in Madrid." },
      { spanish: "Explicó que no sabía la respuesta.", english: "He explained that he didn't know the answer." },
      { spanish: "Dijeron que llegarían tarde.", english: "They said they would arrive late." }
    ]
  },

  {
    id: 6,
    title: "Futuro de indicativo",
    explanation: `<p>The <strong>future tense (futuro de indicativo)</strong> expresses actions that will happen. For regular verbs, the future is formed by adding the endings <strong>-é, -ás, -á, -emos, -éis, -án</strong> directly to the <em>infinitive</em> (not to the stem). This makes regular future conjugation particularly easy: <em>hablar → hablaré, hablarás, hablará…</em></p>
<p>Several common verbs have <strong>irregular future stems</strong> that must be memorized. The endings remain the same, but the infinitive is modified: <em>decir → dir-</em>, <em>hacer → har-</em>, <em>poder → podr-</em>, <em>poner → pondr-</em>, <em>querer → querr-</em>, <em>saber → sabr-</em>, <em>salir → saldr-</em>, <em>tener → tendr-</em>, <em>venir → vendr-</em>. These irregulars fall into predictable patterns.</p>
<p>The future is also used to express <strong>probability or supposition</strong> about the present: <em>¿Dónde estará María?</em> (I wonder where María is). This "future of probability" is very common in everyday Spanish conversation and signals uncertainty rather than futurity.</p>`,
    tables: [
      {
        title: "Regular Future: HABLAR",
        headers: ["Pronoun", "HABLAR", "COMER", "VIVIR"],
        rows: [
          ["yo", "hablaré", "comeré", "viviré"],
          ["tú", "hablarás", "comerás", "vivirás"],
          ["él/ella", "hablará", "comerá", "vivirá"],
          ["nosotros", "hablaremos", "comeremos", "viviremos"],
          ["vosotros", "hablaréis", "comeréis", "viviréis"],
          ["ellos/Uds.", "hablarán", "comerán", "vivirán"]
        ]
      },
      {
        title: "Irregular Future Stems",
        headers: ["Infinitive", "Stem", "Yo form"],
        rows: [
          ["decir", "dir-", "diré"],
          ["hacer", "har-", "haré"],
          ["poder", "podr-", "podré"],
          ["poner", "pondr-", "pondré"],
          ["querer", "querr-", "querré"],
          ["saber", "sabr-", "sabré"],
          ["salir", "saldr-", "saldré"],
          ["tener", "tendr-", "tendré"],
          ["venir", "vendr-", "vendré"]
        ]
      }
    ],
    examples: [
      { spanish: "Mañana iré al médico.", english: "Tomorrow I will go to the doctor." },
      { spanish: "¿Vendrás a la fiesta el sábado?", english: "Will you come to the party on Saturday?" },
      { spanish: "Haremos todo lo posible.", english: "We will do everything possible." },
      { spanish: "El año que viene viajaré a España.", english: "Next year I will travel to Spain." },
      { spanish: "Tendrán que estudiar más.", english: "They will have to study more." },
      { spanish: "¿Dónde estará mi móvil?", english: "I wonder where my phone is." }
    ]
  },

  {
    id: 7,
    title: "Gerundio",
    explanation: `<p>The <strong>gerund (gerundio)</strong> is formed by removing the infinitive ending and adding <strong>-ando</strong> (for -AR verbs) or <strong>-iendo</strong> (for -ER and -IR verbs): <em>hablar → hablando</em>, <em>comer → comiendo</em>, <em>vivir → viviendo</em>. The gerund is invariable — it never changes for gender or number.</p>
<p>Some verbs have <strong>irregular gerunds</strong>. When the stem of an -ER or -IR verb ends in a vowel, the -iendo ending becomes <strong>-yendo</strong>: <em>leer → leyendo</em>, <em>ir → yendo</em>, <em>caer → cayendo</em>. Stem-changing -IR verbs change their stem vowel in the gerund: <em>dormir → durmiendo</em>, <em>poder → pudiendo</em>, <em>decir → diciendo</em>, <em>venir → viniendo</em>.</p>
<p>The gerund is used in progressive tenses with <em>estar</em>, <em>llevar</em>, <em>seguir</em>, and <em>ir</em>. It describes an action in progress. Note: unlike English, the Spanish gerund is <strong>never used as a noun</strong> (that role belongs to the infinitive) and should not be used as an adjective.</p>`,
    tables: [
      {
        title: "Regular Gerunds",
        headers: ["Infinitive", "Ending", "Gerund"],
        rows: [
          ["hablar", "-ando", "hablando"],
          ["trabajar", "-ando", "trabajando"],
          ["comer", "-iendo", "comiendo"],
          ["beber", "-iendo", "bebiendo"],
          ["vivir", "-iendo", "viviendo"],
          ["escribir", "-iendo", "escribiendo"]
        ]
      },
      {
        title: "Irregular Gerunds",
        headers: ["Infinitive", "Gerund", "Note"],
        rows: [
          ["ir", "yendo", "irregular"],
          ["leer", "leyendo", "vowel + yendo"],
          ["oír", "oyendo", "vowel + yendo"],
          ["caer", "cayendo", "vowel + yendo"],
          ["poder", "pudiendo", "stem change o→u"],
          ["dormir", "durmiendo", "stem change o→u"],
          ["decir", "diciendo", "stem change e→i"],
          ["venir", "viniendo", "stem change e→i"],
          ["pedir", "pidiendo", "stem change e→i"]
        ]
      }
    ],
    examples: [
      { spanish: "Estoy estudiando para el examen.", english: "I am studying for the exam." },
      { spanish: "Ella sigue trabajando hasta tarde.", english: "She keeps working until late." },
      { spanish: "Van corriendo hacia la parada.", english: "They are running towards the bus stop." },
      { spanish: "Lleva dos horas durmiendo.", english: "He has been sleeping for two hours." },
      { spanish: "Lo vi saliendo del banco.", english: "I saw him leaving the bank." }
    ]
  },

  {
    id: 8,
    title: "ESTAR + gerundio, LLEVAR + gerundio, SEGUIR + gerundio",
    explanation: `<p><strong>ESTAR + gerundio</strong> forms the progressive tenses and expresses an action in progress at a specific moment: <em>Estoy comiendo</em> (I am eating right now). It emphasizes the ongoing nature of the action. It is equivalent to the English "-ing" continuous forms but is used more restrictively — only for actions truly in progress at that instant.</p>
<p><strong>LLEVAR + time expression + gerundio</strong> expresses the duration of an ongoing action — how long something has been happening: <em>Llevo tres horas estudiando</em> (I've been studying for three hours). The action started in the past and is still continuing. Llevar is conjugated to agree with the subject and the time expression indicates the duration.</p>
<p><strong>SEGUIR + gerundio</strong> means to continue doing something: <em>Sigue lloviendo</em> (It keeps raining / It's still raining). Another verb with similar meaning is <em>continuar + gerundio</em>. These constructions emphasize that an action that was in progress has not stopped. Together, these three constructions cover the main ways Spanish expresses ongoing actions.</p>`,
    tables: [
      {
        title: "ESTAR + Gerundio (Progressive)",
        headers: ["Pronoun", "ESTAR + Gerundio"],
        rows: [
          ["yo", "estoy hablando"],
          ["tú", "estás comiendo"],
          ["él/ella", "está trabajando"],
          ["nosotros", "estamos viviendo"],
          ["vosotros", "estáis estudiando"],
          ["ellos/Uds.", "están durmiendo"]
        ]
      },
      {
        title: "LLEVAR + Time + Gerundio (Duration)",
        headers: ["Example", "Meaning"],
        rows: [
          ["Llevo una hora esperando", "I've been waiting for an hour"],
          ["Lleva dos días enfermo", "He's been sick for two days"],
          ["Llevamos tres años viviendo aquí", "We've been living here for three years"],
          ["¿Cuánto tiempo llevas estudiando?", "How long have you been studying?"]
        ]
      },
      {
        title: "SEGUIR + Gerundio (Continuation)",
        headers: ["Example", "Meaning"],
        rows: [
          ["Sigue lloviendo", "It keeps raining / It's still raining"],
          ["Sigo esperando tu respuesta", "I'm still waiting for your answer"],
          ["Siguen trabajando allí", "They're still working there"],
          ["¿Sigues viviendo en Madrid?", "Are you still living in Madrid?"]
        ]
      }
    ],
    examples: [
      { spanish: "Estoy comiendo ahora mismo.", english: "I am eating right now." },
      { spanish: "Llevo tres horas estudiando.", english: "I've been studying for three hours." },
      { spanish: "Sigue lloviendo mucho.", english: "It keeps raining a lot." },
      { spanish: "¿Cuánto tiempo llevas esperando?", english: "How long have you been waiting?" },
      { spanish: "Están construyendo un edificio nuevo.", english: "They are building a new building." },
      { spanish: "Mi hermano sigue viviendo con mis padres.", english: "My brother is still living with my parents." }
    ]
  },

  {
    id: 9,
    title: "Pronombres demostrativos",
    explanation: `<p><strong>Demonstrative pronouns (pronombres demostrativos)</strong> point to things in relation to the speaker's position. Spanish has three levels of distance, unlike English which only has two (this/that). They agree in gender and number with the noun they replace.</p>
<p><strong>ESTE/ESTA/ESTO/ESTOS/ESTAS</strong> — "this/these": refer to things close to the speaker. <em>Este</em> is masculine singular, <em>esta</em> is feminine singular, <em>esto</em> is neuter (for unknown or abstract things), <em>estos/estas</em> are plural. <strong>ESE/ESA/ESO/ESOS/ESAS</strong> — "that/those": refer to things near the person being spoken to or at a medium distance. <strong>AQUEL/AQUELLA/AQUELLO/AQUELLOS/AQUELLAS</strong> — "that/those (over there)": refer to things far from both speaker and listener.</p>
<p>The neuter forms (<em>esto, eso, aquello</em>) are used when referring to an <strong>idea, situation, or unidentified object</strong>. They never change form. Note: Modern Spanish no longer requires written accents on demonstrative pronouns (the accent was removed in the 2010 RAE reform), though you may still see accents in older texts.</p>`,
    tables: [
      {
        title: "Demonstrative Pronouns",
        headers: ["Distance", "Masc. Sg.", "Fem. Sg.", "Neuter", "Masc. Pl.", "Fem. Pl."],
        rows: [
          ["Close (here)", "este", "esta", "esto", "estos", "estas"],
          ["Medium (there)", "ese", "esa", "eso", "esos", "esas"],
          ["Far (over there)", "aquel", "aquella", "aquello", "aquellos", "aquellas"]
        ]
      }
    ],
    examples: [
      { spanish: "Este libro es muy interesante.", english: "This book is very interesting." },
      { spanish: "¿Qué es eso?", english: "What is that?" },
      { spanish: "Aquella montaña es la más alta.", english: "That mountain over there is the highest." },
      { spanish: "Estos zapatos me duelen.", english: "These shoes hurt me." },
      { spanish: "Prefiero esa camisa roja.", english: "I prefer that red shirt." },
      { spanish: "Todo aquello fue un sueño.", english: "All that was a dream." }
    ]
  },

  {
    id: 10,
    title: "Adverbios de lugar y adverbios de modo con -mente",
    explanation: `<p><strong>Adverbs of place</strong> indicate location and mirror the three-distance system of demonstratives. <em>Aquí</em> (here) refers to where the speaker is; <em>ahí</em> (there) refers to where the listener is or a nearby place; <em>allí/allá</em> (over there) refers to a place far from both. Additional place adverbs include <em>arriba/abajo</em> (up/down), <em>dentro/fuera</em> (inside/outside), <em>cerca/lejos</em> (near/far), <em>delante/detrás</em> (in front of/behind).</p>
<p><strong>Adverbs ending in -mente</strong> are formed by adding <em>-mente</em> to the <strong>feminine form</strong> of an adjective (or the base form if the adjective doesn't change for gender). Examples: <em>rápido → rápida → rápidamente</em> (quickly), <em>fácil → fácilmente</em> (easily), <em>lento → lenta → lentamente</em> (slowly). If the adjective has a written accent, the -mente adverb keeps it.</p>
<p>When two or more -mente adverbs appear in a series, only the <strong>last one</strong> keeps the -mente suffix — all preceding ones use the feminine adjective form: <em>Habló clara y lentamente</em> (He spoke clearly and slowly). This rule prevents the awkward repetition of -mente.</p>`,
    tables: [
      {
        title: "Adverbs of Place",
        headers: ["Spanish", "English", "Distance"],
        rows: [
          ["aquí", "here", "near speaker"],
          ["ahí", "there", "near listener"],
          ["allí / allá", "over there", "far from both"],
          ["arriba", "up / above", "—"],
          ["abajo", "down / below", "—"],
          ["dentro", "inside", "—"],
          ["fuera", "outside", "—"],
          ["cerca", "near / close", "—"],
          ["lejos", "far", "—"]
        ]
      },
      {
        title: "-mente Adverbs",
        headers: ["Adjective", "Feminine", "-mente Adverb"],
        rows: [
          ["rápido", "rápida", "rápidamente"],
          ["lento", "lenta", "lentamente"],
          ["fácil", "fácil", "fácilmente"],
          ["difícil", "difícil", "difícilmente"],
          ["tranquilo", "tranquila", "tranquilamente"],
          ["fuerte", "fuerte", "fuertemente"],
          ["general", "general", "generalmente"],
          ["normal", "normal", "normalmente"]
        ]
      }
    ],
    examples: [
      { spanish: "Ven aquí, por favor.", english: "Come here, please." },
      { spanish: "El libro está allí, sobre la mesa.", english: "The book is over there, on the table." },
      { spanish: "Habla muy rápidamente.", english: "He speaks very quickly." },
      { spanish: "Generalmente como a las dos.", english: "I generally eat at two." },
      { spanish: "La tienda está bastante lejos.", english: "The shop is quite far." },
      { spanish: "Respondió tranquila y claramente.", english: "She answered calmly and clearly." }
    ]
  },

  {
    id: 11,
    title: "Proposiciones compuestas",
    explanation: `<p><strong>Compound sentences (proposiciones compuestas)</strong> are formed by joining two or more clauses with conjunctions. <strong>Coordinating conjunctions</strong> link clauses of equal grammatical rank: <em>y/e</em> (and), <em>o/u</em> (or), <em>pero</em> (but — contrasting), <em>sino</em> (but rather — after a negative), <em>ni</em> (nor), <em>pues</em> (so/well). Note: <em>e</em> replaces <em>y</em> before words starting with <em>i-</em> or <em>hi-</em>; <em>u</em> replaces <em>o</em> before <em>o-</em> or <em>ho-</em>.</p>
<p><strong>Subordinating conjunctions</strong> introduce dependent clauses: <em>que</em> (that), <em>porque</em> (because), <em>aunque</em> (although/even though), <em>cuando</em> (when), <em>si</em> (if), <em>como</em> (as/how), <em>para que</em> (so that), <em>a menos que</em> (unless). These clauses cannot stand alone and depend on the main clause.</p>
<p><strong>Pero</strong> vs. <strong>sino</strong>: Use <em>pero</em> after an affirmative clause to add a contrast. Use <em>sino</em> after a negative clause to introduce a correction or alternative: <em>No es rojo sino azul</em> (It's not red but blue). <em>Sino que</em> is used when the correction involves a conjugated verb: <em>No lo compró sino que lo pidió prestado</em>.</p>`,
    tables: [
      {
        title: "Coordinating Conjunctions",
        headers: ["Conjunction", "Meaning", "Example"],
        rows: [
          ["y / e", "and", "Habla español e italiano"],
          ["o / u", "or", "¿Café u otro?"],
          ["pero", "but (contrast)", "Es barato pero no es bueno"],
          ["sino", "but rather", "No es rojo sino azul"],
          ["ni…ni", "neither…nor", "Ni come ni duerme"],
          ["pues", "so / well", "No sé, pues pregunta"]
        ]
      },
      {
        title: "Subordinating Conjunctions",
        headers: ["Conjunction", "Meaning", "Example"],
        rows: [
          ["que", "that", "Creo que tiene razón"],
          ["porque", "because", "No fui porque llovía"],
          ["aunque", "although / even if", "Aunque llueva, iré"],
          ["cuando", "when", "Llámame cuando llegues"],
          ["si", "if", "Si estudias, aprobarás"],
          ["como", "as / how / if", "Como llegues tarde, no entras"],
          ["para que", "so that", "Estudio para que me entiendan"],
          ["a menos que", "unless", "Iré a menos que llueva"]
        ]
      }
    ],
    examples: [
      { spanish: "Habla español e inglés perfectamente.", english: "She speaks Spanish and English perfectly." },
      { spanish: "No quiero café sino té.", english: "I don't want coffee but tea." },
      { spanish: "Aunque está cansada, sigue trabajando.", english: "Although she is tired, she keeps working." },
      { spanish: "Fui al cine porque no tenía nada que hacer.", english: "I went to the cinema because I had nothing to do." },
      { spanish: "Ni habla ni escucha.", english: "He neither speaks nor listens." }
    ]
  },

  {
    id: 12,
    title: "Numerales cardinales y ordinales",
    explanation: `<p><strong>Cardinal numbers (numerales cardinales)</strong> count quantity. Key rules: <em>uno</em> becomes <em>un</em> before a masculine noun (<em>un libro</em>) and <em>una</em> before a feminine noun (<em>una mesa</em>). Numbers 16-19 and 21-29 are written as one word (<em>dieciséis, veintiuno</em>). From 31 onward, they are written separately with <em>y</em>: <em>treinta y uno</em>. Hundreds agree in gender: <em>doscientas mesas</em> (200 tables, feminine).</p>
<p><strong>Ordinal numbers (numerales ordinales)</strong> indicate position or order. They agree in gender and number with the noun: <em>el primer libro</em>, <em>la primera página</em>, <em>los primeros días</em>. <em>Primero</em> and <em>tercero</em> shorten to <em>primer</em> and <em>tercer</em> before masculine singular nouns. Ordinals above tenth are often replaced by cardinals in informal speech: <em>el capítulo doce</em> instead of <em>el duodécimo capítulo</em>.</p>
<p>Special notes: <em>Cien</em> is used when the number is exactly 100 or precedes a noun (<em>cien personas</em>). <em>Ciento</em> is used in compound numbers: <em>ciento uno</em> (101). Large numbers: <em>mil</em> (1,000), <em>un millón</em> (1,000,000), <em>un billón</em> (1,000,000,000,000 — note: a Spanish <em>billón</em> is an English trillion!)</p>`,
    tables: [
      {
        title: "Cardinal Numbers",
        headers: ["Number", "Spanish"],
        rows: [
          ["1–5", "uno, dos, tres, cuatro, cinco"],
          ["6–10", "seis, siete, ocho, nueve, diez"],
          ["11–15", "once, doce, trece, catorce, quince"],
          ["16–20", "dieciséis, diecisiete, dieciocho, diecinueve, veinte"],
          ["21–30", "veintiuno, veintidós … treinta"],
          ["31, 40, 50", "treinta y uno, cuarenta, cincuenta"],
          ["60, 70, 80", "sesenta, setenta, ochenta"],
          ["90, 100", "noventa, cien/ciento"],
          ["200, 500, 1000", "doscientos/as, quinientos/as, mil"]
        ]
      },
      {
        title: "Ordinal Numbers",
        headers: ["Number", "Masc.", "Fem."],
        rows: [
          ["1st", "primero (primer)", "primera"],
          ["2nd", "segundo", "segunda"],
          ["3rd", "tercero (tercer)", "tercera"],
          ["4th", "cuarto", "cuarta"],
          ["5th", "quinto", "quinta"],
          ["6th", "sexto", "sexta"],
          ["7th", "séptimo", "séptima"],
          ["8th", "octavo", "octava"],
          ["9th", "noveno", "novena"],
          ["10th", "décimo", "décima"]
        ]
      }
    ],
    examples: [
      { spanish: "Tengo veintitrés años.", english: "I am twenty-three years old." },
      { spanish: "Vivo en el tercer piso.", english: "I live on the third floor." },
      { spanish: "Hay cien estudiantes en el aula.", english: "There are a hundred students in the classroom." },
      { spanish: "Es la primera vez que visito España.", english: "It's the first time I visit Spain." },
      { spanish: "El libro cuesta doscientos euros.", english: "The book costs two hundred euros." }
    ]
  },

  {
    id: 13,
    title: "Pretérito perfecto simple de indicativo",
    explanation: `<p>The <strong>preterite (pretérito perfecto simple / pretérito indefinido)</strong> expresses completed past actions at a specific moment, in a specific number of times, or during a completed period of time. It contrasts with the imperfect, which describes ongoing or habitual past situations.</p>
<p>Regular conjugation: <em>-AR verbs</em>: remove -ar, add <strong>-é, -aste, -ó, -amos, -asteis, -aron</strong> (<em>hablé, hablaste…</em>). <em>-ER/-IR verbs</em>: <strong>-í, -iste, -ió, -imos, -isteis, -ieron</strong> (<em>comí, comiste…</em>). Note: <em>-AR and -IR verbs</em> share the same nosotros form in preterite and present tense, so context is key.</p>
<p>Common time expressions that signal the preterite: <em>ayer</em> (yesterday), <em>anteayer</em> (the day before yesterday), <em>el año pasado</em> (last year), <em>la semana pasada</em> (last week), <em>hace dos días</em> (two days ago), <em>en 1999</em>, <em>de repente</em> (suddenly). These markers help identify that the action is viewed as a completed whole.</p>`,
    tables: [
      {
        title: "Regular Preterite: -AR, -ER, -IR",
        headers: ["Pronoun", "HABLAR", "COMER", "VIVIR"],
        rows: [
          ["yo", "hablé", "comí", "viví"],
          ["tú", "hablaste", "comiste", "viviste"],
          ["él/ella", "habló", "comió", "vivió"],
          ["nosotros", "hablamos", "comimos", "vivimos"],
          ["vosotros", "hablasteis", "comisteis", "vivisteis"],
          ["ellos/Uds.", "hablaron", "comieron", "vivieron"]
        ]
      },
      {
        title: "Irregular Preterites (High Frequency)",
        headers: ["Infinitive", "Yo", "Él/ella", "Ellos"],
        rows: [
          ["ser / ir", "fui", "fue", "fueron"],
          ["hacer", "hice", "hizo", "hicieron"],
          ["estar", "estuve", "estuvo", "estuvieron"],
          ["tener", "tuve", "tuvo", "tuvieron"],
          ["dar", "di", "dio", "dieron"]
        ]
      }
    ],
    examples: [
      { spanish: "Ayer hablé con mi madre.", english: "Yesterday I spoke with my mother." },
      { spanish: "El año pasado viajé a México.", english: "Last year I traveled to Mexico." },
      { spanish: "¿Comiste ya?", english: "Did you eat already?" },
      { spanish: "El partido fue muy emocionante.", english: "The match was very exciting." },
      { spanish: "De repente, alguien abrió la puerta.", english: "Suddenly, someone opened the door." }
    ]
  },

  {
    id: 14,
    title: "Grados de comparación de los adjetivos",
    explanation: `<p>Spanish adjectives have three degrees of comparison: <strong>positive</strong> (the simple adjective), <strong>comparative</strong> (more/less/as much as), and <strong>superlative</strong> (the most/least). The comparative uses fixed structures that are straightforward to learn.</p>
<p><strong>Comparative of superiority</strong>: <em>más + adjective + que</em> (more … than): <em>María es más alta que Ana</em>. <strong>Comparative of inferiority</strong>: <em>menos + adjective + que</em> (less … than): <em>Este examen es menos difícil que el otro</em>. <strong>Comparative of equality</strong>: <em>tan + adjective + como</em> (as … as): <em>Juan es tan inteligente como Pedro</em>. Note: after <em>que/como</em>, use subject pronouns (<em>yo, tú, él</em>), not object pronouns.</p>
<p>Four adjectives have <strong>irregular comparative forms</strong>: <em>bueno → mejor</em> (better), <em>malo → peor</em> (worse), <em>grande → mayor</em> (older/greater), <em>pequeño → menor</em> (younger/smaller). For the <strong>superlative</strong>: <em>el/la/los/las + más/menos + adjective + de</em>: <em>Es el edificio más alto de la ciudad</em> (It's the tallest building in the city). The irregular superlatives are: <em>el/la mejor, el/la peor, el/la mayor, el/la menor</em>.</p>`,
    tables: [
      {
        title: "Comparative Structures",
        headers: ["Type", "Structure", "Example"],
        rows: [
          ["Superiority", "más + adj + que", "Es más alto que su hermano"],
          ["Inferiority", "menos + adj + que", "Es menos caro que antes"],
          ["Equality", "tan + adj + como", "Es tan rápido como el tren"],
          ["Superlative", "el/la más + adj + de", "Es la ciudad más grande de España"]
        ]
      },
      {
        title: "Irregular Comparatives",
        headers: ["Adjective", "Comparative", "Superlative"],
        rows: [
          ["bueno (good)", "mejor (better)", "el/la mejor (the best)"],
          ["malo (bad)", "peor (worse)", "el/la peor (the worst)"],
          ["grande (big/old)", "mayor (bigger/older)", "el/la mayor (the biggest/oldest)"],
          ["pequeño (small/young)", "menor (smaller/younger)", "el/la menor (the smallest/youngest)"]
        ]
      }
    ],
    examples: [
      { spanish: "Este hotel es más caro que el otro.", english: "This hotel is more expensive than the other one." },
      { spanish: "Mi hermana es mayor que yo.", english: "My sister is older than me." },
      { spanish: "El nuevo sistema es mejor que el anterior.", english: "The new system is better than the previous one." },
      { spanish: "Ella es tan inteligente como su madre.", english: "She is as intelligent as her mother." },
      { spanish: "Es el peor día de mi vida.", english: "It's the worst day of my life." }
    ]
  },

  {
    id: 15,
    title: "Oración condicional del primer tipo",
    explanation: `<p>The <strong>first type conditional (oración condicional del primer tipo)</strong> expresses a real or likely condition and its probable result. The condition is considered possible or likely to occur. The structure is: <strong>Si + presente de indicativo → futuro de indicativo</strong> (or present/imperative for more immediate results).</p>
<p>Examples: <em>Si estudias, aprobarás</em> (If you study, you will pass). <em>Si hace buen tiempo, iremos a la playa</em> (If the weather is good, we will go to the beach). The <em>si</em> clause can come before or after the main clause. When the <em>si</em> clause comes second, no comma is needed: <em>Aprobarás si estudias</em>.</p>
<p>Important: <strong>never use the future tense</strong> directly after <em>si</em> in this construction. The present indicative is always used in the <em>si</em> clause. The result clause uses the future, present, or imperative. This first conditional contrasts with the second conditional (si + imperfect subjunctive + conditional) for hypothetical/unlikely situations and the third conditional (si + pluperfect subjunctive + conditional perfect) for impossible past conditions.</p>`,
    tables: [
      {
        title: "First Conditional Structure",
        headers: ["Condition (Si clause)", "Result (Main clause)"],
        rows: [
          ["Si + presente indicativo", "futuro indicativo"],
          ["Si estudias", "aprobarás"],
          ["Si hace frío", "llevaremos abrigo"],
          ["Si tienes tiempo", "¿puedes ayudarme?"],
          ["Si no llueve", "saldremos a pasear"],
          ["Si comes bien", "estarás sano"]
        ]
      }
    ],
    examples: [
      { spanish: "Si estudias, aprobarás el examen.", english: "If you study, you will pass the exam." },
      { spanish: "Si hace buen tiempo, iremos a la playa.", english: "If the weather is good, we will go to the beach." },
      { spanish: "Si te apetece, podemos cenar juntos.", english: "If you feel like it, we can have dinner together." },
      { spanish: "Si necesitas ayuda, llámame.", english: "If you need help, call me." },
      { spanish: "Ahorraremos dinero si cocinamos en casa.", english: "We will save money if we cook at home." }
    ]
  },

  {
    id: 16,
    title: "Pretérito perfecto simple de verbos irregulares",
    explanation: `<p>Many common Spanish verbs have <strong>irregular preterites</strong> that do not follow the standard patterns. These irregulars can be grouped by the type of stem change they undergo, making them easier to learn systematically.</p>
<p><strong>U-stem verbs</strong>: <em>estar → estuv-</em>, <em>tener → tuv-</em>, <em>poder → pud-</em>, <em>poner → pus-</em>, <em>saber → sup-</em>. <strong>I-stem verbs</strong>: <em>querer → quis-</em>, <em>hacer → hic-</em> (hiz- before -o), <em>venir → vin-</em>. <strong>J-stem verbs</strong>: <em>decir → dij-</em>, <em>traer → traj-</em>, <em>conducir → conduj-</em> (and most verbs ending in -ducir). J-stem verbs drop the -i in the third person plural: <em>dijeron</em> (not <em>dijieron</em>).</p>
<p>All these irregular preterites share a special set of endings (called "weak" endings): <strong>-e, -iste, -o, -imos, -isteis, -ieron</strong> (or -eron for j-stems). Note that the <em>yo</em> and <em>él/ella</em> forms lack accent marks — unlike regular preterites. The verb <em>ser/ir</em> is completely irregular and identical in the preterite: <em>fui, fuiste, fue, fuimos, fuisteis, fueron</em> (context determines meaning).</p>`,
    tables: [
      {
        title: "U-Stem Irregulars",
        headers: ["Infinitive", "Stem", "Yo", "Tú", "Él", "Ellos"],
        rows: [
          ["estar", "estuv-", "estuve", "estuviste", "estuvo", "estuvieron"],
          ["tener", "tuv-", "tuve", "tuviste", "tuvo", "tuvieron"],
          ["poder", "pud-", "pude", "pudiste", "pudo", "pudieron"],
          ["poner", "pus-", "puse", "pusiste", "puso", "pusieron"],
          ["saber", "sup-", "supe", "supiste", "supo", "supieron"]
        ]
      },
      {
        title: "I-Stem and J-Stem Irregulars",
        headers: ["Infinitive", "Stem", "Yo", "Tú", "Él", "Ellos"],
        rows: [
          ["querer", "quis-", "quise", "quisiste", "quiso", "quisieron"],
          ["hacer", "hic-/hiz-", "hice", "hiciste", "hizo", "hicieron"],
          ["venir", "vin-", "vine", "viniste", "vino", "vinieron"],
          ["decir", "dij-", "dije", "dijiste", "dijo", "dijeron"],
          ["traer", "traj-", "traje", "trajiste", "trajo", "trajeron"]
        ]
      }
    ],
    examples: [
      { spanish: "Estuve enfermo toda la semana.", english: "I was sick all week." },
      { spanish: "¿Qué hiciste el fin de semana?", english: "What did you do at the weekend?" },
      { spanish: "Me dijo que vendría pronto.", english: "He told me he would come soon." },
      { spanish: "No pude dormir por el ruido.", english: "I couldn't sleep because of the noise." },
      { spanish: "Vinieron a verme al hospital.", english: "They came to see me in the hospital." }
    ]
  },

  {
    id: 17,
    title: "Verbos impersonales",
    explanation: `<p><strong>Impersonal verbs (verbos impersonales)</strong> are verbs that have no specific personal subject — they refer to general situations, weather, or existence. The most common are weather verbs: <em>llover</em> (to rain), <em>nevar</em> (to snow), <em>tronar</em> (to thunder), <em>granizar</em> (to hail). These verbs are only used in the third person singular: <em>llueve</em>, <em>nieva</em>, <em>truena</em>.</p>
<p><strong>HAY</strong> (from <em>haber</em>) means "there is / there are" and is one of the most important impersonal expressions. <em>Hay un libro</em> (There is a book), <em>Hay tres sillas</em> (There are three chairs). In past: <em>había/hubo</em>; future: <em>habrá</em>; conditional: <em>habría</em>. Note: <em>hay</em> is always singular in form, even with plural nouns.</p>
<p><strong>Impersonal constructions with SE</strong> express general truths or customs without specifying who performs the action: <em>En España se cena tarde</em> (In Spain, people eat dinner late). <em>Se habla español aquí</em> (Spanish is spoken here). <strong>Impersonal expressions with SER</strong>: <em>Es importante estudiar</em>, <em>Es necesario dormir</em>, <em>Es imposible saberlo</em>. These are followed by an infinitive.</p>`,
    tables: [
      {
        title: "Weather Verbs (always 3rd person singular)",
        headers: ["Infinitive", "Present", "Preterite", "Future"],
        rows: [
          ["llover (to rain)", "llueve", "llovió", "lloverá"],
          ["nevar (to snow)", "nieva", "nevó", "nevará"],
          ["tronar (to thunder)", "truena", "tronó", "tronará"],
          ["granizar (to hail)", "graniza", "granizó", "granizará"],
          ["hacer frío (to be cold)", "hace frío", "hizo frío", "hará frío"],
          ["hacer calor (to be hot)", "hace calor", "hizo calor", "hará calor"]
        ]
      },
      {
        title: "HAY / Impersonal Expressions",
        headers: ["Structure", "Example", "Meaning"],
        rows: [
          ["hay + noun", "Hay mucha gente", "There are many people"],
          ["se + verb (3rd sg)", "Se habla español", "Spanish is spoken"],
          ["es + adj + inf", "Es difícil aprender chino", "It's difficult to learn Chinese"],
          ["hace + time", "Hace mucho calor", "It's very hot"],
          ["impersonal hay que", "Hay que estudiar", "One must study"]
        ]
      }
    ],
    examples: [
      { spanish: "Hoy llueve mucho en Madrid.", english: "Today it is raining a lot in Madrid." },
      { spanish: "Hay mucha gente en la plaza.", english: "There are many people in the square." },
      { spanish: "En España se come tarde.", english: "In Spain, people eat late." },
      { spanish: "Es necesario reservar con antelación.", english: "It is necessary to book in advance." },
      { spanish: "Hace mucho frío esta noche.", english: "It's very cold tonight." }
    ]
  },

  {
    id: 18,
    title: "Pronombres posesivos. Pronombres indefinidos",
    explanation: `<p><strong>Possessive pronouns (pronombres posesivos)</strong> replace a noun and indicate ownership. Unlike possessive adjectives (<em>mi, tu, su…</em>), possessive pronouns take a definite article and agree in gender and number with the <em>thing possessed</em> (not the possessor): <em>el mío</em> (mine, masc. sg.), <em>la mía</em> (mine, fem. sg.), <em>los míos</em> (mine, masc. pl.), <em>las mías</em> (mine, fem. pl.).</p>
<p><strong>Indefinite pronouns (pronombres indefinidos)</strong> refer to people or things in a non-specific way. <strong>Positive forms</strong>: <em>alguien</em> (someone), <em>algo</em> (something), <em>alguno/a/os/as</em> (some). <strong>Negative forms</strong>: <em>nadie</em> (no one), <em>nada</em> (nothing), <em>ninguno/a</em> (none). Spanish uses <strong>double negation</strong>: when the negative indefinite follows the verb, a negative word (<em>no</em>) must precede the verb: <em>No hay nadie aquí</em> (There is no one here = There isn't anyone here).</p>
<p>Negative indefinites can also precede the verb, in which case <em>no</em> is omitted: <em>Nadie está aquí</em> is equivalent to <em>No hay nadie aquí</em>. Additional useful indefinites: <em>todo/a/os/as</em> (all/every), <em>otro/a</em> (other/another), <em>mismo/a</em> (same/self), <em>cada</em> (each), <em>cualquier(a)</em> (any/whichever).</p>`,
    tables: [
      {
        title: "Possessive Pronouns",
        headers: ["Person", "Masc. Sg.", "Fem. Sg.", "Masc. Pl.", "Fem. Pl."],
        rows: [
          ["mine (yo)", "el mío", "la mía", "los míos", "las mías"],
          ["yours (tú)", "el tuyo", "la tuya", "los tuyos", "las tuyas"],
          ["his/hers/yours (Ud.)", "el suyo", "la suya", "los suyos", "las suyas"],
          ["ours", "el nuestro", "la nuestra", "los nuestros", "las nuestras"],
          ["yours (vosotros)", "el vuestro", "la vuestra", "los vuestros", "las vuestras"],
          ["theirs/yours (Uds.)", "el suyo", "la suya", "los suyos", "las suyas"]
        ]
      },
      {
        title: "Indefinite Pronouns",
        headers: ["Positive", "Negative"],
        rows: [
          ["alguien (someone)", "nadie (no one)"],
          ["algo (something)", "nada (nothing)"],
          ["alguno/a (some)", "ninguno/a (none)"],
          ["siempre (always)", "nunca / jamás (never)"],
          ["también (also)", "tampoco (neither)"],
          ["o…o (either…or)", "ni…ni (neither…nor)"]
        ]
      }
    ],
    examples: [
      { spanish: "Mi coche es rojo, el tuyo es azul.", english: "My car is red, yours is blue." },
      { spanish: "No hay nadie en casa.", english: "There is no one at home." },
      { spanish: "¿Hay algo de comer?", english: "Is there anything to eat?" },
      { spanish: "Nunca he estado en Japón.", english: "I have never been to Japan." },
      { spanish: "Este problema es nuestro, no el suyo.", english: "This problem is ours, not theirs." }
    ]
  },

  {
    id: 19,
    title: "Pretérito imperfecto de indicativo",
    explanation: `<p>The <strong>imperfect tense (pretérito imperfecto)</strong> describes past actions or states that were habitual, ongoing, or in progress — without specifying when they began or ended. It is used for: (1) <strong>habitual past actions</strong> (used to do): <em>De niño, jugaba al fútbol todos los días</em>; (2) <strong>ongoing background actions</strong>: <em>Llovía cuando salí</em> (It was raining when I left); (3) <strong>descriptions in the past</strong>: <em>Era alto y tenía los ojos azules</em>; (4) <strong>time in the past</strong>: <em>Eran las tres de la tarde</em>.</p>
<p>Regular conjugation: <em>-AR verbs</em> add <strong>-aba, -abas, -aba, -ábamos, -abais, -aban</strong> to the stem. <em>-ER and -IR verbs</em> add <strong>-ía, -ías, -ía, -íamos, -íais, -ían</strong> to the stem. The good news: there are only <strong>three irregular imperfect verbs</strong> in the entire Spanish language: <em>ser</em> (era), <em>ir</em> (iba), and <em>ver</em> (veía).</p>
<p>The <strong>imperfect vs. preterite</strong> contrast is one of the most important distinctions in Spanish. Use the preterite for completed actions seen as a whole; use the imperfect for ongoing/habitual past or for background description. They often appear together: <em>Leía un libro cuando sonó el teléfono</em> (I was reading [imperfect = ongoing] when the phone rang [preterite = interrupting event]).</p>`,
    tables: [
      {
        title: "Regular Imperfect",
        headers: ["Pronoun", "-AR: HABLAR", "-ER: COMER", "-IR: VIVIR"],
        rows: [
          ["yo", "hablaba", "comía", "vivía"],
          ["tú", "hablabas", "comías", "vivías"],
          ["él/ella", "hablaba", "comía", "vivía"],
          ["nosotros", "hablábamos", "comíamos", "vivíamos"],
          ["vosotros", "hablabais", "comíais", "vivíais"],
          ["ellos/Uds.", "hablaban", "comían", "vivían"]
        ]
      },
      {
        title: "The Only 3 Irregular Imperfects",
        headers: ["Pronoun", "SER", "IR", "VER"],
        rows: [
          ["yo", "era", "iba", "veía"],
          ["tú", "eras", "ibas", "veías"],
          ["él/ella", "era", "iba", "veía"],
          ["nosotros", "éramos", "íbamos", "veíamos"],
          ["vosotros", "erais", "ibais", "veíais"],
          ["ellos/Uds.", "eran", "iban", "veían"]
        ]
      }
    ],
    examples: [
      { spanish: "Cuando era niño, vivía en el campo.", english: "When I was a child, I lived in the countryside." },
      { spanish: "Llovía mucho cuando salimos.", english: "It was raining a lot when we left." },
      { spanish: "Todos los veranos íbamos a la playa.", english: "Every summer we used to go to the beach." },
      { spanish: "Leía un libro cuando sonó el teléfono.", english: "I was reading a book when the phone rang." },
      { spanish: "Ella tenía veinte años y era muy guapa.", english: "She was twenty years old and very pretty." }
    ]
  },

  {
    id: 20,
    title: "Pretérito Indefinido de indicativo",
    explanation: `<p>The <strong>pretérito indefinido</strong> (also called pretérito perfecto simple) is the primary past tense used to express <strong>completed actions</strong>. In contrast to the imperfect, it presents an action as a finished event. The choice between indefinido and imperfecto depends on how the speaker views the action: as a completed event (indefinido) or as an ongoing/habitual state (imperfecto).</p>
<p>One key area of contrast involves <strong>SER and ESTAR</strong> in the past. <em>Ser</em> in the imperfect (<em>era</em>) describes permanent characteristics in the past. <em>Ser</em> in the indefinido (<em>fue</em>) describes completed events or roles: <em>La fiesta fue increíble</em>. <em>Estar</em> in the imperfect (<em>estaba</em>) describes ongoing states; in the indefinido (<em>estuvo</em>) it describes a temporary state during a completed period: <em>Estuvo enfermo tres días</em> (He was sick for three days — now recovered).</p>
<p>Common time markers with the indefinido: <em>ayer</em>, <em>anteayer</em>, <em>el lunes pasado</em>, <em>hace un año</em>, <em>en 2015</em>, <em>de repente</em>, <em>de pronto</em>, <em>enseguida</em>, <em>al final</em>. These signal a specific, completed moment in the past and guide the speaker to choose the indefinido over the imperfect.</p>`,
    tables: [
      {
        title: "SER / ESTAR in Preterite vs Imperfect",
        headers: ["Tense", "SER use", "ESTAR use"],
        rows: [
          ["Imperfect", "Era médico (He was a doctor — ongoing)", "Estaba cansado (He was tired — ongoing state)"],
          ["Indefinido", "Fue un buen día (It was a good day — event)", "Estuvo enfermo (He was sick — completed period)"]
        ]
      },
      {
        title: "Preterite vs Imperfect Contrast",
        headers: ["Preterite (Indefinido)", "Imperfect (Imperfecto)"],
        rows: [
          ["Completed action: Ayer comí paella", "Habitual: Siempre comía paella los domingos"],
          ["Specific moment: A las 3, llegó", "Ongoing: Estaba en casa todo el día"],
          ["Sequence: Entró, se sentó y habló", "Background: Hacía frío y nevaba"],
          ["Number of times: Fui tres veces", "How things were: Era un hombre amable"]
        ]
      }
    ],
    examples: [
      { spanish: "Ayer fui al mercado y compré fruta.", english: "Yesterday I went to the market and bought fruit." },
      { spanish: "La película fue muy aburrida.", english: "The film was very boring." },
      { spanish: "Antes vivía en Barcelona, ahora vivo en Madrid.", english: "Before I used to live in Barcelona, now I live in Madrid." },
      { spanish: "Cuando era joven, tocaba la guitarra.", english: "When I was young, I used to play guitar." },
      { spanish: "Ayer llovió mucho, pero hoy hace sol.", english: "Yesterday it rained a lot, but today it's sunny." }
    ]
  },

  {
    id: 21,
    title: "Pretérito Pluscuamperfecto de indicativo",
    explanation: `<p>The <strong>pluperfect (pretérito pluscuamperfecto)</strong> expresses an action that was completed <em>before</em> another past action or moment. It is equivalent to "had + past participle" in English. Formed with the <strong>imperfect of HABER + past participle</strong>: <em>había, habías, había, habíamos, habíais, habían + participio</em>.</p>
<p>To form the <strong>past participle (participio pasado)</strong>: -AR verbs add <em>-ado</em> (<em>hablar → hablado</em>); -ER and -IR verbs add <em>-ido</em> (<em>comer → comido, vivir → vivido</em>). Common <strong>irregular past participles</strong>: <em>abrir → abierto</em>, <em>decir → dicho</em>, <em>escribir → escrito</em>, <em>hacer → hecho</em>, <em>morir → muerto</em>, <em>poner → puesto</em>, <em>romper → roto</em>, <em>ver → visto</em>, <em>volver → vuelto</em>.</p>
<p>The pluperfect establishes a "past before the past." Example: <em>Cuando llegué, él ya había salido</em> — both actions are in the past, but <em>había salido</em> (had left) happened before <em>llegué</em> (arrived). Common conjunctions used with the pluperfect: <em>cuando</em>, <em>ya</em>, <em>todavía no</em>, <em>después de que</em>, <em>en cuanto</em>.</p>`,
    tables: [
      {
        title: "Pluperfect Formation (HABER imperfect + Participio)",
        headers: ["Pronoun", "HABER (imperf.)", "Example"],
        rows: [
          ["yo", "había", "había comido"],
          ["tú", "habías", "habías llegado"],
          ["él/ella", "había", "había salido"],
          ["nosotros", "habíamos", "habíamos terminado"],
          ["vosotros", "habíais", "habíais visto"],
          ["ellos/Uds.", "habían", "habían hecho"]
        ]
      },
      {
        title: "Irregular Past Participles",
        headers: ["Infinitive", "Participio"],
        rows: [
          ["abrir", "abierto"],
          ["decir", "dicho"],
          ["escribir", "escrito"],
          ["hacer", "hecho"],
          ["morir", "muerto"],
          ["poner", "puesto"],
          ["romper", "roto"],
          ["ver", "visto"],
          ["volver", "vuelto"],
          ["resolver", "resuelto"]
        ]
      }
    ],
    examples: [
      { spanish: "Cuando llegué, él ya había salido.", english: "When I arrived, he had already left." },
      { spanish: "Nunca había visto nada igual.", english: "I had never seen anything like it." },
      { spanish: "Ya había comido cuando me llamaste.", english: "I had already eaten when you called me." },
      { spanish: "Todavía no habían abierto la tienda.", english: "The store hadn't opened yet." },
      { spanish: "Era la primera vez que había viajado solo.", english: "It was the first time I had traveled alone." }
    ]
  },

  {
    id: 22,
    title: "Condicional simple",
    explanation: `<p>The <strong>simple conditional (condicional simple)</strong> expresses what would happen under certain conditions. It corresponds to English "would + verb." The conditional is formed by adding the endings <strong>-ía, -ías, -ía, -íamos, -íais, -ían</strong> directly to the <strong>infinitive</strong> (for regular verbs) — exactly like the future but with different endings.</p>
<p>The <strong>irregular conditional stems</strong> are identical to the irregular future stems: <em>decir → dir-</em>, <em>hacer → har-</em>, <em>poder → podr-</em>, <em>poner → pondr-</em>, <em>querer → querr-</em>, <em>saber → sabr-</em>, <em>salir → saldr-</em>, <em>tener → tendr-</em>, <em>venir → vendr-</em>. If you've learned the future irregulars, you already know the conditional irregulars.</p>
<p>The conditional has several uses: (1) <strong>hypothetical/conditional situations</strong> (second conditional): <em>Si tuviera dinero, viajaría</em> (If I had money, I would travel); (2) <strong>polite requests</strong>: <em>¿Podría ayudarme?</em> (Could you help me?); (3) <strong>reported future</strong> in past narrative: <em>Dijo que vendría</em> (He said he would come); (4) <strong>probability in the past</strong>: <em>Serían las tres</em> (It must have been around three).</p>`,
    tables: [
      {
        title: "Regular Conditional",
        headers: ["Pronoun", "HABLAR", "COMER", "VIVIR"],
        rows: [
          ["yo", "hablaría", "comería", "viviría"],
          ["tú", "hablarías", "comerías", "vivirías"],
          ["él/ella", "hablaría", "comería", "viviría"],
          ["nosotros", "hablaríamos", "comeríamos", "viviríamos"],
          ["vosotros", "hablaríais", "comeríais", "viviríais"],
          ["ellos/Uds.", "hablarían", "comerían", "vivirían"]
        ]
      },
      {
        title: "Irregular Conditional (same stems as future)",
        headers: ["Infinitive", "Stem", "Yo form"],
        rows: [
          ["decir", "dir-", "diría"],
          ["hacer", "har-", "haría"],
          ["poder", "podr-", "podría"],
          ["poner", "pondr-", "pondría"],
          ["tener", "tendr-", "tendría"],
          ["venir", "vendr-", "vendría"],
          ["saber", "sabr-", "sabría"],
          ["salir", "saldr-", "saldría"]
        ]
      }
    ],
    examples: [
      { spanish: "¿Podrías ayudarme con esto?", english: "Could you help me with this?" },
      { spanish: "Si tuviera tiempo, estudiaría más.", english: "If I had time, I would study more." },
      { spanish: "Dijo que vendría a las ocho.", english: "He said he would come at eight." },
      { spanish: "Me gustaría visitar Japón algún día.", english: "I would like to visit Japan someday." },
      { spanish: "¿Qué harías tú en mi lugar?", english: "What would you do in my place?" }
    ]
  },

  {
    id: 23,
    title: "Condicional compuesto",
    explanation: `<p>The <strong>conditional perfect (condicional compuesto)</strong> expresses what would have happened — an action that would have occurred under conditions that were not met. It is formed with the <strong>conditional of HABER + past participle</strong>: <em>habría, habrías, habría, habríamos, habríais, habrían + participio</em>. It corresponds to English "would have + past participle."</p>
<p>The conditional perfect is primarily used in the <strong>third conditional</strong> (past hypothetical), alongside the pluperfect subjunctive in the <em>si</em> clause: <em>Si hubiera estudiado, habría aprobado</em> (If I had studied, I would have passed). Both the condition and the result refer to something that did not happen in the past.</p>
<p>The conditional perfect also expresses <strong>reproach or regret</strong> about past actions: <em>Habrías llegado antes si hubieras salido a tiempo</em> (You would have arrived earlier if you had left on time). Additionally, like the simple conditional, it can express past probability: <em>Habrían llegado ya</em> (They must have already arrived by then).</p>`,
    tables: [
      {
        title: "Conditional Perfect Formation",
        headers: ["Pronoun", "HABER (conditional)", "Example"],
        rows: [
          ["yo", "habría", "habría comido"],
          ["tú", "habrías", "habrías llegado"],
          ["él/ella", "habría", "habría hecho"],
          ["nosotros", "habríamos", "habríamos salido"],
          ["vosotros", "habríais", "habríais visto"],
          ["ellos/Uds.", "habrían", "habrían venido"]
        ]
      },
      {
        title: "3rd Conditional: Si + Pluperfect Subj. + Conditional Perfect",
        headers: ["Si clause (condition not met)", "Main clause (result not achieved)"],
        rows: [
          ["Si hubiera estudiado", "habría aprobado"],
          ["Si hubieras llegado antes", "habrías visto el partido"],
          ["Si hubiera llovido", "no habríamos salido"],
          ["Si hubieran sabido", "habrían venido"]
        ]
      }
    ],
    examples: [
      { spanish: "Si hubiera estudiado, habría aprobado.", english: "If I had studied, I would have passed." },
      { spanish: "¿Qué habrías hecho tú?", english: "What would you have done?" },
      { spanish: "Habría venido, pero tuve que trabajar.", english: "I would have come, but I had to work." },
      { spanish: "Si no hubiera llovido, habríamos ido a la playa.", english: "If it hadn't rained, we would have gone to the beach." },
      { spanish: "Nunca habría imaginado algo así.", english: "I would never have imagined something like that." }
    ]
  },

  {
    id: 24,
    title: "Voz pasiva",
    explanation: `<p>In the <strong>passive voice (voz pasiva)</strong>, the grammatical subject receives the action rather than performing it. The Spanish passive is formed with <strong>SER + past participle (+ por + agent)</strong>. The past participle must agree in gender and number with the subject: <em>La carta fue escrita por Ana</em> (The letter was written by Ana). The tense of <em>ser</em> determines the time reference.</p>
<p>The <strong>pasiva refleja</strong> uses <em>SE + verb</em> and is much more common in everyday Spanish than the full passive. It avoids mentioning the agent: <em>Se venden pisos aquí</em> (Apartments are sold here / They sell apartments here). The verb agrees with the grammatical subject: <em>Se habla español</em> (Spanish is spoken) vs. <em>Se hablan varios idiomas</em> (Several languages are spoken).</p>
<p>The passive with <em>ser</em> is relatively formal and literary. In everyday speech, Spanish speakers prefer active constructions or the <em>se</em> passive. The passive with <em>estar + participle</em> (estado pasiva or pasiva resultante) describes a resulting state rather than an action: <em>La puerta está cerrada</em> (The door is closed — resulting state), vs. <em>La puerta fue cerrada por el portero</em> (The door was closed by the doorman — action).</p>`,
    tables: [
      {
        title: "Active vs. Passive Voice",
        headers: ["Active (Voz Activa)", "Passive (Voz Pasiva)"],
        rows: [
          ["El chef prepara la comida", "La comida es preparada por el chef"],
          ["Los estudiantes leen el libro", "El libro es leído por los estudiantes"],
          ["Ana escribió la carta", "La carta fue escrita por Ana"],
          ["Construirán el puente", "El puente será construido"]
        ]
      },
      {
        title: "Pasiva Refleja (SE + verb)",
        headers: ["Example", "Meaning"],
        rows: [
          ["Se vende piso", "Apartment for sale / An apartment is sold"],
          ["Se habla español", "Spanish is spoken"],
          ["Se alquilan habitaciones", "Rooms for rent"],
          ["Se necesitan cocineros", "Cooks needed"],
          ["Aquí se come bien", "You eat well here / The food is good here"]
        ]
      }
    ],
    examples: [
      { spanish: "El puente fue construido en 1920.", english: "The bridge was built in 1920." },
      { spanish: "Se venden zapatos en esa tienda.", english: "Shoes are sold in that shop." },
      { spanish: "La novela fue escrita por un famoso autor.", english: "The novel was written by a famous author." },
      { spanish: "Se hablan cuatro idiomas en Suiza.", english: "Four languages are spoken in Switzerland." },
      { spanish: "Los resultados serán publicados mañana.", english: "The results will be published tomorrow." }
    ]
  },

  {
    id: 25,
    title: "PONERSE A + INFINITIVO, VOLVER A + INFINITIVO",
    explanation: `<p><strong>PONERSE A + infinitivo</strong> expresses the sudden beginning of an action — "to start doing something (suddenly, often unexpectedly)." The verb <em>ponerse</em> is reflexive and is conjugated in all tenses: <em>Me puse a llorar</em> (I started crying suddenly), <em>Se pone a gritar cuando se enfada</em> (He starts shouting when he gets angry). It emphasizes the abrupt or spontaneous nature of the start.</p>
<p><strong>VOLVER A + infinitivo</strong> expresses the repetition of an action — "to do something again." It is equivalent to English "to do again" and is often more elegant than using <em>otra vez</em> or <em>de nuevo</em>: <em>Volvió a llamar</em> (He called again), <em>¿Puedes volver a explicarlo?</em> (Can you explain it again?). Like <em>ponerse</em>, <em>volver</em> can be conjugated in any tense.</p>
<p>These constructions belong to the broader category of <strong>perífrasis verbales</strong> (verbal periphrases). Other useful periphrases: <em>empezar/comenzar a + infinitivo</em> (to start doing), <em>dejar de + infinitivo</em> (to stop doing), <em>terminar de + infinitivo</em> (to finish doing), <em>tener que + infinitivo</em> (to have to do), <em>deber + infinitivo</em> (should do).</p>`,
    tables: [
      {
        title: "PONERSE A + Infinitivo (Sudden Start)",
        headers: ["Pronoun", "Form", "Example"],
        rows: [
          ["yo", "me pongo a", "Me pongo a estudiar"],
          ["tú", "te pones a", "Te pones a llorar"],
          ["él/ella", "se pone a", "Se pone a cantar"],
          ["nosotros", "nos ponemos a", "Nos ponemos a trabajar"],
          ["vosotros", "os ponéis a", "Os ponéis a hablar"],
          ["ellos/Uds.", "se ponen a", "Se ponen a bailar"]
        ]
      },
      {
        title: "VOLVER A + Infinitivo (Repetition)",
        headers: ["Pronoun", "Form", "Example"],
        rows: [
          ["yo", "vuelvo a", "Vuelvo a llamar"],
          ["tú", "vuelves a", "Vuelves a equivocarte"],
          ["él/ella", "vuelve a", "Vuelve a intentarlo"],
          ["nosotros", "volvemos a", "Volvemos a vernos"],
          ["vosotros", "volvéis a", "Volvéis a ganar"],
          ["ellos/Uds.", "vuelven a", "Vuelven a perderse"]
        ]
      }
    ],
    examples: [
      { spanish: "Se puso a llorar de repente.", english: "She suddenly started crying." },
      { spanish: "Volvió a llamar por la tarde.", english: "He called again in the afternoon." },
      { spanish: "Me puse a estudiar en cuanto llegué a casa.", english: "I started studying as soon as I got home." },
      { spanish: "¿Puedes volver a explicar eso?", english: "Can you explain that again?" },
      { spanish: "Se puso a llover cuando íbamos al mercado.", english: "It started raining when we were going to the market." }
    ]
  },

  {
    id: 26,
    title: "Grado comparativo de los adverbios",
    explanation: `<p>Just like adjectives, <strong>adverbs can be compared</strong> in Spanish. The structures are parallel to adjective comparison but simpler because adverbs never change for gender or number. <strong>Comparative of superiority</strong>: <em>más + adverb + que</em> — <em>Corre más rápido que yo</em> (He runs faster than me). <strong>Comparative of inferiority</strong>: <em>menos + adverb + que</em> — <em>Trabaja menos eficientemente que antes</em>. <strong>Comparative of equality</strong>: <em>tan + adverb + como</em> — <em>Habla tan claramente como su profesor</em>.</p>
<p>Several adverbs have <strong>irregular comparative forms</strong>: <em>bien → mejor</em> (better/best), <em>mal → peor</em> (worse/worst), <em>mucho → más</em> (more/most), <em>poco → menos</em> (less/least). These irregular forms are used without <em>más/menos</em>: <em>Habla mejor que antes</em> (He speaks better than before), <em>Trabaja más que tú</em> (She works more than you).</p>
<p>The <strong>superlative of adverbs</strong> uses <em>lo más/menos + adverb + posible</em> or simply <em>más/menos + adverb</em> in context: <em>Habla lo más despacio posible</em> (Speak as slowly as possible). The irregular superlatives (<em>mejor, peor, más, menos</em>) are also used for the superlative of adverbs: <em>Es quien trabaja mejor</em> (He's the one who works best).</p>`,
    tables: [
      {
        title: "Adverb Comparison Structures",
        headers: ["Type", "Structure", "Example"],
        rows: [
          ["Superiority", "más + adv + que", "Corre más rápido que yo"],
          ["Inferiority", "menos + adv + que", "Llega menos tarde que antes"],
          ["Equality", "tan + adv + como", "Habla tan bien como un nativo"],
          ["Superlative", "lo más + adv + posible", "Hazlo lo más rápido posible"]
        ]
      },
      {
        title: "Irregular Adverb Comparatives",
        headers: ["Adverb", "Comparative", "Meaning"],
        rows: [
          ["bien (well)", "mejor (better)", "Habla mejor ahora"],
          ["mal (badly)", "peor (worse)", "Conduce peor que antes"],
          ["mucho (a lot)", "más (more)", "Trabaja más que tú"],
          ["poco (little)", "menos (less)", "Estudia menos que su hermana"]
        ]
      }
    ],
    examples: [
      { spanish: "Ahora hablas español mejor que antes.", english: "You speak Spanish better than before." },
      { spanish: "Llegó más tarde que de costumbre.", english: "He arrived later than usual." },
      { spanish: "Ella canta tan bien como una profesional.", english: "She sings as well as a professional." },
      { spanish: "Por favor, habla lo más despacio posible.", english: "Please speak as slowly as possible." },
      { spanish: "Este año trabaja menos que el anterior.", english: "This year she works less than the previous one." }
    ]
  }
];
