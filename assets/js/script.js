//event listeners
document.addEventListener("DOMContentLoaded", function () {
    let buttons= document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function () {
          if(this.getAttribute("data-type")=== "submit"){
              alert("You have clicked Next Question!");
          } else {
              let optionType = this.getAttribute("data-type");
              alert(`You clicked ${optionType}`);
              
          }
        })
    }
})

//this function will run the quiz
function runQuiz(){
    let centeredH1= document.getElementsByTagName('h1')[0];
    centeredH1.style.textAlign="center";
    let centeredP= document.getElementsByTagName('p')[0];
    centeredP.style.textAlign="center";
    
    let questionContainer= document.getElementsByClassName('question-container');
    let resultContainer= document.getElementById('results');
    let submitButton= document.getElementsById('submit');
//displaying the Quiz Questions, Options and correct answers const quizQuestions=[

   let quizQuestions =[
       {
        question:"Dr.Congo is situated where in Africa?",
        answers: {
            a:"Middle Eastern",
            b:"Central Africa",
            c:"West Africa",
            d:"South Africa",
                },
        correctAnswers: "b"
       },
       {
        question:"DR Congo was formerly known as?",
        answers: {
            a:"Kingdom of Congo",
            b:"Kinshasa",
            c:"Swahili",
            d:"Republic of Zaire",
                },
        correctAnswers: "d"
/*Republic of Zaire or République du Zaïre in French. 
if I have time to include the reasoning or why the country had changed names*/
    },
    {
        question:"Who took power and changed the name of the country in the 1990s?",
        answers: {
            a:"Laurent-Désiré Kabila",
            b:"Mobutu Sese Seko",
            c:"Joseph Kabila",
            d:"Joseph Kasa-Vubu",
                },
        correctAnswers: "a"
        /*could add the following for extra intel- [All names mentioned in the options ruled the country at some point,
the longest time in office being president Mobutu with over 31 years spent in power and the shortest being Kabila. 
Now under new Presidency with Félix Tshisekedi since 2019].*/
    },
    {
        question:"In what year and month did Congo their gain independence from Belgium?",
        answers: {
            a:"June, 1690s",
            b:"July 1960s",
            c:"June 1960s",
            d:"June 1930s",
                },
        correctAnswers: "c" //30, June 1960s

     },
     {
        question:"What river runs through DR Congo?",
        answers: {
            a:"Amazon River",
            b:"Kinshasa River",
            c:"Congo River",
            d:"Wakanda River",
                },
        correctAnswers: "c"
                    // Congo River. Formerly known as the Zaire River, second longest River in Africa and the World's deepest recorded river.
    },
    {
        question:"In the rankings of the largest African countries, DRC is ranked at what position?",
        answers: {
            a:"2nd",
            b:"14th",
            c:"4th",
            d:"3rd",
                },
        correctAnswers: "a"
    }, // make ALL the answers hidden from user.
   ]

}


//this will be used to check the users answer
function checkAnswer(){

}

//for correct answer count to be increased
function correctAnswer(){
    
}


//for wrong answer count to be decreased/
function wrongAnswer(){
    
}

function displayQuestion() {
    
}

function displayOptions() {
    
}

