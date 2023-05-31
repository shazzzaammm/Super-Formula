var m = 5;
var n1 = 2;
var n2 = 7;
var n3 = 7;
var a = 1;
var b = 1;
var radius = 50;
var mSlider;
var n1Slider;
var n2Slider;
var n3Slider;
function superShape(theta) {
  var part1 = (1 / a) * cos((theta * m) / 4);
  part1 = abs(part1);
  part1 = pow(part1, n2);

  var part2 = (1 / b) * sin((theta * m) / 4);
  part2 = abs(part2);
  part2 = pow(part2, n3);

  var part3 = n1 * sqrt(part1 + part2);
  if (part3 === 0) {
    return 0;
  }
  return 1 / part3;
}

function setup() {
  createCanvas(window.innerWidth, (window.innerHeight * 13) / 16);
  mSlider = createSlider(0.1, 25, 5, 0.01);
  n1Slider = createSlider(0.1, 25, 2, 0.01);
  n2Slider = createSlider(0.1, 25, 7, 0.01);
  n3Slider = createSlider(0.1, 25, 7, 0.01);
}

function draw() {
  //start
  translate(width / 2, height / 2);
  background(22);
  noFill();
  stroke(255);
  //update
  m = mSlider.value();
  n1 = n1Slider.value();
  n2 = n2Slider.value();
  n3 = n3Slider.value();
  //calc
  beginShape();
  for (var angle = 0; angle < TWO_PI; angle += 0.01) {
    var r = superShape(angle);
    var x = radius * r * cos(angle);
    var y = radius * r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
}
