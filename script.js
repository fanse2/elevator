import {ARROW_UP, ARROW_DOWN} from './sprites.js'

console.log(ARROW_UP)
console.log(ARROW_DOWN)
const upButton = document.querySelector('#up')
const downButton = document.querySelector('#down')
const dots = document.querySelectorAll('.dot')

let sprite = ARROW_UP
let frm = sprite.length
let frameNo = 0
let timeout

let flatSprite = []
sprite.forEach(s=>flatSprite.push(s.flat()))

// console.log(flatSprite)

function clearScreen(){
    dots.forEach(d=>{
        d.classList.remove('on')
    })
}

const play = () => {
    let i = 0
    let no = frameNo % frm
    // console.log(frameNo)
    clearScreen()

    dots.forEach(d=>{

        if(flatSprite[no][i++]){
            d.classList.add('on')
        }

    })
    frameNo++
    timeout = setTimeout(play,500)
}

const up = e => {
    sprite = ARROW_UP
    frm = sprite.length
    frameNo = 0
    flatSprite = []
    sprite.forEach(s=>flatSprite.push(s.flat()))
    clearTimeout(timeout)

    play()

}

const down = e => {
    sprite = ARROW_DOWN
    frm = sprite.length
    frameNo = 0
    flatSprite = []
    sprite.forEach(s=>flatSprite.push(s.flat()))
    clearTimeout(timeout)

    play()
}

upButton.addEventListener('click', up)
downButton.addEventListener('click', down)

