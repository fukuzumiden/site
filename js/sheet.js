function setup() {
    let margin = 0;
    let canvas = createCanvas(windowWidth, windowHeight*0.8);
    canvas.parent('canvas');

    textFont("'Yu Mincho Demibold', YuMincho, 'Hiragino Mincho ProN', serif");
    textSize(20);
    textAlign(LEFT, TOP);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight*0.8);
}
  
function draw() {
    background(0,0,0,0);
    const ctx = canvas.getContext("2d");
    stroke(100,100,100);
    strokeWeight(1);
    strokeJoin(ROUND);
    ctx.setLineDash([10, 4]);
    let y = 0;
    for (var i=0; i<100; i++) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(windowWidth, y);
        ctx.stroke();
        y = y + 12*3;
    }
    let x = 0;
    for (var i=0; i<100; i++) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, windowHeight);
        ctx.stroke();
        x = x + 12*3;
    }

    stroke(0,0,0);
    fill(50,50,50);
    for (var i=0; i<20; i++) {
        strokeWeight(1+random());
        text("ふ",(12*3*int(random(1,60))+7.8),(12*3*int(random(1,30))+7.8));
        strokeWeight(1+random());
        text("く",(12*3*int(random(1,60))+7.8),(12*3*int(random(1,30))+7.8));
        strokeWeight(1+random());
        text("ず",(12*3*int(random(1,60))+7.8),(12*3*int(random(1,30))+7.8));
        strokeWeight(1+random());
        text("み",(12*3*int(random(1,60))+7.8),(12*3*int(random(1,30))+7.8));
        strokeWeight(1+random());
        text("で",(12*3*int(random(1,60))+7.8),(12*3*int(random(1,30))+7.8));
        strokeWeight(1+random());
        text("ん",(12*3*int(random(1,60))+7.8),(12*3*int(random(1,30))+7.8));
        if(i<2){
            strokeWeight(1+random());
            text("福",(12*3*int(random(2,60))+7.8),(12*3*int(random(2,30))+7.8));
            strokeWeight(1+random());
            text("住",(12*3*int(random(2,60))+7.8),(12*3*int(random(2,30))+7.8));
            strokeWeight(1+random(0,0.3));
            text("電",(12*3*int(random(2,60))+7.8),(12*3*int(random(2,30))+7.8));
        }
    }
    noLoop();
}

