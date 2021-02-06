var canvas;
var music;
var redSurface,blueSurface,greenSurface,yellowSurface;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
    
}


function setup(){
    canvas = createCanvas(800,600);

    //surface
    redSurface = createSprite(107,558,180,50);
    redSurface.shapeColor="red";

    blueSurface = createSprite(300,558,180,50);
    blueSurface.shapeColor="blue";

    greenSurface = createSprite(493,558,180,50);
    greenSurface.shapeColor="green";

    
    yellowSurface = createSprite(686,558,180,50);
    yellowSurface.shapeColor="yellow";

//box
    box = createSprite(random(20,750),200,50,50);
    box.shapeColor="white";
    box.velocityY=6;

   edges= createEdgeSprites();
   
    


}

function draw() {
    background(rgb(169,169,169));

   
    box.bounceOff(edges);

// if box touches surface
    if(redSurface.isTouching(box) && box.bounceOff(redSurface)){
        box.shapeColor="red";
        box.velocityY=0;
        music.stop();
    }
    if(blueSurface.isTouching(box) && box.bounceOff(blueSurface)){
        box.shapeColor="blue";
    }
    if(greenSurface.isTouching(box) && box.bounceOff(greenSurface)){
        box.shapeColor="green";
    }
    if(yellowSurface.isTouching(box) && box.bounceOff(yellowSurface)){
        box.shapeColor="yellow";
        music.play();
    }


    


    
    drawSprites();
}
