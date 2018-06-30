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

document.getElementById('websocketd').appendChild(canvas);

function draw(data) {
    if (y > HEIGHT) {
        return;
    }

    const strData = ('00000000' + Number.parseInt(data).toString(2));
    const binData = strData.slice(-8).split('');

    for (let i = 0; i < binData.length; i++) {
        x++;

        if (binData[i] === '1') {
            ctx.fillRect(x, y, 1, 1);
        }

        if (x >= WIDTH) {
            x = 0;
            y++;
        }

        if (y > HEIGHT) {
            break;
        }
    }
}

const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = function(event) {
    draw(event.data);
};

ws.onclose = () => {
    // document.getElementById('websocketd').appendChild(canvas);
};