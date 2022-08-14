function appendItem(type, parentId, childClassName, times){
    for(let i = 0; i < times; i++) {
        let element = document.createElement(type);
        element.classList.add(childClassName);
        element.id = `${childClassName}-${i}`;
        document.querySelector(parentId).append(element);
    } 
}

// used to create joysticks 
function rotateLines(className) {
    document.querySelectorAll(className).forEach(function(element, index){
        if(index*4 !== 0)
            element.style.transform = `rotate(${index*2}0deg)`;
        }
    );
}

function paintSquare() {
    this.classList.add('pain-square');
}

function setUpBoard() {
    // calculate rows & columns based on width
    let columnsAmount = (document.querySelector('#game-box').offsetWidth / 5);
    let rowsAmount = (document.querySelector('#game-box').offsetHeight / 5);
    
    // adds rows
    appendItem('div', '#game-box', 'row', rowsAmount);

    // add columns to previous rows
    for(let i = 0; i < rowsAmount; i++) {
        appendItem('div', `#row-${i}`, 'square', columnsAmount);
    }

    document.querySelectorAll('.square').forEach((square) => {
        square.addEventListener('mouseover', paintSquare)
        square.addEventListener('touchstart', paintSquare)
    });
}


appendItem('hr', '#joystick-1', 'joystick-hr', 9);
appendItem('hr', '#joystick-2', 'joystick-hr', 9);

rotateLines('.joystick-hr')

setUpBoard();
