import {ARROW_UP, ARROW_DOWN} from './sprites.js'

console.log(ARROW_UP)
console.log(ARROW_DOWN)
const startButton = document.querySelector('#start')
const dots = document.querySelectorAll('.dot')

const sprite = ARROW_UP

const FRM = sprite.length

let frameNo = 0

let flatSprite = []
sprite.forEach(s=>flatSprite.push(s.flat()))

// console.log(flatSprite)

function clearScreen(){
    dots.forEach(d=>{
        d.classList.remove('on')
    })
}

const up = e => {
    let i = 0
    let no = frameNo % FRM
    // console.log(frameNo)
    clearScreen()

    dots.forEach(d=>{

        if(flatSprite[no][i++]){
            d.classList.add('on')
        }

    })
    frameNo++
    setTimeout(up,500)
}

startButton.addEventListener('click', up)

