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
