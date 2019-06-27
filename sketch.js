function setup() {
  createCanvas(256, 256);
}

function draw() {

    background(255);
    push();
    translate(width * 0.2, height * 0.5);
    for(var i=0; i < random(0, 3); i++){
        var c = color(random(0, 255), random(0, 255), random(0, 255), random(100, 255)); // Define color 'c'
        fill(c); // Use color variable 'c' as fill color
        noStroke();
        circle(random(0, width/2), random(0, height/2), random(0, height/1.5));
        pop();
        push();
    }


    for(var i=0; i < random(0, 3); i++){
        var c = color(random(0, 255), random(0, 255), random(100, 255)); // Define color 'c'
        fill(c); // Use color variable 'c' as fill color
        noStroke();
        quad(random(0, width/2), random(0, height/2), random(0, width/2), random(0, height/2), random(0, width/2), random(0, height/2));
        pop();
        push();

    }

    for(var i=0; i < random(0, 3); i++){
        var c = color(random(0, 255), random(0, 255), random(10, 255), random(100, 255)); // Define color 'c'
        fill(c); // Use color variable 'c' as fill color
        noStroke();
        square(random(0, width/2), random(0, height/2), random(0, width/2), random(0, width/10), random(0, width/10), random(0, width/10), random(0, width/10));
        pop();
        push();
    }

    for(var i=0; i < random(0, 5); i++){
        noFill();
        stroke(0);
        strokeWeight(random(0, 10)); // Thicker
        bezier(random(0, width),random(0, width),random(0, width),random(0, width),random(0, width),random(0, width),random(0, width),random(0, width));
        pop();
        push();
    }

    save('canvas_'+frameCount+'.jpg')
}

function keyReleased() {
    noLoop();
}