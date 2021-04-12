var player,game,foarm;
var gameState=0,playerCount=0;
var jet1,jet2,jetimg,skyimg,jet6;
var jets=[],allPlayers,ufoimg,line,waves,sym,wave1,wave2,wave3,wave4,wave5,l1,l2,l3,l4,l5,uf,uf2,uf3,uf4,uf5;
var bulletimg,bullet,bullet2,bullet3,bullet4,bullet5,bulletGroup,bullet2Group,bullet3Group,bullet4Group,bullet5Group;
var starter,earth,wave1ufoGroup,wave1ufo2Group,wave1ufo3Group,wave1ufo4Group,wave1ufo5Group,ufor,ufo2r,ufo3r,ufo4r,ufo5r;
var ufor1,ufo2r1,ufo3r1,ufo4r1,ufo5r1,ufor2,ufo2r2,ufo3r2,ufo4r2,ufo5r2,ufo,ufo2,ufo3,ufo4,ufo5;
var bulletu,bulletu2,bulletu3,bulletu4,bulletu5,bulletv,bulletv2,bulletv3,bulletv4,bulletv5,bulletz,bulletz2,bulletz3,bulletz4,bulletz5;
var bulletuGroup,bulletu2Group,bulletu3Group,bulletu4Group,bulletu5Group,bulletvGroup,bulletv2Group,bulletv3Group,bulletv4Group,bulletv5Group;
var bulletzGroup,bulletz2Group,bulletz3Group,bulletz4Group,bulletz5Group

function preload(){
skyimg=loadImage("sky.png")
jetimg=loadImage("jet.jpg")
ufoimg=loadImage("ufo.png")
bulletimg=loadImage("bullet.png")
bulletGroup=new Group()
bullet2Group=new Group()
bullet3Group=new Group()
bullet4Group=new Group()
bullet5Group=new Group()

bulletuGroup=new Group()
bulletu2Group=new Group()
bulletu3Group=new Group()
bulletu4Group=new Group()
bulletu5Group=new Group()

bulletvGroup=new Group()
bulletv2Group=new Group()
bulletv3Group=new Group()
bulletv4Group=new Group()
bulletv5Group=new Group()

bulletzGroup=new Group()
bulletz2Group=new Group()
bulletz3Group=new Group()
bulletz4Group=new Group()
bulletz5Group=new Group()

wave1ufoGroup=new Group()
wave1ufo2Group=new Group()
wave1ufo3Group=new Group()
wave1ufo4Group=new Group()
wave1ufo5Group=new Group()
}

function setup() {
  database=firebase.database() 
  angleMode(DEGREES)
  createCanvas(displayWidth,displayHeight);

 earth=createSprite(displayWidth/2+100,displayHeight,500,200) 

 ufor=createSprite(displayWidth/2-100,displayHeight/2-700,50,50)
 ufor.addImage(ufoimg)
 ufor.scale=0.3
 
 ufo2r=createSprite(displayWidth/2,displayHeight/2-700,50,50)
 ufo2r.addImage(ufoimg)
 ufo2r.scale=0.3
 
 ufo3r=createSprite(displayWidth/2+100,displayHeight/2-700,50,50)
 ufo3r.addImage(ufoimg)
 ufo3r.scale=0.3
 
 ufo4r=createSprite(displayWidth/2+200,displayHeight/2-700,50,50)
 ufo4r.addImage(ufoimg)
 ufo4r.scale=0.3
 
 ufo5r=createSprite(displayWidth/2+300,displayHeight/2-700,50,50)
 ufo5r.addImage(ufoimg)
 ufo5r.scale=0.3


 

 ufo=createSprite(displayWidth/2-100,displayHeight/2-900,50,50)
 ufo.addImage(ufoimg)
 ufo.scale=0.3
 
 ufo2=createSprite(displayWidth/2,displayHeight/2-900,50,50)
 ufo2.addImage(ufoimg)
 ufo2.scale=0.3
 
  ufo3=createSprite(displayWidth/2+100,displayHeight/2-900,50,50)
 ufo3.addImage(ufoimg)
 ufo3.scale=0.3
 
  ufo4=createSprite(displayWidth/2+200,displayHeight/2-900,50,50)
 ufo4.addImage(ufoimg)
 ufo4.scale=0.3
 
  ufo5=createSprite(displayWidth/2+300,displayHeight/2-900,50,50)
 ufo5.addImage(ufoimg)
 ufo5.scale=0.3



 ufor1=createSprite(displayWidth/2-100,displayHeight/2-1100,50,50)
 ufor1.addImage(ufoimg)
 ufor1.scale=0.3
 
 ufo2r1=createSprite(displayWidth/2,displayHeight/2-1100,50,50)
 ufo2r1.addImage(ufoimg)
 ufo2r1.scale=0.3
 
 ufo3r1=createSprite(displayWidth/2+100,displayHeight/2-1100,50,50)
 ufo3r1.addImage(ufoimg)
 ufo3r1.scale=0.3
 
 ufo4r1=createSprite(displayWidth/2+200,displayHeight/2-1100,50,50)
 ufo4r1.addImage(ufoimg)
 ufo4r1.scale=0.3
 
 ufo5r1=createSprite(displayWidth/2+300,displayHeight/2-1100,50,50)
 ufo5r1.addImage(ufoimg)
 ufo5r1.scale=0.3



 ufor2=createSprite(displayWidth/2-100,displayHeight/2-1300,50,50)
 ufor2.addImage(ufoimg)
 ufor2.scale=0.3
 
 ufo2r2=createSprite(displayWidth/2,displayHeight/2-1300,50,50)
 ufo2r2.addImage(ufoimg)
 ufo2r2.scale=0.3
 
 ufo3r2=createSprite(displayWidth/2+100,displayHeight/2-1300,50,50)
 ufo3r2.addImage(ufoimg)
 ufo3r2.scale=0.3
 
 ufo4r2=createSprite(displayWidth/2+200,displayHeight/2-1300,50,50)
 ufo4r2.addImage(ufoimg)
 ufo4r2.scale=0.3
 
 ufo5r2=createSprite(displayWidth/2+300,displayHeight/2-1300,50,50)
 ufo5r2.addImage(ufoimg)
 ufo5r2.scale=0.3



l1=createSprite(displayWidth/2-565,displayHeight/2-320,2,20)
l2=createSprite(displayWidth/2-485,displayHeight/2-320,2,20)
l3=createSprite(displayWidth/2-397,displayHeight/2-320,2,20)
l4=createSprite(displayWidth/2-317,displayHeight/2-320,2,20)
l5=createSprite(displayWidth/2-230,displayHeight/2-320,2,20)


waves=createSprite(displayWidth/2-395,displayHeight/2-300,displayWidth/2-350,10)
waves.shapeColor="blue"

sym=createSprite(displayWidth/2-570,displayHeight/2-300,25,25)
sym.addImage(ufoimg)
sym.scale=0.2 
sym.velocityX=0.13

starter=createSprite(sym.position.x-2,sym.position.y-20,10,0.1)
starter.velocityX=0.13
  game=new Game()
game.start()
game.gameState()
player.wave()
}

function draw() {
  line=createSprite(displayWidth/2-565,displayHeight/2-300,10,10)
line.shapeColor="red"
line.velocityX=0.13

background(1000);  
sym.depth=line.depth+1

if(ufor.isTouching(earth)){
  ufor.destroy()
}
if(ufo2r.isTouching(earth)){
  ufo2r.destroy()
}
if(ufo3r.isTouching(earth)){
  ufo3r.destroy()
}
if(ufo4r.isTouching(earth)){
  ufo4r.destroy()
}
if(ufo5r.isTouching(earth)){
  ufo5r.destroy()
}
if(ufo.isTouching(earth)){
  ufo.destroy()

}
if(ufo2.isTouching(earth)){
  ufo2.destroy()

}
if(ufo3.isTouching(earth)){
  ufo3.destroy()

}
if(ufo4.isTouching(earth)){
  ufo4.destroy()

}
if(ufo5.isTouching(earth)){
  ufo5.destroy()

}
if(ufor1.isTouching(earth)){
  ufor1.destroy()

}
if(ufo2r1.isTouching(earth)){
  ufo2r1.destroy()

}
if(ufo3r1.isTouching(earth)){
  ufo3r1.destroy()

}
if(ufo4r1.isTouching(earth)){
  ufo4r1.destroy()

}
if(ufo5r1.isTouching(earth)){
  ufo5r1.destroy()

}
if(ufor2.isTouching(earth)){
  ufor2.destroy()

}
if(ufo2r2.isTouching(earth)){
  ufo2r2.destroy()

}
if(ufo3r2.isTouching(earth)){
  ufo3r2.destroy()

}
if(ufo4r2.isTouching(earth)){
  ufo4r2.destroy()

}
if(ufo5r2.isTouching(earth)){
  ufo5r2.destroy()

}
if(player.state===1){
  if(frameCount%100===0){
   var ufo1wave1=createSprite(displayWidth/2-100,displayHeight/2-500)
   ufo1wave1.addImage(ufoimg)
   ufo1wave1.velocityY=+2
   ufo1wave1.scale=0.3
   
   var ufo2wave1=createSprite(displayWidth/2,displayHeight/2-500)
   ufo2wave1.addImage(ufoimg)
   ufo2wave1.velocityY=+2
   ufo2wave1.scale=0.3
   
   var ufo3wave1=createSprite(displayWidth/2+100,displayHeight/2-500)
   ufo3wave1.addImage(ufoimg)
   ufo3wave1.velocityY=+2
   ufo3wave1.scale=0.3
  
   var ufo4wave1=createSprite(displayWidth/2+200,displayHeight/2-500)
   ufo4wave1.addImage(ufoimg)
   ufo4wave1.velocityY=+2
   ufo4wave1.scale=0.3

   var ufo5wave1=createSprite(displayWidth/2+300,displayHeight/2-500)
   ufo5wave1.addImage(ufoimg)
   ufo5wave1.velocityY=+2
   ufo5wave1.scale=0.3

wave1ufoGroup.add(ufo1wave1)
wave1ufo2Group.add(ufo2wave1)
wave1ufo3Group.add(ufo3wave1)
wave1ufo4Group.add(ufo4wave1)
wave1ufo5Group.add(ufo5wave1)

}




}



if(player.state===2){

  ufor2.velocityY=+2

  ufo2r2.velocityY=+2

  ufo3r2.velocityY=+2

  ufo4r2.velocityY=+2

  ufo5r2.velocityY=+2

  ufor1.velocityY=+2

  ufo2r1.velocityY=+2

  ufo3r1.velocityY=+2

  ufo4r1.velocityY=+2

  ufo5r1.velocityY=+2
 

  ufor.velocityY=+2

  ufo2r.velocityY=+2

  ufo3r.velocityY=+2

  ufo4r.velocityY=+2

  ufo5r.velocityY=+2
 


  ufo.velocityY=+2

  ufo2.velocityY=+2

  ufo3.velocityY=+2

  ufo4.velocityY=+2

  ufo5.velocityY=+2

  if(frameCount%200===0){

      bullet=createSprite(displayWidth/2-100,ufo.position.y,5,40)
      bullet.velocityY=+5
      bullet.addImage(bulletimg)
      bullet.scale=-0.1
      

      bullet2=createSprite(displayWidth/2,ufo2.position.y,5,40)
      bullet2.velocityY=+5
      bullet2.addImage(bulletimg)
      bullet2.scale=-0.1
     


      bullet3=createSprite(displayWidth/2+100,ufo3.position.y,5,40)
      bullet3.velocityY=+5
      bullet3.addImage(bulletimg)
      bullet3.scale=-0.1
   


      bullet4=createSprite(displayWidth/2+200,ufo4.position.y,5,40)
      bullet4.velocityY=+5
      bullet4.addImage(bulletimg)
      bullet4.scale=-0.1
      


      bullet5=createSprite(displayWidth/2+300,ufo5.position.y,5,40)
      bullet5.velocityY=+5
      bullet5.addImage(bulletimg)
      bullet5.scale=-0.1

      bulletu=createSprite(displayWidth/2-100,ufor.position.y,5,40)
      bulletu.velocityY=+5
      bulletu.addImage(bulletimg)
      bulletu.scale=-0.1
      

      bulletu2=createSprite(displayWidth/2,ufo2r.position.y,5,40)
      bulletu2.velocityY=+5
      bulletu2.addImage(bulletimg)
      bulletu2.scale=-0.1
     


      bulletu3=createSprite(displayWidth/2+100,ufo3r.position.y,5,40)
      bulletu3.velocityY=+5
      bulletu3.addImage(bulletimg)
      bulletu3.scale=-0.1
   


      bulletu4=createSprite(displayWidth/2+200,ufo4r.position.y,5,40)
      bulletu4.velocityY=+5
      bulletu4.addImage(bulletimg)
      bulletu4.scale=-0.1
      


      bulletu5=createSprite(displayWidth/2+300,ufo5r.position.y,5,40)
      bulletu5.velocityY=+5
      bulletu5.addImage(bulletimg)
      bulletu5.scale=-0.1


      bulletv=createSprite(displayWidth/2-100,ufor1.position.y,5,40)
      bulletv.velocityY=+5
      bulletv.addImage(bulletimg)
      bulletv.scale=-0.1


      bulletv2=createSprite(displayWidth/2,ufo2r1.position.y,5,40)
      bulletv2.velocityY=+5
      bulletv2.addImage(bulletimg)
      bulletv2.scale=-0.1
     


      bulletv3=createSprite(displayWidth/2+100,ufo3r1.position.y,5,40)
      bulletv3.velocityY=+5
      bulletv3.addImage(bulletimg)
      bulletv3.scale=-0.1
   


      bulletv4=createSprite(displayWidth/2+200,ufo4r1.position.y,5,40)
      bulletv4.velocityY=+5
      bulletv4.addImage(bulletimg)
      bulletv4.scale=-0.1
      


      bulletv5=createSprite(displayWidth/2+300,ufo5r1.position.y,5,40)
      bulletv5.velocityY=+5
      bulletv5.addImage(bulletimg)
      bulletv5.scale=-0.1


      bulletz=createSprite(displayWidth/2-100,ufor2.position.y,5,40)
      bulletz.velocityY=+5
      bulletz.addImage(bulletimg)
      bulletz.scale=-0.1


      bulletz2=createSprite(displayWidth/2,ufo2r2.position.y,5,40)
      bulletz2.velocityY=+5
      bulletz2.addImage(bulletimg)
      bulletz2.scale=-0.1
     


      bulletz3=createSprite(displayWidth/2+100,ufo3r2.position.y,5,40)
      bulletz3.velocityY=+5
      bulletz3.addImage(bulletimg)
      bulletz3.scale=-0.1
   


      bulletz4=createSprite(displayWidth/2+200,ufo4r2.position.y,5,40)
      bulletz4.velocityY=+5
      bulletz4.addImage(bulletimg)
      bulletz4.scale=-0.1
      


      bulletz5=createSprite(displayWidth/2+300,ufo5r2.position.y,5,40)
      bulletz5.velocityY=+5
      bulletz5.addImage(bulletimg)
      bulletz5.scale=-0.1


     
      bulletGroup.add(bullet)
      bullet2Group.add(bullet2)
      bullet3Group.add(bullet3)
      bullet4Group.add(bullet4)
      bullet5Group.add(bullet5)

      bulletuGroup.add(bulletu)
      bulletu2Group.add(bulletu2)
      bulletu3Group.add(bulletu3)
      bulletu4Group.add(bulletu4)
      bulletu5Group.add(bulletu5)
   
      bulletvGroup.add(bulletv)
      bulletv2Group.add(bulletv2)
      bulletv3Group.add(bulletv3)
      bulletv4Group.add(bulletv4)
      bulletv5Group.add(bulletv5)
   
      bulletzGroup.add(bulletz)
      bulletz2Group.add(bulletz2)
      bulletz3Group.add(bulletz3)
      bulletz4Group.add(bulletz4)
      bulletz5Group.add(bulletz5)

    }
  

}



for(var a=0;a<wave1ufoGroup.length;a++){
  if(wave1ufoGroup.get(a).isTouching(earth)){
    wave1ufoGroup.get(a).destroy()

 }
}

for(var o=0;o<wave1ufo2Group.length;o++){
  if(wave1ufo2Group.get(o).isTouching(earth)){
    wave1ufo2Group.get(o).destroy()


 }
}

for(var h=0;h<wave1ufo3Group.length;h++){
  if(wave1ufo3Group.get(h).isTouching(earth)){
    wave1ufo3Group.get(h).destroy()


 }
}
for(var n=0;n<wave1ufo4Group.length;n++){
  if(wave1ufo4Group.get(n).isTouching(earth)){
    wave1ufo4Group.get(n).destroy()


 }
}
for(var l=0;l<wave1ufo5Group.length;l++){
  if(wave1ufo5Group.get(l).isTouching(earth)){
    wave1ufo5Group.get(l).destroy()


 }
}


for(var i=0;i<bulletGroup.length;i++){
  if(bulletGroup.get(i).isTouching(jets)){
      bulletGroup.get(i).destroy()
      player.health=player.health-1
  player.players()
  
  }
}
for(var p=0;p<bullet2Group.length;p++){
  if(bullet2Group.get(p).isTouching(jets)){
      bullet2Group.get(p).destroy()
      player.health=player.health-1
  player.players()
  
  }
} 
for(var t=0;t<bullet3Group.length;t++){
  if(bullet3Group.get(t).isTouching(jets)){
      bullet3Group.get(t).destroy()
      player.health=player.health-1
  player.players()
  
  }
}

for(var y=0;y<bullet4Group.length;y++){
  if(bullet4Group.get(y).isTouching(jets)){
      bullet4Group.get(y).destroy()
      player.health=player.health-1
  player.players()
  
  }
}


for(var w=0;w<bullet5Group.length;w++){
  if(bullet5Group.get(w).isTouching(jets)){
      bullet5Group.get(w).destroy()
      player.health=player.health-1
  player.players()
  
  }
  
}

for(var q=0;q<bulletGroup.length;q++){
  if(bulletGroup.get(q).isTouching(earth)){
      bulletGroup.get(q).destroy()


  }
}
for(var x=0;x<bullet2Group.length;x++){
  if(bullet2Group.get(x).isTouching(earth)){
      bullet2Group.get(x).destroy()
     
  
  }
} 
for(var ai=0;ai<bullet3Group.length;ai++){
  if(bullet3Group.get(ai).isTouching(earth)){
      bullet3Group.get(ai).destroy()
     
  
  }
}

for(var yq=0;yq<bullet4Group.length;yq++){
  if(bullet4Group.get(yq).isTouching(earth)){
      bullet4Group.get(yq).destroy()
    
  
  }
}


for(var tw=0;tw<bullet5Group.length;tw++){
  if(bullet5Group.get(tw).isTouching(earth)){
      bullet5Group.get(tw).destroy()
      
  
  }
}

for(var aw=0;aw<bulletuGroup.length;aw++){
  if(bulletuGroup.get(aw).isTouching(earth)){
      bulletuGroup.get(aw).destroy()
      
  
  }
}

for(var to=0;to<bulletu2Group.length;to++){
  if(bulletu2Group.get(to).isTouching(earth)){
      bulletu2Group.get(to).destroy()
      
  
  }
}

for(var twa=0;twa<bulletu3Group.length;twa++){
  if(bulletu3Group.get(twa).isTouching(earth)){
      bulletu3Group.get(twa).destroy()
      
  
  }
}

for(var twy=0;twy<bulletu4Group.length;twy++){
  if(bulletu4Group.get(twy).isTouching(earth)){
      bulletu4Group.get(twy).destroy()
      
  
  }
}

for(var twp=0;twp<bulletu5Group.length;twp++){
  if(bulletu5Group.get(twp).isTouching(earth)){
      bulletu5Group.get(twp).destroy()
      
  
  }
}


for(var awb=0;awb<bulletvGroup.length;awb++){
  if(bulletvGroup.get(awb).isTouching(earth)){
      bulletvGroup.get(awb).destroy()
      
  
  }
}

for(var tob=0;tob<bulletv2Group.length;tob++){
  if(bulletv2Group.get(tob).isTouching(earth)){
      bulletv2Group.get(tob).destroy()
      
  
  }
}

for(var twab=0;twab<bulletv3Group.length;twab++){
  if(bulletv3Group.get(twab).isTouching(earth)){
      bulletv3Group.get(twab).destroy()
      
  
  }
}

for(var twyb=0;twyb<bulletv4Group.length;twyb++){
  if(bulletv4Group.get(twyb).isTouching(earth)){
      bulletv4Group.get(twyb).destroy()
      
  
  }
}

for(var twpb=0;twpb<bulletv5Group.length;twpb++){
  if(bulletv5Group.get(twpb).isTouching(earth)){
      bulletv5Group.get(twpb).destroy()
      
  
  }
}



for(var awm=0;awm<bulletzGroup.length;awm++){
  if(bulletzGroup.get(awm).isTouching(earth)){
      bulletzGroup.get(awm).destroy()
      
  
  }
}

for(var tom=0;tom<bulletz2Group.length;tom++){
  if(bulletz2Group.get(tom).isTouching(earth)){
      bulletz2Group.get(tom).destroy()
      
  
  }
}

for(var twam=0;twam<bulletz3Group.length;twam++){
  if(bulletz3Group.get(twam).isTouching(earth)){
      bulletz3Group.get(twam).destroy()
      
  
  }
}

for(var twym=0;twym<bulletz4Group.length;twym++){
  if(bulletz4Group.get(twym).isTouching(earth)){
      bulletz4Group.get(twym).destroy()
      
  
  }
}

for(var twpm=0;twpm<bulletz5Group.length;twpm++){
  if(bulletz5Group.get(twpm).isTouching(earth)){
      bulletz5Group.get(twpm).destroy()
      
  
  }
}


if(playerCount===2){
game.updateState(1)

 }
 if(gameState===1){
   
game.play()

if(starter.isTouching(l1)){
player.state=1
player.updatewave()
}

if(starter.isTouching(l2)){
  player.state=2
  player.updatewave()

}
if(starter.isTouching(l3)){
  player.state=3
  player.updatewave()

}
if(starter.isTouching(l4)){
  player.state=2
  player.updatewave()

} 
if(starter.isTouching(l5)){
  player.state=5
  player.updatewave()

}
}
 
}                            
