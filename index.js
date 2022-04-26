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


function animate(){
  ctx.fillStyle = 'black'
  ctx.fillRect(0,0,canvas.width,canvas.height)
  player.update()
  enemy.update()
  window.requestAnimationFrame(animate)
}


animate()

