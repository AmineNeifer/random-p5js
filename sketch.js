let message = "This is random simple web page!";
let circles = [];

function setup() {
  createCanvas(1000, 600);

  // Create some colorful circles
  for (let i = 0; i < 10; i++) {
    circles.push(
      new Circle(
        random(width),
        random(height),
        random(20, 50),
        color(random(255), random(255), random(255))
      )
    );
  }
}

function draw() {
  background(220);

  // Display the message
  textSize(24);
  fill(255); // White text color
  textAlign(CENTER, CENTER);
  text(message, width / 2, height / 2);

  // Update and display circles
  for (let circle of circles) {
    circle.update();
    circle.display();
  }
}

function mousePressed() {
  // Check if the mouse is over the text
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  if (d < textWidth(message) / 2) {
    // If clicked on the text, make it draggable
    dragging = true;
    offsetX = mouseX - width / 2;
    offsetY = mouseY - height / 2;
  }
}

function mouseReleased() {
  dragging = false;
}

class Circle {
  constructor(x, y, diameter, color) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.color = color;
    this.speedX = random(-2, 2);
    this.speedY = random(-2, 2);
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce off edges
    if (this.x <= 0 || this.x >= width) {
      this.speedX *= -1;
    }
    if (this.y <= 0 || this.y >= height) {
      this.speedY *= -1;
    }
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter);
  }
}
