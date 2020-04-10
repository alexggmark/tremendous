export default () => {
  const selectors = {
    canvas: document.querySelector('.canvas'),
  }

  selectors.canvas.height = window.innerHeight;
  selectors.canvas.width = window.innerWidth;
  const c = selectors.canvas.getContext('2d');

  class createShape {
    constructor(x, y, dx, dy, shape) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.shape = shape;
    }

    createVertical = () => {
      c.moveTo(this.x, this.y + 45);
      c.lineTo(this.x + 100, this.y);
      c.lineTo(this.x + 100, this.y - 245);
      c.lineTo(this.x, this.y - 200);
      c.fillStyle = 'blue';
    }

    createHorizontal = () => {
      c.moveTo(this.x, this.y + 90);
      c.lineTo(this.x + 200, this.y);
      c.lineTo(this.x + 200, this.y - 90);
      c.lineTo(this.x, this.y);
      c.fillStyle = 'red';
    }

    draw = () => {
      c.beginPath();
      this.shape === 'vertical' ? this.createVertical() : this.createHorizontal();
      c.fill();
    }

    update = () => {
      if (this.x > selectors.canvas.width || this.x < 0) {
        this.dx = -this.dx;
      }
      if (this.y > selectors.canvas.height || this.y < 0) {
        this.dy = -this.dy;
      }
      this.y += this.dy;
      this.x += this.dx;
      this.draw();
    }
  }

  const shapeArray = [];
  for (let i = 0; i < 10; i++) {
    const x = Math.random() * 1000;
    const y = Math.random() * 1000;
    const dx = (10 * Math.random());
    const dy = (4.5 * Math.random());

    shapeArray.push(new createShape(x, y, dx, dy, 'vertical'));
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, selectors.canvas.width, selectors.canvas.height);
    for (let i = 0; i < 10; i++) {
      shapeArray[i].update();
    }
  }

  animate();
}