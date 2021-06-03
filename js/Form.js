class Form{
    constructor(){

    }
 display(){
     var title = createElement("h2");
     title.html("CAR RACING");
     title.position(130,0);


     // creating inputs
     var input = createInput("Name");
     var button = createButton("Play");
     var greeting = createElement("h3");
     input.position(130,160);
     button.position(250,200);

    //creating mouse pressed function
    button.mousePressed(function(){
         input.hide();
         button.hide();
         var name = input.value();
         playerCount = playerCount + 1;
         player.update(name);
         player.updateCount(playerCount);
         greeting.html("HELLO"+name);
         greeting.position(130,160);
     });
 }   
 
}