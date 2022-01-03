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
    
let testTxt = document.getElementById("test");

let randomChar = ['a','b','c','d','e','f','g',1,2,3,4,5,6];

let counter = 0;
let i = setInterval(function(){
    testTxt.innerHTML = "";
    for(let i = 0;i < 10;i++){
        testTxt.innerHTML += randomChar[getRandomInt(randomChar.length)];
    }
    counter++;
    if(counter == 10){
        clearInterval(i);
        testTxt.innerHTML = "Hello world";
    }

}, 100);
