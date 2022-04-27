// import lodash from "lodash";
// console.log(1,lodash)

import {$} from 'utils'
import Sprite from 'Sprite'
window.canvas = $('canvas')
window.ctx = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576
ctx.fillRect(0,0,canvas.width,canvas.height)


const player = new Sprite({
  position:{
    x:0,
    y:0
  },
  velcoity:{
    y:10,
    x:0
  }
})

const enemy = new Sprite({
  position:{
    x:400,
    y:100
  }
})

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}

function animate(){
  ctx.fillStyle = 'black'
  ctx.fillRect(0,0,canvas.width,canvas.height)
  player.update()
  enemy.update()
  player.velcoity.x = 0
  if (keys.a.pressed && player.lastKey === 'a') {
    player.velcoity.x = -5
  } else if (keys.d.pressed && player.lastKey === 'd') {
    player.velcoity.x = 5
  } 


  window.requestAnimationFrame(animate)
}


animate()


window.addEventListener('keydown',(event)=>{
  switch (event.key) {
    case 'd':
      keys.d.pressed = true
      player.lastKey = 'd'
      break
    case 'a':
      keys.a.pressed = true
      player.lastKey = 'a'
      break
    case 'w':
      player.velcoity.y = -10
      break
  }
})

window.addEventListener('keyup',(event)=>{
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
  }
})
