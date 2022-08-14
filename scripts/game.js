
function appendItem(type, parentId, childClassName, times){
    for(let i = 0; i < times; i++) {
        let element = document.createElement(type);
        element.classList.add(childClassName);
        document.querySelector(parentId).append(element);
    } 
}

// used to create joysticks 
function rotateLines(className) {
    document.querySelectorAll(className).forEach(function(element, index){
        if(index*4 !== 0)
            element.style.transform = `rotate(${index*2}0deg)`;
        }
    )
}


appendItem('hr', '#joystick-1', 'joystick-hr', 9);
appendItem('hr', '#joystick-2', 'joystick-hr', 9);

rotateLines('.joystick-hr')
