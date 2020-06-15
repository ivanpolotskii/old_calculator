let c = document.querySelector('.c'),
    delet=document.querySelector('.delete'),
    parentheses = document.querySelector('.parentheses'),
    percent = document.querySelector('.percent'),
    splitUp = document.querySelector('.split-up'),
    multiply = document.querySelector('.multiply'),
    minus = document.querySelector('.minus'),
    plus = document.querySelector('.plus'),
    num = document.querySelectorAll('.num button'),
    comma = document.querySelector('.comma'),
    equally = document.querySelector('.equally'),
    rez = document.querySelector('#rez');

parentheses.addEventListener('click', () => {
    if (rez.value.lastIndexOf('(') > rez.value.lastIndexOf(')')) {
        rez.value += ')';
    } else {
        if (rez.value[rez.value.length - 1] == '+' || rez.value[rez.value.length - 1] == '/' || rez.value[rez.value.length - 1] == '*' || rez.value[rez.value.length - 1] == '-'
        ||rez.value=='') {
            rez.value += '(';
        }
    }
});
percent.addEventListener('click', () => {
    rez.value = rez.value + '%';
});
num.forEach(num => {
    num.addEventListener('click', () => {

        rez.value += num.textContent;
    });
});
plus.addEventListener('click', function () {
    if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' 
        && rez.value[rez.value.length - 1] !== '*' &&
        rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
        rez.value += '+';
    }

});
multiply.addEventListener('click', () => {
    if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' 
        && rez.value[rez.value.length - 1] !== '*' &&
        rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
            rez.value += '*';
    }
    
});
minus.addEventListener('click', () => {
    if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' 
        && rez.value[rez.value.length - 1] !== '*' &&
        rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
            rez.value += '-';
    }
    
});
splitUp.addEventListener('click',()=>{
    if (rez.value[rez.value.length - 1] !== '+' && rez.value[rez.value.length - 1] !== '/' 
        && rez.value[rez.value.length - 1] !== '*' &&
        rez.value[rez.value.length - 1] !== '-' && rez.value !== '') {
            rez.value += '/';
    }
})
delet.addEventListener('click',()=>{
    rez.value = rez.value.slice(0,rez.value.length-1);
});
let intervalId;
delet.addEventListener('mousedown',()=>{
    intervalId=setInterval(()=>rez.value = rez.value.slice(0,rez.value.length-1),50);
    delet.addEventListener('mouseup',()=>{
        clearInterval(intervalId);
    })
})

c.addEventListener('click', () => {
    rez.value = '';
});
equally.addEventListener('click', () => {
    rez.value = eval(rez.value);
});
comma.addEventListener('click', () => {
    rez.value += '.';
});