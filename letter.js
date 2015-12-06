var currentLetter = '';

function randomLetter(){
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var randomNumber = Math.floor(Math.random()*letters.length);
    currentLetter = letters.charAt(randomNumber);
    document.getElementById('letter').innerHTML = currentLetter;
    playAudio(currentLetter)
}

function checkInput(){
    var userInput = document.getElementById('userInput').value.toUpperCase();
    if(userInput === currentLetter){
        displayStatus('Ok', 'check-ok', 'Ok');
        setTimeout(randomLetter, 2000)
    }else{
        displayStatus('Wrong', 'check-wrong', 'Uh_oh');
    }
}

function displayStatus(status, displayClass, soundFile){
    var statusEl = document.getElementById('status')
    statusEl.innerHTML = status;
    statusEl.className = displayClass;
    statusEl.style.display = 'block';
    playAudio(soundFile)
    setTimeout(clearStatus, 2000)
}

function clearStatus(){
    var statusEl = document.getElementById('status')
    var inputEl = document.getElementById('userInput')
    statusEl.innerHTML = '';
    statusEl.style.display = 'none';
    inputEl.value = '';
    inputEl.focus();
}

function playAudio(soundFile){
    var sound = new Audio("audio/mp3/" + soundFile.toUpperCase() + ".mp3")
    sound.play()
}
