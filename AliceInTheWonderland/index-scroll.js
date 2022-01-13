let chatContent = {
    "className":[
        'XB', 'WZ', 'XB', 'WZ', 'XB', 'WZ', 'XB', 'WZ', 'XB', 'WZ',
        'XB', 'WZ', 'XB', 'WZ', 'XB', 'WZ'
    ],
    "msg":[
        'lorem ipsum1',
        'lorem ipsum2',
        'lorem ipsum3',
        'lorem ipsum4',
        'lorem ipsum5',
        'lorem ipsum6',
        'lorem ipsum7',
        'lorem ipsum8',
        'lorem ipsum9',
        'lorem ipsum10',
        'lorem ipsum11',
        'lorem ipsum12',
        'lorem ipsum13',
        'lorem ipsum14',
        'lorem ipsum15',
        'lorem ipsum16'
    ],
    "executed":[
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0
    ]
}

function makeChat(i){

    let classIndex = Math.floor(i / 2);
    
    if(chatContent.executed[i] == 1)
        return;
    
    if ( (i+1) % 2 == 0){
        typeChat('matrix', 150, 50, chatContent.msg[i], chatContent.className[i], classIndex)
    } 
    else {
        typeChat('tw', 130, 50, chatContent.msg[i], chatContent.className[i], classIndex)
    }
    chatContent.executed[i] = 1;

}

const NUM_CHATBOX = 16;
let vh = visualViewport.height;
let headerHeight = 0.2 * vh;

let initBoxCount = parseFloat((((vh - headerHeight - 90) / 80).toFixed(0)));
let boxLeft = NUM_CHATBOX - initBoxCount;

//initialize
let clickCount = 0;
document.getElementById('wrapper').style.overflow = 'hidden';

let t = setTimeout(function(){
    document.getElementById('wrapper').scrollTop = 0;
}, 50)
    

document.addEventListener("click",
    function(){
        if (clickCount < initBoxCount){
            makeChat(clickCount);
        }

        if(clickCount >= initBoxCount - 1){
            document.getElementById('wrapper').style.overflowY = 'scroll';
        }
        clickCount++;
    });

//scroll
document.getElementById('wrapper').addEventListener("scroll", function(){
    let scrollProgress = document.getElementById('wrapper').scrollTop;

    for(let i = 0; i < boxLeft; i++) {
        if(scrollProgress > 60 * (i+1)){
            makeChat(i + initBoxCount);
        }
    }
    
});
