let paragraph = document.getElementById('text')
let pole = document.getElementById('vvod')
pole.addEventListener('keyup', perevod)
function perevod() {
    paragraph.innerHTML = pole.value
}
let start = document.getElementById('start')
let left = document.getElementById('left')
let right = document.getElementById('right')
let up = document.getElementById('top')
let buttom = document.getElementById('buttom')
let pers = document.getElementById('mini')
let pers_1 = document.getElementById('img_1')
let pers_2 = document.getElementById('img_2')
let position_h = 0
let position_v = 0
let sum = 50
start.addEventListener('click', beginner)
function beginner() {
    pers.style.opacity = '1'
    pers_2.style.top = 30 + 'px'
    // pers_2.style.left= 10 + 'px'

}
right.addEventListener('click', swap_right)
function swap_right() {
    position_h+=sum
    if(position_h>650){
        alert('Wrong way')
    }else{
        if(pers_2.style.top > pers_1.style.top){
            pers.style.transform = 'rotate(360deg)'
            pers.style.left = position_h+'px'
        } else {
            pers.style.left = position_h+'px'
        }
    }
}
left.addEventListener('click', swap_left)
function swap_left() {
    position_h-=sum
    if(position_h<0){
        alert('Wrong way')
    }else{
        if(pers_2.style.top > pers_1.style.top){
            pers.style.transform = 'rotate(180deg)'
            pers.style.left = position_h+'px'
        } else {
            pers.style.left = position_h+'px'
        }
    }
}
buttom.addEventListener('click', swap_down)
function swap_down() {
    position_v+=sum
    if(position_v>620){
        alert('Wrong Way')
    }else{
        if(pers_2.style.top > pers_1.style.top){
            pers.style.transform = 'rotate(90deg)'
            pers.style.top = position_v+'px'
        } else {
            pers.style.top = position_v+'px'
        }
    }
}
up.addEventListener('click', swap_up)
function swap_up() {
    position_v-=sum
    if(position_v<0){
        alert('Wrong Way')
    }else{
        if(pers_2.style.top > pers_1.style.top){
            pers.style.transform = 'rotate(-90deg)'
            pers.style.top = position_v+'px'
        } else {
            pers.style.top = position_v+'px'
        }
    }
}
