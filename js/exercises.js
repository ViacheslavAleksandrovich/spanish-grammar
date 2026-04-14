// js/exercises.js — Exercises for all 26 topics

const exercises = {
  1: [
    { type: "multiple-choice", question: "What is the correct present tense form of HABLAR for 'yo'?", options: ["hablo", "hablas", "habla", "hablamos"], correct: 0 },
    { type: "fill-blank", question: "Yo ___ (hablar) español todos los días.", answer: "hablo" },
    { type: "multiple-choice", question: "Ella ___ una profesora de música. (SER)", options: ["soy", "eres", "es", "somos"], correct: 2 },
    { type: "fill-blank", question: "Nosotros ___ (comer) a las dos de la tarde.", answer: "comemos" },
    { type: "multiple-choice", question: "Which verb is irregular in the present tense?", options: ["hablar", "comer", "ir", "vivir"], correct: 2 },
    { type: "fill-blank", question: "Tú ___ (tener) mucho trabajo esta semana.", answer: "tienes" },
    { type: "multiple-choice", question: "What is the correct form of VIVIR for 'ellos'?", options: ["vivo", "vives", "vive", "viven"], correct: 3 },
    { type: "fill-blank", question: "Vosotros ___ (hablar) muy bien el español.", answer: "habláis" },
  ],

  2: [
    { type: "multiple-choice", question: "What is the 'yo' form of DAR in the present tense?", options: ["da", "das", "doy", "damos"], correct: 2 },
    { type: "fill-blank", question: "Yo ___ (saber) la respuesta correcta.", answer: "sé" },
    { type: "multiple-choice", question: "What is the 'yo' form of TRAER in the present tense?", options: ["traes", "traigo", "trae", "traemos"], correct: 1 },
    { type: "fill-blank", question: "¿___ (oír, tú) música desde tu cuarto?", answer: "oyes" },
    { type: "multiple-choice", question: "Which form of OÍR is correct for 'yo'?", options: ["oyo", "oígo", "oigo", "oies"], correct: 2 },
    { type: "fill-blank", question: "Ella ___ (traer) la comida para la fiesta.", answer: "trae" },
    { type: "multiple-choice", question: "¿Cuánto dinero ___ (dar) tú a los pobres?", options: ["das", "doy", "da", "damos"], correct: 0 },
  ],

  3: [
    { type: "multiple-choice", question: "Which structure expresses a near future action?", options: ["acabar de + inf.", "ir a + inf.", "seguir + gerundio", "llevar + gerundio"], correct: 1 },
    { type: "fill-blank", question: "Voy ___ estudiar esta tarde.", answer: "a" },
    { type: "multiple-choice", question: "ACABAR DE + infinitive is used to express:", options: ["a future plan", "a recent past action", "an ongoing action", "a habitual action"], correct: 1 },
    { type: "fill-blank", question: "Acabo ___ llegar a casa.", answer: "de" },
    { type: "multiple-choice", question: "¿___ a venir a la fiesta?", options: ["Voy", "Vas", "Va", "Vamos"], correct: 1 },
    { type: "fill-blank", question: "Ella ___ de llamar por teléfono. (acabar)", answer: "acaba" },
    { type: "multiple-choice", question: "Complete: 'Nosotros ___ a visitar a los abuelos este fin de semana.'", options: ["voy", "vas", "va", "vamos"], correct: 3 },
  ],

  4: [
    { type: "multiple-choice", question: "Which pronoun is the reflexive pronoun for 'él/ella'?", options: ["me", "te", "se", "nos"], correct: 2 },
    { type: "fill-blank", question: "Yo ___ lavo los dientes cada mañana. (reflexive pronoun)", answer: "me" },
    { type: "multiple-choice", question: "What is the correct form of LLAMARSE for 'yo'?", options: ["me llamo", "te llamas", "se llama", "nos llamamos"], correct: 0 },
    { type: "fill-blank", question: "Ella ___ levanta a las siete. (reflexive pronoun)", answer: "se" },
    { type: "multiple-choice", question: "Direct object pronoun for 'them' (masculine) is:", options: ["le", "lo", "los", "las"], correct: 2 },
    { type: "fill-blank", question: "¿___ (tú) lavas el coche hoy? (reflexive pronoun)", answer: "te" },
    { type: "multiple-choice", question: "Where are object pronouns placed with a conjugated verb?", options: ["After the verb", "Before the verb", "At the end of the sentence", "After the subject"], correct: 1 },
  ],

  5: [
    { type: "multiple-choice", question: "In indirect speech, the present tense changes to:", options: ["future", "imperfect", "preterite", "conditional"], correct: 1 },
    { type: "fill-blank", question: "Dice que ___ hambre. (tener — indirect speech, present)", answer: "tiene" },
    { type: "multiple-choice", question: "Which sentence is in indirect speech?", options: ['"Tengo frío"', "Dijo que tenía frío", "¡Hace frío!", "Hace mucho frío hoy"], correct: 1 },
    { type: "fill-blank", question: "Dijo que ___ mañana. (venir — indirect speech, past → conditional)", answer: "vendría" },
    { type: "multiple-choice", question: "'Hoy' in direct speech becomes ___ in indirect speech.", options: ["mañana", "ayer", "ese día", "aquí"], correct: 2 },
    { type: "fill-blank", question: "Me contó que ___ estado en Madrid. (haber — pluperfect)", answer: "había" },
    { type: "multiple-choice", question: "In indirect speech after a past reporting verb, future changes to:", options: ["present", "imperfect", "conditional", "preterite"], correct: 2 },
  ],

  6: [
    { type: "multiple-choice", question: "What are the endings added to the infinitive for regular future tense?", options: ["-aba, -abas, -aba", "-é, -ás, -á, -emos, -éis, -án", "-ía, -ías, -ía", "-o, -as, -a"], correct: 1 },
    { type: "fill-blank", question: "Mañana ___ (ir, yo) al médico.", answer: "iré" },
    { type: "multiple-choice", question: "What is the future stem of HACER?", options: ["hacer-", "hac-", "har-", "hare-"], correct: 2 },
    { type: "fill-blank", question: "¿___ (venir, tú) a la fiesta el sábado?", answer: "vendrás" },
    { type: "multiple-choice", question: "What is the future of TENER for 'nosotros'?", options: ["teneremos", "tendremos", "tendemos", "tenemos"], correct: 1 },
    { type: "fill-blank", question: "Ellos ___ (tener) que estudiar más.", answer: "tendrán" },
    { type: "multiple-choice", question: "The future tense can also express:", options: ["completed past actions", "habitual actions", "probability about the present", "ongoing past actions"], correct: 2 },
  ],

  7: [
    { type: "multiple-choice", question: "What is the gerund of HABLAR?", options: ["hablado", "hablar", "hablando", "hable"], correct: 2 },
    { type: "fill-blank", question: "The gerund of COMER is ___.", answer: "comiendo" },
    { type: "multiple-choice", question: "What is the irregular gerund of IR?", options: ["iendo", "iyendo", "yendo", "iriendo"], correct: 2 },
    { type: "fill-blank", question: "The gerund of LEER is ___ (vowel + yendo).", answer: "leyendo" },
    { type: "multiple-choice", question: "What is the gerund of DORMIR (stem change o→u)?", options: ["dormiendo", "durmiendo", "dormando", "durmiando"], correct: 1 },
    { type: "fill-blank", question: "The gerund of DECIR is ___ (stem change e→i).", answer: "diciendo" },
    { type: "multiple-choice", question: "How is the gerund of -AR verbs formed?", options: ["stem + -iendo", "stem + -ando", "stem + -ado", "stem + -endo"], correct: 1 },
  ],

  8: [
    { type: "multiple-choice", question: "ESTAR + gerundio expresses:", options: ["a completed action", "an action in progress right now", "a habitual action", "a future action"], correct: 1 },
    { type: "fill-blank", question: "Estoy ___ ahora mismo. (comer — gerundio)", answer: "comiendo" },
    { type: "multiple-choice", question: "LLEVAR + time + gerundio expresses:", options: ["repetition of an action", "the duration of an ongoing action", "the start of an action", "a past completed action"], correct: 1 },
    { type: "fill-blank", question: "Llevo tres horas ___. (estudiar — gerundio)", answer: "estudiando" },
    { type: "multiple-choice", question: "SEGUIR + gerundio means:", options: ["to start doing", "to finish doing", "to continue/keep doing", "to stop doing"], correct: 2 },
    { type: "fill-blank", question: "Sigue ___ mucho. (llover — gerundio)", answer: "lloviendo" },
    { type: "multiple-choice", question: "Complete: 'Llevan dos años ___ en Madrid.' (vivir)", options: ["vivir", "vivido", "viviendo", "viven"], correct: 2 },
  ],

  9: [
    { type: "multiple-choice", question: "Which demonstrative refers to something close to the SPEAKER?", options: ["ese/esa", "aquel/aquella", "este/esta", "tanto/tanta"], correct: 2 },
    { type: "fill-blank", question: "___ libro es muy interesante. (this — masc. sg.)", answer: "este" },
    { type: "multiple-choice", question: "What is the neuter form of ESE?", options: ["esa", "eso", "estos", "aquel"], correct: 1 },
    { type: "fill-blank", question: "___ montaña de allí es la más alta. (that over there — fem. sg.)", answer: "aquella" },
    { type: "multiple-choice", question: "AQUEL/AQUELLA refers to something:", options: ["near the speaker", "near the listener", "far from both speaker and listener", "unknown"], correct: 2 },
    { type: "fill-blank", question: "¿Qué es ___? (that — neuter)", answer: "eso" },
    { type: "multiple-choice", question: "What is the plural of ESTA (fem.)?", options: ["esas", "estas", "aquellas", "estes"], correct: 1 },
  ],

  10: [
    { type: "multiple-choice", question: "AQUÍ refers to:", options: ["where the listener is", "a place far from both", "where the speaker is", "an unknown place"], correct: 2 },
    { type: "fill-blank", question: "Ven ___, por favor. (here)", answer: "aquí" },
    { type: "multiple-choice", question: "How is the -mente adverb formed from RÁPIDO?", options: ["rápidamente (fem. adj + mente)", "rápidmente", "rápidomente", "rapidamente"], correct: 0 },
    { type: "fill-blank", question: "The -mente adverb from FÁCIL is ___.", answer: "fácilmente" },
    { type: "multiple-choice", question: "In the series 'habló clara y lentamente', why is only the last adverb -mente?", options: ["It's a grammar error", "Spanish rule: only last adverb in series keeps -mente", "Clara is not an adverb", "Lentamente is more important"], correct: 1 },
    { type: "fill-blank", question: "El libro está ___, sobre la mesa. (over there)", answer: "allí" },
    { type: "multiple-choice", question: "AHÍ refers to:", options: ["where the speaker is", "a place near the listener", "a far-away place", "an indoor place"], correct: 1 },
  ],

  11: [
    { type: "multiple-choice", question: "Y changes to E before a word starting with:", options: ["a", "e", "i or hi", "o"], correct: 2 },
    { type: "fill-blank", question: "No quiero café ___ té. (but — after negative, introducing alternative)", answer: "sino" },
    { type: "multiple-choice", question: "SINO is used:", options: ["after an affirmative clause", "to mean 'because'", "after a negative clause to introduce an alternative", "instead of pero always"], correct: 2 },
    { type: "fill-blank", question: "Fui al cine ___ no tenía nada que hacer. (because)", answer: "porque" },
    { type: "multiple-choice", question: "AUNQUE means:", options: ["because", "when", "although / even if", "so that"], correct: 2 },
    { type: "fill-blank", question: "___ habla ___ escucha. (neither…nor)", answer: "ni" },
    { type: "multiple-choice", question: "Which conjunction introduces a condition?", options: ["porque", "aunque", "cuando", "si"], correct: 3 },
  ],

  12: [
    { type: "multiple-choice", question: "What is the Spanish for 16?", options: ["dieciséis", "dieciseis", "diez y seis", "diesiseis"], correct: 0 },
    { type: "fill-blank", question: "Tengo ___ años. (23 in Spanish)", answer: "veintitrés" },
    { type: "multiple-choice", question: "What is the ordinal for '1st' (before a masculine noun)?", options: ["primero", "primer", "uno", "primera"], correct: 1 },
    { type: "fill-blank", question: "Vivo en el ___ piso. (3rd — before masc. noun)", answer: "tercer" },
    { type: "multiple-choice", question: "How do hundreds agree with nouns?", options: ["They never change", "They agree in gender only", "They agree in gender and number", "Only above 500 agree"], correct: 1 },
    { type: "fill-blank", question: "Hay ___ personas en la sala. (100 — before noun)", answer: "cien" },
    { type: "multiple-choice", question: "CIENTO is used when:", options: ["the number is exactly 100", "100 precedes a noun", "100 follows a noun or in compound numbers", "always"], correct: 2 },
  ],

  13: [
    { type: "multiple-choice", question: "What are the preterite endings for -AR verbs?", options: ["-aba, -abas, -aba", "-ía, -ías, -ía", "-é, -aste, -ó, -amos, -asteis, -aron", "-o, -as, -a"], correct: 2 },
    { type: "fill-blank", question: "Ayer ___ (hablar, yo) con mi madre.", answer: "hablé" },
    { type: "multiple-choice", question: "What is the preterite of IR/SER for 'yo'?", options: ["era", "iba", "fui", "fue"], correct: 2 },
    { type: "fill-blank", question: "El año pasado ___ (viajar, yo) a México.", answer: "viajé" },
    { type: "multiple-choice", question: "What is the preterite of HACER for 'él'?", options: ["hice", "hizó", "hizo", "hacío"], correct: 2 },
    { type: "fill-blank", question: "¿___ (comer, tú) ya?", answer: "comiste" },
    { type: "multiple-choice", question: "Which time expression signals the preterite?", options: ["siempre", "normalmente", "ayer", "antes"], correct: 2 },
  ],

  14: [
    { type: "multiple-choice", question: "How do you say 'more expensive than'?", options: ["tan caro como", "menos caro que", "más caro que", "mejor que"], correct: 2 },
    { type: "fill-blank", question: "Mi hermana es ___ que yo. (older — irregular comparative)", answer: "mayor" },
    { type: "multiple-choice", question: "What is the comparative of BUENO?", options: ["más bueno", "más bien", "mejor", "buenísimo"], correct: 2 },
    { type: "fill-blank", question: "Este hotel es ___ caro ___ el otro. (more … than)", answer: "más" },
    { type: "multiple-choice", question: "'As intelligent as' is expressed with:", options: ["más inteligente que", "tan inteligente como", "menos inteligente que", "el más inteligente"], correct: 1 },
    { type: "fill-blank", question: "Es el ___ día de mi vida. (worst — irregular superlative)", answer: "peor" },
    { type: "multiple-choice", question: "What is the superlative structure in Spanish?", options: ["muy + adj", "el/la + más + adj + de", "tan + adj + como", "más + adj + que"], correct: 1 },
  ],

  15: [
    { type: "multiple-choice", question: "What is the structure of the first conditional?", options: ["si + imperfect subj. + conditional", "si + present indicative + future", "si + future + future", "si + preterite + conditional"], correct: 1 },
    { type: "fill-blank", question: "Si estudias, ___ (aprobar, tú) el examen.", answer: "aprobarás" },
    { type: "multiple-choice", question: "Which tense CANNOT follow 'si' in the first conditional?", options: ["present indicative", "future indicative", "present perfect", "imperfect"], correct: 1 },
    { type: "fill-blank", question: "Si hace buen tiempo, ___ (ir, nosotros) a la playa.", answer: "iremos" },
    { type: "multiple-choice", question: "The first conditional expresses conditions that are:", options: ["impossible", "real or possible", "contrary to fact in the past", "unlikely"], correct: 1 },
    { type: "fill-blank", question: "Si ___ (necesitar, tú) ayuda, llámame.", answer: "necesitas" },
    { type: "multiple-choice", question: "Complete: 'Si comes bien, ___ (estar) sano.'", options: ["estás", "estarías", "estarás", "estabas"], correct: 2 },
  ],

  16: [
    { type: "multiple-choice", question: "What is the preterite of ESTAR for 'yo'?", options: ["era", "estaba", "estuve", "esté"], correct: 2 },
    { type: "fill-blank", question: "¿Qué ___ (hacer, tú) el fin de semana?", answer: "hiciste" },
    { type: "multiple-choice", question: "What is the preterite stem of DECIR?", options: ["dec-", "dic-", "dij-", "dej-"], correct: 2 },
    { type: "fill-blank", question: "No ___ (poder, yo) dormir por el ruido.", answer: "pude" },
    { type: "multiple-choice", question: "J-stem verbs in the preterite (like DECIR/TRAER) drop the -i in:", options: ["yo form", "nosotros form", "third person plural (ellos)", "tú form"], correct: 2 },
    { type: "fill-blank", question: "Ellos ___ (venir) a verme al hospital.", answer: "vinieron" },
    { type: "multiple-choice", question: "What is the preterite of HACER for 'él'?", options: ["hació", "hice", "hizo", "hacía"], correct: 2 },
  ],

  17: [
    { type: "multiple-choice", question: "Weather verbs like LLOVER are used in:", options: ["all persons", "only 1st person", "only 3rd person singular", "only plural forms"], correct: 2 },
    { type: "fill-blank", question: "Hoy ___ mucho en Madrid. (llover — present)", answer: "llueve" },
    { type: "multiple-choice", question: "HAY is used to express:", options: ["ownership", "there is / there are", "weather", "time"], correct: 1 },
    { type: "fill-blank", question: "___ mucha gente en la plaza. (there are)", answer: "hay" },
    { type: "multiple-choice", question: "SE + verb constructions express:", options: ["reflexive actions", "passive/impersonal meanings", "future actions", "conditional meanings"], correct: 1 },
    { type: "fill-blank", question: "En España ___ habla español. (impersonal se)", answer: "se" },
    { type: "multiple-choice", question: "Complete: 'Es ___ reservar con antelación.' (impersonal with ser)", options: ["importante", "necesario a", "imposible de", "necesario"], correct: 3 },
  ],

  18: [
    { type: "multiple-choice", question: "What is the possessive pronoun for 'mine' (masc. sg.)?", options: ["el mío", "el tuyo", "el suyo", "el nuestro"], correct: 0 },
    { type: "fill-blank", question: "Mi coche es rojo, el ___ es azul. (yours — tuyo)", answer: "tuyo" },
    { type: "multiple-choice", question: "Which is an indefinite pronoun meaning 'no one'?", options: ["alguien", "algo", "nadie", "ningún"], correct: 2 },
    { type: "fill-blank", question: "No hay ___ en casa. (no one)", answer: "nadie" },
    { type: "multiple-choice", question: "Spanish uses double negation, meaning:", options: ["You can only use one negative word per sentence", "No + negative indefinite is correct: 'No hay nadie'", "Nadie can't follow a verb", "Nada always goes before the verb"], correct: 1 },
    { type: "fill-blank", question: "___ he estado en Japón. (never — before verb, no 'no' needed)", answer: "nunca" },
    { type: "multiple-choice", question: "¿Hay ___ de comer? (something)", options: ["nadie", "nada", "algo", "ninguno"], correct: 2 },
  ],

  19: [
    { type: "multiple-choice", question: "What is the imperfect of HABLAR for 'yo'?", options: ["hablé", "hablo", "hablaba", "hablaré"], correct: 2 },
    { type: "fill-blank", question: "Cuando era niño, ___ (vivir, yo) en el campo.", answer: "vivía" },
    { type: "multiple-choice", question: "How many irregular verbs exist in the imperfect?", options: ["10", "5", "3", "0"], correct: 2 },
    { type: "fill-blank", question: "The imperfect of SER for 'yo' is ___.", answer: "era" },
    { type: "multiple-choice", question: "The imperfect is used for:", options: ["completed actions at a specific moment", "habitual/ongoing past actions", "actions that interrupt another", "sequence of completed events"], correct: 1 },
    { type: "fill-blank", question: "Todos los veranos ___ (ir, nosotros) a la playa.", answer: "íbamos" },
    { type: "multiple-choice", question: "In 'Leía cuando sonó el teléfono', LEÍA is imperfect because:", options: ["it happened before the phone rang", "it was the ongoing background action", "it's more important", "it's a habitual action"], correct: 1 },
  ],

  20: [
    { type: "multiple-choice", question: "Which time expression signals the preterite indefinido?", options: ["siempre", "normalmente", "antes", "ayer"], correct: 3 },
    { type: "fill-blank", question: "Ayer ___ (ir, yo) al mercado y compré fruta.", answer: "fui" },
    { type: "multiple-choice", question: "SER in the imperfect (era) describes:", options: ["completed events", "permanent characteristics in the past", "a sick period", "actions at a specific time"], correct: 1 },
    { type: "fill-blank", question: "La película ___ (ser) muy aburrida. (completed event — preterite)", answer: "fue" },
    { type: "multiple-choice", question: "ESTAR in the preterite (estuvo) describes:", options: ["a permanent state", "an ongoing state", "a temporary state during a completed period", "weather"], correct: 2 },
    { type: "fill-blank", question: "Cuando era joven, ___ (tocar, yo) la guitarra.", answer: "tocaba" },
    { type: "multiple-choice", question: "Preterite is used for:", options: ["background descriptions", "actions seen as completed wholes", "habitual past actions", "states that were true for a long time"], correct: 1 },
  ],

  21: [
    { type: "multiple-choice", question: "The pluperfect is formed with:", options: ["present of haber + participle", "preterite of haber + participle", "imperfect of haber + participle", "conditional of haber + participle"], correct: 2 },
    { type: "fill-blank", question: "Cuando llegué, él ya ___ (salir — pluperfect).", answer: "había salido" },
    { type: "multiple-choice", question: "What is the irregular past participle of HACER?", options: ["hacido", "hachado", "hecho", "hacado"], correct: 2 },
    { type: "fill-blank", question: "Nunca ___ (ver, yo — pluperfect) nada igual.", answer: "había visto" },
    { type: "multiple-choice", question: "What is the irregular past participle of VOLVER?", options: ["volvido", "vueltado", "vuelto", "volvado"], correct: 2 },
    { type: "fill-blank", question: "Ya ___ (comer, yo — pluperfect) cuando me llamaste.", answer: "había comido" },
    { type: "multiple-choice", question: "What is the irregular past participle of ESCRIBIR?", options: ["escribido", "escrito", "escribto", "escrib"], correct: 1 },
  ],

  22: [
    { type: "multiple-choice", question: "The simple conditional endings are added to:", options: ["the stem", "the infinitive (like future)", "the present participle", "the past participle"], correct: 1 },
    { type: "fill-blank", question: "¿___ (poder, tú) ayudarme con esto? (conditional, polite)", answer: "podrías" },
    { type: "multiple-choice", question: "What is the conditional of HACER for 'yo'?", options: ["hacería", "haría", "haré", "hiciera"], correct: 1 },
    { type: "fill-blank", question: "Me ___ (gustar) visitar Japón algún día.", answer: "gustaría" },
    { type: "multiple-choice", question: "The conditional can express:", options: ["completed past actions", "polite requests and hypothetical situations", "habitual present actions", "commands"], correct: 1 },
    { type: "fill-blank", question: "Dijo que ___ (venir, él) a las ocho.", answer: "vendría" },
    { type: "multiple-choice", question: "What is the conditional ending for 'nosotros'?", options: ["-amos", "-íamos", "-emos", "-abamos"], correct: 1 },
  ],

  23: [
    { type: "multiple-choice", question: "The conditional perfect is formed with:", options: ["imperfect of haber + participle", "conditional of haber + participle", "future of haber + participle", "preterite of haber + participle"], correct: 1 },
    { type: "fill-blank", question: "Si hubiera estudiado, ___ (aprobar — conditional perfect, yo).", answer: "habría aprobado" },
    { type: "multiple-choice", question: "The third conditional uses:", options: ["si + present + future", "si + imperfect subj. + conditional", "si + pluperfect subj. + conditional perfect", "si + preterite + conditional"], correct: 2 },
    { type: "fill-blank", question: "¿Qué ___ (hacer, tú — conditional perfect) en mi lugar?", answer: "habrías hecho" },
    { type: "multiple-choice", question: "What does 'Habría venido, pero tuve que trabajar' mean?", options: ["I came but had to work", "I would have come, but I had to work", "I will come if I can work", "I had come to work"], correct: 1 },
    { type: "fill-blank", question: "Nunca ___ (imaginar, yo — conditional perfect) algo así.", answer: "habría imaginado" },
    { type: "multiple-choice", question: "What is 'habría' in the conditional perfect?", options: ["Future of haber", "Conditional of haber", "Imperfect of haber", "Preterite of haber"], correct: 1 },
  ],

  24: [
    { type: "multiple-choice", question: "The passive voice in Spanish is formed with:", options: ["estar + infinitive", "ser + past participle", "haber + past participle", "tener + past participle"], correct: 1 },
    { type: "fill-blank", question: "El puente ___ (construir — passive, preterite) en 1920.", answer: "fue construido" },
    { type: "multiple-choice", question: "In the passive voice, the past participle must agree with:", options: ["the agent", "the subject", "the verb SER", "nothing"], correct: 1 },
    { type: "fill-blank", question: "___ venden zapatos en esa tienda. (pasiva refleja)", answer: "se" },
    { type: "multiple-choice", question: "'Se hablan cuatro idiomas' — the verb is plural because:", options: ["the subject is 'se'", "the verb agrees with 'cuatro idiomas' (plural subject)", "Spanish passive always uses plural", "the agent is plural"], correct: 1 },
    { type: "fill-blank", question: "La novela ___ (escribir — passive, preterite) por un famoso autor.", answer: "fue escrita" },
    { type: "multiple-choice", question: "The 'pasiva refleja' (se + verb) is used to:", options: ["indicate reflexive actions", "avoid mentioning the agent", "form the future passive", "describe states"], correct: 1 },
  ],

  25: [
    { type: "multiple-choice", question: "PONERSE A + infinitive means:", options: ["to stop doing something", "to suddenly start doing something", "to do something again", "to finish doing something"], correct: 1 },
    { type: "fill-blank", question: "Se ___ a llorar de repente. (ponerse — preterite, él)", answer: "puso" },
    { type: "multiple-choice", question: "VOLVER A + infinitive expresses:", options: ["the start of a new action", "repetition of an action", "ongoing duration", "a recent past action"], correct: 1 },
    { type: "fill-blank", question: "¿Puedes ___ a explicar eso? (volver)", answer: "volver" },
    { type: "multiple-choice", question: "Complete: 'Me ___ a estudiar en cuanto llegué a casa.' (ponerse)", options: ["puse", "pongo", "pondré", "pusiste"], correct: 0 },
    { type: "fill-blank", question: "Volvió a ___ por la tarde. (llamar)", answer: "llamar" },
    { type: "multiple-choice", question: "PONERSE is a reflexive verb, so it always uses:", options: ["direct object pronouns", "reflexive pronouns", "indirect object pronouns", "no pronouns"], correct: 1 },
  ],

  26: [
    { type: "multiple-choice", question: "How do you say 'faster than' using an adverb comparison?", options: ["más rápido como", "tan rápido que", "más rápido que", "muy rápido que"], correct: 2 },
    { type: "fill-blank", question: "Ahora hablas español ___ que antes. (better — irregular)", answer: "mejor" },
    { type: "multiple-choice", question: "What is the irregular comparative adverb of MAL?", options: ["más mal", "malo", "peor", "mal que"], correct: 2 },
    { type: "fill-blank", question: "Ella canta tan ___ como una profesional. (bien)", answer: "bien" },
    { type: "multiple-choice", question: "'As slowly as possible' is expressed with:", options: ["tan lento posible", "lo más lentamente posible", "muy lentamente que", "más lentamente posible"], correct: 1 },
    { type: "fill-blank", question: "Este año trabaja ___ que el anterior. (less)", answer: "menos" },
    { type: "multiple-choice", question: "Adverbs compared with más/menos are:", options: ["invariable (no gender/number agreement)", "feminine only", "agree in number", "agree in gender and number"], correct: 0 },
  ],
};
