let questions = [
    {
        "question": "Wenn Schnee mehrmals schmilzt und wieder gefriert, entsteht sogenannter:",
        "answer_1": "Harsch",
        "answer_2": "Pappschnee",
        "answer_3": "Pulverschnee",
        "answer_4": "Kunstschnee",
        "right-answer": 1
    },
    {
        "question": "Wann entsteht Rauhreif?",
        "answer_1": "Wenn es warm und feucht ist.",
        "answer_2": "Wenn es kalt ist.",
        "answer_3": "Wenn es trocken ist.",
        "answer_4": "Wenn es sehr kalt und feucht ist.",
        "right-answer": 4
    },
    {
        "question": "Wie groß können Schneeflocken werden?",
        "answer_1": "Schneeflocken können bis zu zwei Millimeter groß werden.",
        "answer_2": "Schneeflocken können maximal zwei Zentimeter groß werden.",
        "answer_3": "Schneeflocken können bis zu zwölf Zentimeter groß werden.",
        "answer_4": "Schneeflocken können bis zu einem Millimeter groß werden.",
        "right-answer": 3
    },

    {
        "question": "Eisblumen kann man im Winter...",
        "answer_1": "im Blumenladen kaufen.",
        "answer_2": "in verschiedenen Farben entdecken.",
        "answer_3": "an Fensterscheiben sehen.",
        "answer_4": "in der Eisdiele schlecken.",
        "right-answer": 3
    },
    {
        "question": "Glaziologie ist...",
        "answer_1": "ein Friseur für Haarlose Menschen.",
        "answer_2": "die Wissenschaft von Eis und Schnee.",
        "answer_3": "eine reine Erfindung.",
        "answer_4": "eine Himmelserscheinung.",
        "right-answer": 2
    },
    {
        "question": "Was ist die tiefste Temperatur, die je in Deutschland gemessen wurde?",
        "answer_1": "-28,9 Grad Celsius",
        "answer_2": "-50,3 Grad Celsius",
        "answer_3": "-21,1 Grad Celsius",
        "answer_4": "-37,8 Grad Celsius",
        "right-answer": 4
    },
    {
        "question": "Warum verlieren manche Nadelbäume im Winter ihre Nadeln nicht?",
        "answer_1": "Weil diese Nadelbäume eine spezielle Züchtung sind.",
        "answer_2": "Weil es Weihnachtsbäume sind.",
        "answer_3": "Weil die Nadeln mit einer schützenden Wachschicht überzogen sind, die den Baum vor Austrocknung bewahrt.",
        "answer_4": "Weil die Nadeln fest am Baum angewachsen sind, genauso wie Äste.",
        "right-answer": 3
    },
    {
        "question": "Fällt das Thermometer unter 15 Grad, dann werden Igel, Waschbär und Dachs...?",
        "answer_1": "hellwach und unternehmungslustig.",
        "answer_2": "müde und schläfrig.",
        "answer_3": "traurig.",
        "answer_4": "hungrig und durstig.",
        "right-answer": 2
    },
    {
        "question": "Was ist richtig? Je kälter und trockener die Luft, ...",
        "answer_1": "desto kleiner und dichter sind die Schneeflocken.",
        "answer_2": "desto öfter schneit es.",
        "answer_3": "desto größer sind die Schneeflocken.",
        "answer_4": "desto öfter scheint die Sonne.",
        "right-answer": 1
    },
    {
        "question": "Wie viel Prozent Luft enthalten Schneeflocken?",
        "answer_1": "bis zu 55 Prozent.",
        "answer_2": "gar keine.",
        "answer_3": "bis zu 95 Prozent",
        "answer_4": "bis zu 75 Prozent.",
        "right-answer": 3
    },
    {
        "question": "Welche Form haben Schneeflocken immer?",
        "answer_1": "Sie sind sechseckig.",
        "answer_2": "Sie sind achteckig.",
        "answer_3": "Sie sind fünfeckig.",
        "answer_4": "Sie sind viereckig.",
        "right-answer": 1
    },
    {
        "question": "In den Rocky Mountains heißt Pulverschnee auch ...",
        "answer_1": "Wine-Powder.",
        "answer_2": "Beer-Powder.",
        "answer_3": "Champagne-Powder.",
        "answer_4": "Sparkling-Wine-Powder.",
        "right-answer": 3
    },
    {
        "question": "Wie hoch war die höchste Schneedecke in Deutschland?",
        "answer_1": "10,50 Meter auf dem Watzmann im Jahr 1971.",
        "answer_2": "8,30 Meter auf der Zugspitze im Jahr 1944.",
        "answer_3": "6,10 Meter auf der Karwendelspitze im Jahr 2000.",
        "answer_4": "9,50 Meter auf dem Fichtelberg im Jahr 1962.",
        "right-answer": 2
    },
    {
        "question": "Aus welcher Wolkengattung fällt normalerweise Schnee?",
        "answer_1": "Altocumulus.",
        "answer_2": "Cirrus und Cumulus.",
        "answer_3": "Stratocumulus",
        "answer_4": "Nimbostratus und Altostratus",
        "right-answer": 4
    },
    {
        "question": "Wie schnell fallen Schneeflocken im Durchschnitt?",
        "answer_1": "Etwa zwei Meter pro Sekunde.",
        "answer_2": "Nur einen halben Meter in der Sekunde.",
        "answer_3": "Rund einen Meter pro Sekunde.",
        "answer_4": "Etwa 1,5 Meter pro Sekunde.",
        "right-answer": 3
    },
]

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);

    let idOfAnswer = `answer_${question['right-answer']}`;

    if (selectedQuestionNumber == question['right-answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();

}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}