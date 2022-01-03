function showBubble(id, width, height){
    let widthStr = width + 'px';
    let heightStr = height + 'px';

    anime({
        targets: id,
        translateX: -width,
        translateY: -height,
        width: widthStr,
        height: heightStr,
        duration: 1000,
        easing: 'easeInExpo',
    })
}

showBubble('.XB', 100, 40);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function randGen() {
    let person = document.getElementsByClassName('WZ')[0];
    let randomChar = "ABCDEFGHIJKLMBNIOERTERGabcdefghijklmnopqrstuvwxyz1234567890$%#@!^&*(";

    let counter = 0;
    let i = setInterval(function(){
        
        for(let i = 0; i < 10; i++){
            let element = document.createElement('div');
            element.classList.add('reply');
            element.innerText = randomChar.charAt(getRandomInt(randomChar.length));
            person.appendChild(element);
        }
    
    counter++;
    if(counter == 10){
        clearInterval(i);
        
        answer = "HelloWorld"
        for (let i = 0; i < answer.length; i++) {
            let element = document.createElement('div');
            element.classList.add('reply');
            element.innerText = answer.charAt(i);
            person.appendChild(element);
        }

    }
    }, 100);
}

randGen();


