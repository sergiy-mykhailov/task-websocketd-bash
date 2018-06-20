const WIDTH = 800;
const HEIGHT = 100;

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = WIDTH;
ctx.canvas.height = HEIGHT;

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, WIDTH, HEIGHT);
ctx.fillStyle = "#000000";

let x = 0;
let y = 1;

function draw(data) {
    x++;

    if (data === '1') {
        ctx.fillRect(x, y, 1, 1);
    }

    if (x >= WIDTH) {
        x = 0;
        y++;
    }
}

const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = function(event) {
    draw(event.data);
};

ws.onclose = () => {
    document.getElementById('websocketd').appendChild(canvas);
};