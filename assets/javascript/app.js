var correct = 0;
var incorrect = 0;
var unanswer = 0;

// 1. Set a timer.
var time = 90;

setTimeout(resultPrint, 1000 * time);

var timeInterval;

function timer() {
    timeInterval = setInterval(count,1000);
}

function count() {
    time --;

    var converted = timeConverter(time);

    $("#timer-display").text("Time Remain " + converted);
}

// 2. Convert timeer to 00:00 format.
function timeConverter(t) {
    var minutes = Math.floor(t/60);
    var seconds = t - (minutes*60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    } 

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

// 3. Set a question pop function.
// var questionAnswer = {
//     q1: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
//     a1: ["In a lightning storm","In a funeral pyre","In a firepalce","In a frozen cave"],
//     q2: "The phrase 'Valar Morghulis' or 'all men must die' is usually responed with:",
//     a2: ["'Valar Dohaeris' or 'all men must serve'","'Valar Rohnas' or 'all men must live'","'Valar GoGo' or 'll men must dance'","'Valar Bhores' or 'all men must sleep'"],
//     q3: "What is the only thing that can put out volatile Wildfire?",
//     a3: ["Sand","Water","Dragon's Blood","Sunlight"],
//     q4: "Besides dargonglass, what is the only other substance capable of defeating White Walker?",
//     a4: ["Weirdwood","Wildfire","Valrian Steel","Snowballs"],
//     q5: "How many times has Beric Dondarrion been brouhgt back to life?",
//     a5: [3,4,5,6],
//     q6: "Which Starks family direwolf was killed in retaliation for an attack on Prince Joffery?",
//     a6: ["Ghost","Lady","Nymeria","Summer"],
//     q7: "'It's nothing' were the last words of this infamous character:",
//     a7: ["Renly Baratheon","Tywon Lannister","Robb Stark","King Joffery"],
//     q8: "The name of King Tommen's favorite cat is:",
//     a8: ["Battle Pus","Little Lion","Ser Pounce","Prince Fuzzy"],
//     q9: "How shoots the flaming arrow that subsequently destroies Stannis' fleet in Blackwater Bay?",
//     a9: ["Tyrion Lannister","King Joffery","Jamie Lannister","Bronn"],
//     q10: "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",
//     a10: ["Pride in drawing blood first","Knowledge of poisons","Nighttime attacks","Ruby-colored armor"]
// };

// function questionPop() {
//     var questionPrint = $("<div>")
//     for (var i=1; i<=10; i++) {
//         questionPrint.attr("class","question");
//         questionPrint.text=(questionAnswer.q+[i]);
//         $("#questions").append(questionAnswer);
//         for (var j=0; j<4; j++) {
//             questionPrint.text=("<botton>" + questionAnswer.a+[i]+ "[j]" + "<botton>");
//             $("#questions").append(questionAnswer);
//         }
//     }
// }

var questions = [
    {question: "How did Daenerys Targaryen eventually hatch her dragon eggs?", choices: ["In a lightning storm","In a funeral pyre","In a firepalce","In a frozen cave"], correctAnswer: "In a funeral pyre", userAnswer: ""},
    {question: "The phrase 'Valar Morghulis' or 'all men must die' is usually responed with:", choices: ["'Valar Dohaeris' or 'all men must serve'","'Valar Rohnas' or 'all men must live'","'Valar GoGo' or 'll men must dance'","'Valar Bhores' or 'all men must sleep'"], correctAnswer: "'Valar Dohaeris' or 'all men must serve'", userAnswer: ""},
    {question: "What is the only thing that can put out volatile Wildfire?", choices: ["Sand","Water","Dragon's Blood","Sunlight"], correctAnswer: "Sand", userAnswer: ""},
    {question: "Besides dargonglass, what is the only other substance capable of defeating White Walker?", choices: ["Weirdwood","Wildfire","Valrian Steel","Snowballs"], correctAnswer: "Valrian Steel", userAnswer: ""},
    {question: "How many times has Beric Dondarrion been brouhgt back to life?", choices: ["3","4","5","6"], correctAnswer: "6", userAnswer: ""},
    {question: "Which Starks family direwolf was killed in retaliation for an attack on Prince Joffery?", choices: ["Ghost","Lady","Nymeria","Summer"], correctAnswer: "Lady", userAnswer: ""},
    {question: "'It's nothing' were the last words of this infamous character:", choices: ["Renly Baratheon","Tywon Lannister","Robb Stark","King Joffery"], correctAnswer: "King Joffery", userAnswer: ""},
    {question: "The name of King Tommen's favorite cat is:", choices: ["Battle Pus","Little Lion","Ser Pounce","Prince Fuzzy"], correctAnswer: "Ser Pounce", userAnswer: ""},
    {question: "How shoots the flaming arrow that subsequently destroies Stannis' fleet in Blackwater Bay?", choices: ["Tyrion Lannister","King Joffery","Jamie Lannister","Bronn"], correctAnswer: "Bronn", userAnswer: ""},
    {question: "Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:", choices: ["Pride in drawing blood first","Knowledge of poisons","Nighttime attacks","Ruby-colored armor"], correctAnswer: "Knowledge of poisons", userAnswer: ""},
]

//a1: In a funeral pyre
//a2: 'Valar Dohaeris' or 'all men must serve'
//a3: Sand
//a4: Valrian Steel
//a5: 6
//a6: Lady
//a7: King Joffery
//a8: Ser Pounce
//a9: Bronn
//a10: Knowledge of poisons

//4. Set a function to pop questions.
function questionPop () {
    for (var i=0; i<questions.length; i++) {
        var questionPrint = $("<div>");
        questionPrint.attr("class","question");
        questionPrint.text(questions[i].question);
        $("#question-display").append(questionPrint);
        for (var j=0; j<questions[i].choices.length; j++) {
            var answerPrint = $("<input>");
            answerPrint.attr("type","radio");
            answerPrint.attr("name","answer"+[i+1]);
            answerPrint.attr("value",questions[i].choices[j]);
            answerPrint.attr("id",questions[i].choices[j]);
            var answerLabel = $("<label>");
            answerLabel.attr("for",questions[i].choices[j]);
            answerLabel.text(questions[i].choices[j]);
            answerPrint.append(questions[i].choices[j]);
            $("#question-display").append(answerPrint).append(" ").append(answerLabel).append("<br>");
            // $("#question-display").append("<span>" + questions[i].choices[j] + "</span>");
        }
        
    }
}

// 5. Set a funtion to print result.
function resultPrint() {
    $("#timer-display").html("");
    var resultPrint = $("<h2>");
    resultPrint.attr("class","resultPrint");
    resultPrint.text("Submitted");
    $("#question-display").html(resultPrint);
    var resultPrint = $("<div>");
    resultPrint.attr("class","resultPrint");
    resultPrint.text("You got " + correct + " questions CORRECT");
    $("#question-display").append(resultPrint);
    var resultPrint = $("<div>");
    resultPrint.attr("class","resultPrint");
    resultPrint.text("You got " + incorrect + " questions INCORRECT");
    $("#question-display").append(resultPrint);
    var resultPrint = $("<div>");
    resultPrint.attr("class","resultPrint");
    resultPrint.text("You got " + unanswer + " questions UNANSWERED");
    $("#question-display").append(resultPrint);
    $("#timer-display").attr("style","display: none");
}

// 6. Once players select, return answers back to question array for result check funtion
function answerSelet() {
    for (var k=0; k<questions.length; k++) {
        questions[k].userAnswer = $("input[name=answer" + [k+1] + "]:checked").val();
        console.log($("input[name=answer" + [k+1] + "]:checked").val());
    }
}

// 7. Create a result check function
function resultChecker() {

    answerSelet();

    for (var l=0; l<questions.length; l++) {
        if (questions[l].userAnswer === questions[l].correctAnswer) {
            correct++;
        }
        else if (questions[l].userAnswer === undefined) {
            unanswer++;
        }
        else {
            incorrect++;
        }
    }
}

// 8. When players click start botton, questions pop and timer starts.
$("#start").on("click",function(){
    $("#start").attr("style","display: none");
    $("#timer-display").attr("style","display: inline");
    $("#timer-display").text("Time Remain 01:30");
    timer();
    questionPop();
    $("#question-display").append("<button class='btn btn-dark bottonClick'>Submit</button>");
    
    if (time === 0){
    
    resultChecker();
    resultPrint();
    clearInterval(timeInterval);
    
    }

    else {
        $("button").on("click",function(){
            
            resultChecker();
            console.log(correct);
            console.log(incorrect);
            console.log(unanswer);
            resultPrint();
            clearInterval(timeInterval);
            
        });
}
});