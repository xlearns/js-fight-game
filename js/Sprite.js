// 模拟重力
const gravity = 0.2
export default class Sprite{
  constructor({position,width=50,scale=1,height=150,offset={x:0,y:0},velcoity={x:0,y:0}}){
    this.position = position
    this.velcoity = velcoity
    this.width = width
    this.height = height
  }
  draw(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x,this.position.y,this.width,this.height)
  }

  update(){
    this.draw()
    this.position.y += this.velcoity.y
    this.position.x += this.velcoity.x
    if(this.position.y + this.height + this.velcoity.y>=canvas.height){
      this.velcoity.y = 0
    }else{
      this.velcoity.y += gravity
    }
  }
}