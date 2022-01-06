function bubble(width, height, person){

    anime({
        targets: '.' + person,
        keyframes: [
            {translateY: height, duration: 500, easing: 'easeOutExpo'},
            {width: width, translateY: -0, height: height, borderRadius: height/5, delay: 200},
        ],
        loop: false
    })

    document.getElementsByClassName('XB')[0].style.leftPadding = 3.21;
}

function typewriter(msg) {
    let chat = document.getElementsByClassName('XB')[0];
    let typewriter = new Typewriter(chat, {
        loop: false
    });

    typewriter.typeString(msg)
        .pauseFor(2000)
        .start();
        
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randGen(ans) {
    let answer = ans;    
    let person = document.getElementsByClassName('WZ')[0];
    let randomChar = "ABCDEFGHIJKLMBNIOERTERGabcdefghijklmnopqrstuvwxyz1234567890$%#@!^&*(";  
    
    let counter = 0;
    let i = setInterval(function(){
        let groupOfReply = document.createElement('div');
        groupOfReply.classList.add('groupOfReply');
        person.appendChild(groupOfReply);  

        for(let i = 0; i < answer.length; i++){
            let element = document.createElement('div');
            element.classList.add('reply');
            element.innerText = randomChar.charAt(getRandomInt(randomChar.length));
            groupOfReply.appendChild(element);
        }
        matrixAni(answer.length)

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

function matrixAni(len) {

    let chars = document.getElementsByClassName('reply');
    const matrix = Array.from(chars);

    anime({
        targets: shuffle(matrix.slice(-len)),
        translateY: 50,
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

function typeChat(width, height, msg, person) {
    bubble(width, height, person);
    if (person == 'XB') {
        let i = setTimeout(() => {
            typewriter(msg);
            clearTimeout(i);
        }, 1000);
    }
    else if (person == 'WZ') {
        let i = setTimeout(() => {
            randGen(msg);
            clearTimeout(i);
        }, 1000);
    }      
}

typeChat(90, 50, 'hello world', 'XB');
typeChat(220, 50, 'hello  world', 'WZ');
