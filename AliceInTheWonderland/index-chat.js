function bubble(width, height, person, index=0){

    anime({
        targets: person,
        keyframes: [
            {translateY: height, duration: 500, easing: 'easeOutExpo'},
            {width: width, translateY: -0, height: height, borderRadius: height/5, delay: 200},
        ],
        loop: false        
    })
}

function typewriter(msg, target) {
    let chat = target;
    let typewriter = new Typewriter(chat, {
        loop: false,
        cursor: 'I'
    });

    typewriter.typeString(msg)
        .pauseFor(2000)
        .start();
        
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randGen(ans, target, index) {
    let answer = ans;    
    let person = target;
    let randomChar = "ABCDEFGHIJKLMBNIOERTERGabcdefghijklmnopqrstuvwxyz1234567890$%#@!^&*(";  
    
    let counter = 0;
    let i = setInterval(function(){
        let groupOfReply = document.createElement('div');
        groupOfReply.classList.add('groupOfReply');
        person.appendChild(groupOfReply);  

        for(let i = 0; i < answer.length; i++){
            let element = document.createElement('div');
            element.classList.add('reply' + index);
            element.innerText = randomChar.charAt(getRandomInt(randomChar.length));
            groupOfReply.appendChild(element);
        }
        matrixAni(answer.length, index)

        counter++;
        if(counter == 10){
            clearInterval(i);
            let groupOfAns = document.createElement('div');
            groupOfAns.classList.add('groupOfAns');
            person.appendChild(groupOfAns);

            for (let i = 0; i < answer.length; i++) {
                let element = document.createElement('div');
                element.classList.add('answer');
                element.innerText = answer.charAt(i);
                groupOfAns.appendChild(element);
            }
            ansAni(answer.length);          
        }
    }, 300);
}

function matrixAni(len, index) {

    let chars = document.getElementsByClassName('reply' + index);
    const matrix = Array.from(chars);

    anime({
        targets: shuffle(matrix.slice(-len)),
        opacity: [0.7, 0],
        delay: anime.stagger(50)
    })
}

function ansAni(len) {

    let chars = document.getElementsByClassName('answer');
    const answer = Array.from(chars);

    anime({
        targets: shuffle(answer.slice(-len)),
        opacity: [0, 1],
        delay: anime.stagger(50)
    })
}


function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function typeChat(effect, width, height, msg, className, index) {
    let person = pathFinder(className, index);
    bubble(width, height, person);
    if (effect == 'tw') {
        let i = setTimeout(() => {
            typewriter(msg, person);
            person.style.leftPadding = 3.21;
            clearTimeout(i);
        }, 1000);
    }
    else if (effect == 'matrix') {
        let i = setTimeout(() => {
            randGen(msg, person, index);
            clearTimeout(i);
        }, 1000);
    }      
}

function pathFinder(person, index) {
    return document.getElementsByClassName(person)[index];
}

typeChat('tw', 120, 50, 'lorem ipsum', 'XB', 0);
typeChat('matrix', 150, 50, 'lorem ipsum', 'WZ', 0);
typeChat('tw', 120, 50, 'lorem ipsum', 'XB', 1);
typeChat('matrix', 150, 50, 'lorem ipsum', 'WZ', 1);
typeChat('tw', 120, 50, 'lorem ipsum', 'XB', 2);
typeChat('matrix', 150, 50, 'lorem ipsum', 'WZ', 2);