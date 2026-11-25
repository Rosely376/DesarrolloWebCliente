const CANVAS = document.getElementById("game-CANVAS");
const CTX = CANVAS.getContext("2d");
let lastTimestamp = null;

class Ball {
  asset;
  CTX;
  size = { w: undefined, h: undefined };
  pos = { x: 50, y: 50 };
  vel = { x: 150, y: 150 };
  constructor(url, CTX) {
    this.asset = new Image();
    this.asset.src = url;
    this.CTX = CTX;
  }
  async preload() {
    await this.asset.decode();
    if (this.size.w === undefined) { 
      this.size.w = this.asset.width;
      this.size.h = this.asset.height;
    }
  }
  get hitbox() {
    return {
      left: this.pos.x - this.size.w / 2,
      right: this.pos.x + this.size.w / 2,
      top: this.pos.y - this.size.h / 2,
      bottom: this.pos.y + this.size.h / 2,
    };
  }
  draw() {
    this.CTX.drawImage(
      this.asset,
      this.pos.x - this.size.w / 2,
      this.pos.y - this.size.h / 2,
    );
  }
  move(dt) {
    this.pos.x += this.vel.x * dt;
    this.pos.y += this.vel.y * dt;
  }
  onCollide({ x, y }) {
    if (x) {
      this.vel.x = -this.vel.x;
    }
    if (y) {
      this.vel.y = -this.vel.y;
    }
  }
}

const ball = new Ball(
  "./recursos/ball.png",
  CTX,
);

Promise.all([ball].map((obj) => obj.preload())).then(() =>
  requestAnimationFrame(update),
);

function update(timestamp) {
  const dt = lastTimestamp === null ? 0 : (timestamp - lastTimestamp) / 1000;
  lastTimestamp = timestamp;
  ball.move(dt);
  handleWallCollisions(ball, CANVAS.width, CANVAS.height);

  CTX.fillStyle = "#eeeeee";
  CTX.fillRect(0, 0, CANVAS.width, CANVAS.height);
  ball.draw();

  requestAnimationFrame(update);
}

function handleWallCollisions(object, width, height) {
  const hitbox = object.hitbox;
  const hittingLeftBoundary = hitbox.left <= 0 && object.vel.x < 0;
  const hittingRightBoundary = hitbox.right >= width && object.vel.x > 0;
  const hittingTopBoundary = hitbox.top <= 0 && object.vel.y < 0;
  const hittingBottomBoundary = hitbox.bottom >= height && object.vel.y > 0;

  const x = hittingLeftBoundary || hittingRightBoundary;
  const y = hittingTopBoundary || hittingBottomBoundary;
  if (x || y) { 
    object.onCollide({ x, y });
  }
}
