let listOfQuizs = {
    "quizs":
    [
        {
            "quizID":"1",
            "quizName":"IELTS Reading",
            "questions":
                [
                    {
                        "questionID":"1", 
                        "name":"The fire is ...",
                        "answers":['cold','loud','soft','hot']
                    }, 
                    {
                        "questionID":"2", 
                        "name":"The dog sleeps on the ... grass",
                        "answers":['cold','loud','soft','hot']
                    },
                ]
        }
    ]
}

function hienthi() {
    str = "";
    a = "";
    for(i = 0; i < listOfQuizs.quizs.length; i++){
        document.querySelector('h3').innerText = listOfQuizs.quizs[i].quizName + " Test";
        for(j = 0; j < listOfQuizs.quizs[i].questions.length; j++){
            str += "<div class='col-md-12 shadow-sm py-3'>";
            str += "<p class='bg-success text-white'>Question " + listOfQuizs.quizs[i].questions[j].questionID + ": " +listOfQuizs.quizs[i].questions[j].name +"</p>";
            for(k = 0; k < listOfQuizs.quizs[i].questions[j].answers.length; k++){
                str += "<input type='radio' id='answer' class='" + listOfQuizs.quizs[i].questions[j].questionID + "' name='answer" + listOfQuizs.quizs[i].questions[j].questionID + "' aria-label='answer' value='" + (k+1) + "'>";
                if(k==0){
                    a = "A";
                }
                else if(k==1){
                    a = "B";
                }
                else if(k==2){
                    a = "C";
                }
                else if(k==3){
                    a = "D";
                }
                str += "<label for=''>" + a + ". " + listOfQuizs.quizs[i].questions[j].answers[k] + "</label><br>";
            }
            str += "</div>";
        }
    }
    document.querySelector('.row').innerHTML = str;
}

function confirm() {
    const answer = document.querySelectorAll('#answer');
    a = "";
    answer.forEach(item => {
        if(item.checked){
            let i = item.getAttribute('value')
            if(i==1){
                a = "A";
            }
            else if(i==2){
                a = "B";
            }
            else if(i==3){
                a = "C";
            }
            else if(i==4){
                a = "D";
            }
            document.getElementById("content-dialog").innerText += item.getAttribute('class') + a + " ";
        }}
    );
}


