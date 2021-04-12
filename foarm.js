class Foarm{

constructor(){

}


display(){

this.game=createElement("h2")   
this.game.html("Welcome to online gun fighting jet game")
this.game.position(displayWidth/2,10)

this.name=createInput("name")
this.name.position(displayWidth/2,displayHeight/2)

this.play=createButton("play")
this.play.position(displayWidth/2-80,displayHeight/2)

this.play.mousePressed(()=>{
    
playerCount+=1
player.updateCount(playerCount)
player.index=playerCount;

player.name=this.name.value()
player.players()

this.game.hide()
this.name.hide()
this.play.hide()

this.wait=createElement("h2")
this.wait.html("Waiting for 5 players")
this.wait.position(displayHeight/2,displayHeight/2)

this.greeting=createElement("h2")
this.greeting.html("hello "+player.name)
this.greeting.position(displayWidth/2-200,displayHeight/2-200)
})


}

hide(){
this.greeting.hide()
this.wait.hide()

}


}