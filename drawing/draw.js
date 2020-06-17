document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");

    let x = 0;
    let y = 0;
    let isDrawing = false;

    // e.offsetX, e.offsetY => mouseEvent interface provides the offset in (x, y) coordinate
    canvas.addEventListener('mousedown', e => {
        isDrawing = true;
        x = e.offsetX;
        y = e.offsetY;
    });

    canvas.addEventListener('mousemove', e => {
        if (isDrawing) {
            draw(context, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        }
    });

    document.addEventListener('mouseup', e => {
        isDrawing = false;
        x = 0;
        y = 0;
    });

    document.getElementById('clr').addEventListener('click', () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    //draw function
    function draw(context, x1, y1, x2, y2) {
        context.beginPath();
        context.strokeStyle = 'black';
        context.lineWidth = 5;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
    }

});





