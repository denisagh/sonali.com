let shuffledQuestions, currentQuestionIndex;

const Questions = [
    {
        id: 0,
        q: 'Care sunt principalele probleme ale pielii?',
        a :[
            {text: 'EXCES DE SEBUM ȘI PORI DILATAȚI', isCorrect: false},
            {text: 'SENSIBILITATE', isCorrect: false},
            {text: 'ACNEE', isCorrect: true},
            {text: 'RIDURI ȘI LINII FINE', isCorrect: false}
        ]
    },
    {
        id: 1,
        q: 'Care este frustrarea ta secundară a pielii?',
        a :[
            {text: 'EXCES DE SEBUM ȘI PORI DILATAȚI', isCorrect: true},
            {text: 'SENSIBILITATE', isCorrect: false},
            {text: 'PETE HIPERPIGMENTARE', isCorrect: false},
            {text: 'DESHIDRATARE', isCorrect: false}
        ]
    },
    {
        id: 2,
        q: 'Când vine vorba de ochii tăi, ce vrei să vezi mai puțin?',
        a :[
            {text: 'CEARCĂNE', isCorrect: false},
            {text: 'PIELE USCATĂ', isCorrect: false},
            {text: 'RIDURI ȘI LINII FINE', isCorrect: false},
            {text: 'TOATE CELE DE MAI SUS', isCorrect: true}
        ]
    },
    {
        id: 3,
        q: 'Ce preferi la o cremă hidratantă?',
        a :[
            {text: 'CREMĂ CU EFECT DE LIFTING', isCorrect: false},
            {text: 'CREMĂ TRATAMENT ACNEE', isCorrect: false},
            {text: 'CREMĂ HIDRATANTĂ', isCorrect: true},
            {text: 'CREMĂA PENTRU LUMINOZITATE', isCorrect: false}
        ]
    },
    {
        id: 4,
        q: 'Folosești o cremă hidratantă cu SPF?',
        a :[
            {text: 'DA', isCorrect: false},
            {text: 'NU', isCorrect: true},
            {text: 'UNEORI', isCorrect: false},
            {text: 'DOAR VARA', isCorrect: false}
        ]
    },
    {
        id: 5,
        q: 'Care este nuanța tenului tau?',
        a :[
            {text: 'DESCHIS', isCorrect: true},
            {text: 'MEDIU', isCorrect: false},
            {text: 'ÎNCHIS', isCorrect: false},
            {text: '-', isCorrect: false}
        ]
    }
]
  


// Set start
var start = true;
  
// Iterate
function iterate(id) {
  
    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
  
    // Getting the question
    const question = document.getElementById("question");
  
  
    // Setting the question text
    question.innerText = Questions[id].q;
  
    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
  
  
    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
  
    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;
  
    var selected = "";
  
        // Show selection for op1
        op1.addEventListener("click", () => {
            op1.style.backgroundColor = "#E5D2C4";
            op2.style.backgroundColor = "#fff";
            op3.style.backgroundColor = "#fff";
            op4.style.backgroundColor = "#fff";
            selected = op1.value;
        })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "#fff";
        op2.style.backgroundColor = "#E5D2C4";
        op3.style.backgroundColor = "#fff";
        op4.style.backgroundColor = "#fff";
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "#fff";
        op2.style.backgroundColor = "#fff";
        op3.style.backgroundColor = "#E5D2C4";
        op4.style.backgroundColor = "#fff";
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "#fff";
        op2.style.backgroundColor = "#fff";
        op3.style.backgroundColor = "#fff";
        op4.style.backgroundColor = "#E5D2C4";
        selected = op4.value;
    })
  
   
}
  
if (start) {
    iterate("0");
}
  
// Next button and method
const next = document.getElementsByClassName('next')[0];
const rezultat = document.getElementsByClassName('submit')[0];

var id = 0;
var nr=0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 5) {
        id++;
        iterate(id);
        console.log(id);
    }
    if(id==5)
    {
        next.classList.add("hide");
        rezultat.classList.remove("hide");
    }
  
})



/*
let qss=[
    {
        id: 1,
        qestions: "Care sunt principalele probleme ale pielii?",
        answer: "ACNEE",
        option: [
            "EXCES DE SEBUM ȘI PORI DILATAȚI",
            "SENSIBILITATE",
            "ACNEE",
            "RIDURI ȘI LINII FINE"
        ]
    },
    {
        id: 2,
        qestions: "Care este frustrarea ta secundară a pielii?",
        answer: "EXCES DE SEBUM ȘI PORI DILATAȚI",
        option: [
            "EXCES DE SEBUM ȘI PORI DILATAȚI",
            "ACNEE",
            "PETE HIPERPIGMENTARE",
            "DESHIDRATARE"
        ]
    },
    {
        id: 3,
        qestions: "Când vine vorba de ochii tăi, ce vrei să vezi mai puțin?",
        answer: "TOATE CELE DE MAI SUS",
        option: [
            "CEARCĂNE",
            "PIELE USCATĂ",
            "RIDURI ȘI LINII FINE",
            "TOATE CELE DE MAI SUS"
        ]
    },
    {
        id: 4,
        qestions: "Ce preferi la o cremă hidratantă?",
        answer: "CREMĂ HIDRATANTĂ",
        option: [
            "CREMĂ CU EFECT DE LIFTING",
            "CREMĂ TRATAMENT ACNEE",
            "CREMĂ HIDRATANTĂ",
            "CREMĂA PENTRU LUMINOZITATE"
        ]
    },
    {
        id: 5,
        qestions: "Folosești o cremă hidratantă cu SPF?",
        answer: "DA",
        option: [
            "DA",
            "NU",
            "UNEORI",
            "DOAR VARA"

        ]
    },
    {
        id: 6,
        qestions: "Care este nuanța tenului tau?",
        answer: "DESCHIS",
        option: [
            "DESCHIS",
            "MEDIU",
            "ÎNCHIS",
            "-"
        ]
    }
    
];
*/