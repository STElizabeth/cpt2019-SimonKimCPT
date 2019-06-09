    
var score = 0
var i = 1
var ans = 1
var counter = 1



function submitAnswer(){
    y = document.getElementById("qans").value
     var yy=y.toUpperCase();
   
    x = document.getElementById("question").value
    if (ans === 1) {
        y = document.getElementById("qans").value

        if (yy === "A" || yy === "B" || yy === "C" || yy === "D") {

            document.getElementById("question").value = "Thats great"
            document.body.style.backgroundImage = "url(images/right.png)"

        }
        else {

            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }




        document.view.qscore.value = score
    }
    else if (ans === 2) {


        if (yy === "A") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"

            score++
        }
        else if (yy === "B" || yy === "C" || yy === "D") {

            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"

        }

        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }
    else if (ans === 3) {

        if (yy === "B") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"
            score++
        }
        else if (yy === "A" || yy === "C" || yy === "D") {
            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"
        }
        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }

    else if (ans === 4) {

        if (yy === "B") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"
            score++
        }
        else if (yy === "A" || yy === "C" || yy === "D") {
            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"
        }
        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }
    else if (ans === 5) {

        if (yy === "A") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"
            score++
        }
        else if (yy === "B" || yy === "C" || yy === "D") {
            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"
        }
        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }
    else if (ans === 6) {

        if (yy === "C") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"
            score++
        }
        else if (yy === "A" || yy === "B" || yy === "D") {
            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"
        }
        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }
    else if (ans === 7) {

        if (yy === "D") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"
            score++
        }
        else if (yy === "A" || yy === "C" || yy === "B") {
            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"
        }
        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }
    else if (ans === 8) {

        if (yy === "D") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"
            score++
        }
        else if (yy === "A" || yy === "C" || yy === "B") {
            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"
        }
        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }
    else if (ans === 9) {

        if (yy === "A") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"
            score++
        }
        else if (yy === "B" || yy === "C" || yy === "D") {
            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"
        }
        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }
    else if (ans === 10) {

        if (yy === "C") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"
            score++
        }
        else if (yy === "A" || yy === "B" || yy === "D") {
            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"
        }
        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }
    else if (ans === 11) {

        if (yy === "D") {
            document.getElementById("question").value = "You are right"
            document.body.style.backgroundImage = "url(images/right.png)"
            score++
        }
        else if (yy === "A" || yy === "C" || yy === "B") {
            document.getElementById("question").value = "You are wrong"
            document.body.style.backgroundImage = "url(images/wrong.png)"
        }
        else {
            document.getElementById("question").value = "Not a proper answer"
            ans--
            i--
        }
        document.view.qscore.value = score
    }
   
	ans++; 
btnenable()
}
        

        
        
        
function main(){ 
    if (i === 1) {
        document.view.qnum.value = i;
        document.view.question.value = "Are you Ready? \nA)Yes \nB)Of course \nC)Yeah \nD)IM READY";
        document.view.qans.value = ""
    }
    else if (i === 2) {
        document.view.qnum.value = i;
        document.view.question.value = "How many players are on a soccer field? \nA)11 \nB)22 \nC)24 \nD)12";
        document.view.qans.value = ""
    }

    else if (i === 3) {
        document.view.qnum.value = i;
        document.view.question.value = "Which country hosted the 2008 Olympics? \nA)Japan \nB)China \nC)United States \nD)RUssia";
        document.view.qans.value = ""
    }
    else if (i === 4) {
        document.view.qnum.value = i;
        document.view.question.value = "How high is a basketball hoop form the ground? \nA)9 feet \nB)10 feet \nC)12 feet \nD)11 feet";
        document.view.qans.value = ""
    }
    else if (i === 5) {
        document.view.qnum.value = i;
        document.view.question.value = "In soccer how far from the net is the penalty mark? \nA)11 meters \nB)11 feet \nC)6 meters \nD)6 feet";
        document.view.qans.value = ""
    }
    else if (i === 6) {
        document.view.qnum.value = i;
        document.view.question.value = "What city hockey team Oilers from? \nA)Calgary \nB)Toronto \nC)Edmonton\nD)Winnipeg";
        document.view.qans.value = ""
    }
    else if (i === 7) {
        document.view.qnum.value = i;
        document.view.question.value = "What does NBA stand for? \nA)Nice Basketball Association \nB)Nine Branches Association \nC)National Bagels Association \nD)National Basketball Association";
        document.view.qans.value = ""
    }
    else if (i === 8) {
        document.view.qnum.value = i;
        document.view.question.value = "In Canada what is the governing body for golf? \nA)Golf Extreme \nB)Golf Masters \nC)Canadian Golf Masters \nD)Golf Canada";
        document.view.qans.value = ""
    }
    else if (i === 9) {
        document.view.qnum.value = i;
        document.view.question.value = "Who was the MVP of the 2010-11 NBA Regualr Season? \nA)Derrick Rose \nB)Kevin Durant \nC)Lebron James \nD)Stephen Curry";
        document.view.qans.value = ""
    }
    else if (i === 10) {
        document.view.qnum.value = i;
        document.view.question.value = "What sport can improve your posture? \nA)Basketball \nB)Volleyball \nC)Horseback Riding \nD)Tennis";
        document.view.qans.value = ""
    }
    else if (i === 11) {
        document.view.qnum.value = i;
        document.view.question.value = "How much points is a touchdown worth? \nA)50 \nB)1 \nC)3 \nD)6";
        document.view.qans.value = ""
    }
    else if (i === 12) {
        document.view.qnum.value = "";
        document.getElementById("next").value = "The End"
       
       
            document.view.question.value = "You got " + score + " out of 10 questions"
            document.body.style.backgroundImage = "url(images/happy_face.png)"
        
       
     

    }
	i++; 
    btndisable()
    document.body.style.backgroundImage = "url(images/background_title.png)"
}


function btndisable() {
    document.getElementById("next").disabled = true
    document.getElementById("submit").disabled = false
}

function btnenable(){
document.getElementById("next").disabled=false
    document.getElementById("submit").disabled = true    
}


