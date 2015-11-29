var currentLetter = '';

function randomLetter(){
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomNumber = Math.floor(Math.random()*letters.length);
    //return(letters.charAt(randomNumber));
    currentLetter = letters.charAt(randomNumber);
    document.getElementById('letter').innerHTML = currentLetter;
}

function checkInput(){
    var userInput = document.getElementById('userInput').value.toUpperCase();
    console.log("input" + userInput);
    console.log("current" + currentLetter);
    if(userInput === currentLetter){
        displayStatus('Ok');
        setTimeout(randomLetter, 2000)
    }else{
        displayStatus('Wrong');
    }
}

function displayStatus(status){
    document.getElementById('status').innerHTML = status;
    setTimeout(clearStatus, 2000)
}

function clearStatus(){
    document.getElementById('status').innerHTML = '';
    document.getElementById('userInput').value = '';
    document.getElementById('userInput').focus();
}
