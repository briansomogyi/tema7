let tableWidth = 1600;
let tableHeight = 800;

let xDraw = tableWidth/2;
let yDraw = tableHeight/2;

function setup() {
    createCanvas(tableWidth, tableHeight);
  }
  
  function draw() {
    background(220);
    drawSun(xDraw,yDraw);
  }

  function drawSun(x,y) {   
    stroke("black");
    fill("white");
    ellipse(x,y,tableWidth,tableHeight);
    fill("red");
    ellipse(x/4+23,y/4+23,20,20);
    fill("white");
    ellipse(x,y,tableWidth/2,tableHeight/2);
    fill("blue");
    ellipse(x/2+80,y/2+80,40,40);
    fill("white");
    ellipse(x,y,tableWidth/4,tableHeight/4);
    fill("yellow");
    ellipse(x-100,y-85,30,30);
    fill("white");
    ellipse(x,y,tableWidth/8,tableHeight/8);
    fill("red");
    ellipse(x-50,y-43,20,20);
    fill("yellow");
    ellipse(x,y,80,80);
    triangle(x-10, y-50, x+10, y-50, x, y-70);
    triangle(x-30, y-20, x-20, y-30, x-35, y-35);
    triangle(x-50, y+10, x-50, y-10, x-70, y);
    triangle(x-30, y+30, x-20, y+20, x-35, y+35);
    triangle(x-10, y+50, x+10, y+50, x, y+70);
    triangle(x+20, y+20, x+30, y+30, x+35, y+35);
    triangle(x+50, y-10, x+50, y+10, x+70, y);
    triangle(x+20, y-30, x+30, y-20, x+35, y-35);
  }