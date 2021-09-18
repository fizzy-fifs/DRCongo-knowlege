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

