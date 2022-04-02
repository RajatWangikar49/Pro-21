var canvas;
var music;
var rect1, rect2, rect3, rect4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    rect1 = createSprite(90, 550, 180, 20);
    rect1.shapeColor = "red"

    rect2 = createSprite(290, 550, 180, 20);
    rect2.shapeColor = "yellow"

    rect3 = createSprite(490, 550, 180, 20);
    rect3.shapeColor = "blue"

    rect4 = createSprite(690, 550, 180, 20);
    rect4.shapeColor = "green"


    //create box sprite and give velocity

    box = createSprite(random(20, 750), 300, 20, 20);
    box.shapeColor = "black"
    box.velocityY = 3;
    box.velocityX = 3;

    createEdgeSprites();

}

function draw() {
    background("grey");
    //create edgeSprite

    edges = createEdgeSprites();
    box.bounceOff(edges);

    if (rect1.isTouching(box) && box.bounceOff(rect1)){
    	box.shapeColor = "red"
    	music.play();
    }

    if (rect2.isTouching(box) && box.bounceOff(rect2)){
    	box.shapeColor = "yellow"
    	box.velocityX = 0;
    	box.velocityY = 0;
    	music.stop();
    }

    if (rect3.isTouching(box) && box.bounceOff(rect3)){
    	box.shapeColor = "blue"
    	music.play();
    }

    if (rect4.isTouching(box) && box.bounceOff(rect4)){
    	box.shapeColor = "green"
    	music.play();
    }

    
    


    drawSprites();
    //add condition to check if box touching surface and make it box
}
