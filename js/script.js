let c = document.querySelector('.c'),
    delet = document.querySelector('.delete'),
    parentheses = document.querySelector('.parentheses'),
    percent = document.querySelector('.percent'),
    splitUp = document.querySelector('.split-up'),
    multiply = document.querySelector('.multiply'),
    minus = document.querySelector('.minus'),
    plus = document.querySelector('.plus'),
    num = document.querySelectorAll('.num button'),
    comma = document.querySelector('.comma'),
    equally = document.querySelector('.equally'),
    rez = document.querySelector('#rez'),
    settings = document.querySelector('.settings'),
    popupWrapper = document.querySelector('.popup-wrapper'),
    popup=document.querySelector('.popup'),
    exit=document.querySelector('.exit');
let bllString;
parentheses.addEventListener('click', () => {
    if (rez.value.lastIndexOf('(') > rez.value.lastIndexOf(')')) {
        rez.value += ')';
        bllString += ')';
    } else {
        if (rez.value[rez.value.length - 1] == '+' || rez.value[rez.value.length - 1] == '/' || rez.value[rez.value.length - 1] == '*' || rez.value[rez.value.length - 1] == '-' ||
            rez.value == '') {
            rez.value += '(';
            bllString += '(';
        }
    }
});
percent.addEventListener('click', () => {
    rez.value = rez.value + '%';
    bllString += '%';
});
num.forEach(num => {
    num.addEventListener('click', () => {

        rez.value += num.textContent;
        bllString += num.textContent;
    });
});
plus.addEventListener('click', function () {
    if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' &&
        rez.value[rez.value.length - 1] !== '*' &&
        rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
        rez.value += '+';
        bllString += '+';
    }

});
multiply.addEventListener('click', () => {
    if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' &&
        rez.value[rez.value.length - 1] !== '*' &&
        rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
        rez.value += '×';
        bllString += '*';
    }

});
minus.addEventListener('click', () => {
    if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' &&
        rez.value[rez.value.length - 1] !== '*' &&
        rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
        rez.value += '-';
        bllString += '-';
    }

});
splitUp.addEventListener('click', () => {
    if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' &&
        rez.value[rez.value.length - 1] !== '*' &&
        rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
        rez.value += '÷';
        bllString += '/';
    }
})
delet.addEventListener('click', () => {
    rez.value = rez.value.slice(0, rez.value.length - 1);
    bllString = bllString + '';
    bllString = bllString.slice(0, bllString.length - 1);
});
window.addEventListener('keydown', event => console.log('код клавиши ' + event.keyCode))
window.addEventListener('keydown', (event) => {
    if (event.keyCode == 8) {
        rez.value = rez.value.slice(0, rez.value.length - 1);
        bllString = bllString + '';
        bllString = bllString.slice(0, bllString.length - 1);
    }
    if (event.keyCode == 49) {
        rez.value += '1';
        bllString += '1';
    }
    if (event.keyCode == 50) {
        rez.value += '2';
        bllString += '2';
    }
    if (event.keyCode == 51) {
        rez.value += '3';
        bllString += '3';
    }
    if (event.keyCode == 52) {
        rez.value += '4';
        bllString += '4';
    }
    if (event.keyCode == 53) {
        rez.value += '5';
        bllString += '5';
    }
    if (event.keyCode == 54) {
        rez.value += '6';
        bllString += '6';
    }
    if (event.keyCode == 55) {
        rez.value += '7';
        bllString += '7';
    }
    if (event.keyCode == 56) {
        rez.value += '8';
        bllString += '8';
    }
    if (event.keyCode == 57) {
        rez.value += '9';
        bllString += '9';
    }
    if (event.keyCode == 48) {
        rez.value += '0';
        bllString += '0';
    }
    if (event.keyCode == 107) {
        if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' &&
            rez.value[rez.value.length - 1] !== '*' &&
            rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
            rez.value += '+';
            bllString += '+';
        }
    }
    if (event.keyCode == 106) {
        if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' &&
            rez.value[rez.value.length - 1] !== '*' &&
            rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
            rez.value += '×';
            bllString += '*';
        }
    }
    if (event.keyCode == 111) {
        if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' &&
            rez.value[rez.value.length - 1] !== '*' &&
            rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
            rez.value += '÷';
            bllString += '/';
        }
    }
    if (event.keyCode == 109) {
        if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' &&
            rez.value[rez.value.length - 1] !== '*' &&
            rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
            rez.value += '-';
            bllString += '-';
        }
    }
    if (event.keyCode == 67) {
        rez.value = '';
        bllString = '';
    }

})
let intervalId;
let timeoutId;
delet.addEventListener('mousedown', () => {
    timeoutId = setTimeout(() => {
        intervalId1 = setInterval(() => rez.value = rez.value.slice(0, rez.value.length - 1), 50);
        intervalId2 = setInterval(() => bllString = bllString.slice(0, bllString.length - 1), 50);

        delet.addEventListener('mouseup', () => {
            clearInterval(intervalId1);
            clearInterval(intervalId2);
        });
    }, 200);
    delet.addEventListener('mouseup', () => {
        clearTimeout(timeoutId);

    });

});

c.addEventListener('click', () => {
    rez.value = '';
    bllString = '';
});
let count = 0;
equally.addEventListener('click', () => {
    if (count == 0) {
        bllString = bllString.slice(9, bllString.length);
        count++;
    }
    rez.value = eval(bllString);
    bllString = eval(bllString);
});
window.addEventListener('keydown', (e) => {
    if (e.keyCode == 187) {

        if (count == 0) {
            bllString = bllString.slice(9, bllString.length);
            count++;
        }

        rez.value = eval(bllString);
        bllString = eval(bllString);

    }
})
comma.addEventListener('click', () => {
    rez.value += '.';
    bllString += '.';
});
//Настройки
//Перетаскивание настоек
// settings.onmousedown = function (event) {
//     settings.style.position = 'absolute';
//     settings.style.zIndex = 1000;
//     document.body.append(settings);
//     moveAt(event.pageX, event.pageY);
//     function moveAt(pageX, pageY) {
//         settings.style.left = pageX - settings.offsetWidth / 2 + 'px';
//         settings.style.top = pageY - settings.offsetHeight / 2 + 'px';
//     }
//     function onMouseMove(event) {
//         moveAt(event.pageX, event.pageY);
//     }
//     document.addEventListener('mousemove', onMouseMove);
//     settings.onmouseup = function () {
//         document.removeEventListener('mousemove', onMouseMove);
//         settings.onmouseup = null;
//     };
// };
// settings.ondragstart=()=>false;

settings.addEventListener('click', () => {
    popupWrapper.style.display='flex';
    setTimeout(()=>popup.classList.add('popup-active'),0);
});

exit.addEventListener('click',()=>{
    setTimeout(()=>popupWrapper.style.display='none',0);
    popup.classList.remove('popup-active');
});