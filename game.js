class Game{

constructor(){

}
gameState(){
var gameStateRef=database.ref("gameState")
gameStateRef.on("value",function(data){

gameState=data.val()


})

}
updateState(state){
database.ref("/").update({

gameState:state

})


}
async start(){
if(gameState===0){
player=new Player()
    var playerCountRef=await database.ref("playerCount").once("value")
if(playerCountRef.exists()){
playerCount=playerCountRef.val()

player.playerCount()
}
foarm=new Foarm()
foarm.display()
}
jet1=createSprite(displayWidth/2,displayHeight/2)
jet1.addImage(jetimg)
jet1.scale=0.4

jet2=createSprite(displayWidth/2,displayHeight/2)
jet2.addImage(jetimg)
jet2.scale=0.4




jets=[jet1,jet2]
}
play(){
    wave1=createElement("h2")
    wave1.html("wave1")
    wave1.position(displayWidth/2-600,displayHeight/2-370)
    
    wave2=createElement("h2")
    wave2.html("wave2")
    wave2.position(displayWidth/2-520,displayHeight/2-370)
    
    wave3=createElement("h2")
    wave3.html("wave3")
    wave3.position(displayWidth/2-430,displayHeight/2-370)
    
    wave4=createElement("h2")
    wave4.html("wave4")
    wave4.position(displayWidth/2-350,displayHeight/2-370)
    
    wave5=createElement("h2")
    wave5.html("wave5")
    wave5.position(displayWidth/2-260,displayHeight/2-370)

    

    


      
    
    
        
   



foarm.hide()

Player.playersinfo()
background(skyimg,displayWidth/2,displayHeight/2,displayWidth,displayHeight)
var x=100
var y=200
var index=0

drawSprites()
for(var plr in allPlayers){
    
index = index+1
x = displayWidth-allPlayers[plr].distance;
y = displayHeight-allPlayers[plr].dist;


jets[index-1].x = x
jets[index-1].y = y 


if(player===player.index){
  
}

}

if(keyIsDown(LEFT_ARROW)&&player.index!==null){
player.distance+=3
player.players()


}
if(keyIsDown(RIGHT_ARROW)&&player.index!==null){
    player.distance-=3
    player.players()
    
    
    }

    if(keyIsDown(UP_ARROW)&&player.index!==null){
        player.dist+=3
        player.players()
        
        
        }
        if(keyIsDown(DOWN_ARROW)&&player.index!==null){
            player.dist-=3
            player.players()
            
            
            }

if(keyIsDown(32)&&player.index!==null){                                                                                                                               




         

     
}    
      
}

}



