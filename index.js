
function draw(data) {
    const canvas = document.getElementById('websocketd');

    if (!canvas.getContext){
        console.error('Canvas is not supported in this browser!');
        return;
    }

    const ctx = canvas.getContext('2d');
    const width = ctx.canvas.clientWidth;
    const height = ctx.canvas.clientHeight;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#000000";

    let x = 0;
    let y = 1;
    const dataArr = data.split('');
    for (let i = 0; i < dataArr.length; i++) {
        x++;

        if (dataArr[i] === '1') {
            ctx.fillRect(x, y, 1, 1);
        }

        if (x >= width) {
            x = 0;
            y++;
        }
        if (y > height) {
            break;
        }
    }

}

// setup websocket with callbacks
const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = function(event) {
    if (!event && !event.data) {
        console.error('Message not found!');
        return;
    }

    draw(event.data);
};
