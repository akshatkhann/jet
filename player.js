class Player{

constructor(){
this.index=null
this.name=null
this.distance=1000
this.health=3
this.rank=null
this.dist=500
this.state=null
this.shoot=null
}
playerCount(){
var playerCountRef=database.ref("playerCount")
playerCountRef.on("value",function(data){

    playerCount=data.val()
})

}
updateCount(count){
database.ref("/").update({

playerCount:count

})



}

players(){
var playerinfo=database.ref("players/player"+this.index)
database.ref(playerinfo).set({
name:this.name,
distance:this.distance,
health:this.health,                                                                
rank:this.rank,
dist:this.dist,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
shoot:this.shoot
})

}

static playersinfo(){
var playerInfoRef = database.ref("players");
playerInfoRef.on("value", (data) => {
    
    allPlayers = data.val();
})                                              
}

wave(){
var wave=database.ref("wave")
wave.on("value",function(data){
    
    wave=data.val()
    
})

}
    
updatewave(){
database.ref("/").update({

wave:this.state

})

}




    
}