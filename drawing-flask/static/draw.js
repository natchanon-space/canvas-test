document.addEventListener('DOMContentLoaded', () => {

    // mnist [white] 0 - 1 [black]
    // rgba [white] all 255 - all 0 [black]
    var mnist_arr = [];

    // input canvas
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d")

    // mnist canvas
    const tempCanvas = document.getElementById("tempCanvas");
    const tempContext = tempCanvas.getContext("2d");

    fillWhite();

    // start draw section //
    let isDrawing = false;
    let x = 0;
    let y = 0;

    canvas.addEventListener("mousedown", e => {
        isDrawing = true;
        x = e.offsetX;
        y = e.offsetY;
    });

    canvas.addEventListener("mousemove", e => {
        if (isDrawing) {
            draw(context, x, y);
            x = e.offsetX;
            y = e.offsetY;
        }
    });

    // canvas -> document 
    // [bug fixed "กดเม้าส์ค้างไปนอกกรอบ canvas พอปล่อยแล้วเอากลับมาแล้วไม่หยุดวาด"]
    document.addEventListener("mouseup", () => {
        isDrawing = false;
        x = 0;
        y = 0;
    })

    function draw(context, x1, y1) {
        context.beginPath();
        context.fillStyle = "black";
        context.ellipse(x1, y1, 10, 10, Math.PI / 4, 0, 2 * Math.PI);
        context.fill();
        context.closePath();
    }
    // end draw section //

    document.getElementById("cls").onclick = () => {
        fillWhite();
    };

    // [idea] resizing by canvas -> img -> tempCanvas -> imageData.data
    // issue need two click on submit to create true imageData.data
    // [bug fixed "how iy work?"]
    document.getElementById("submit").addEventListener("click", () => {

        var data;
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = canvas.toDataURL("image/png");

        img.addEventListener('load', () => {
            tempContext.drawImage(img, 0, 0, canvas.width, canvas.height, 0, 0, tempCanvas.width, tempCanvas.height);
            data = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
            console.log(data.data);
        });

        /*
        console.log("test");
        console.log(data);
        /*
        
        const img2 = new Image();
        img2.crossOrigin = "Anonymous";
        img2.src = tempCanvas.toDataURL("image/png");

        //let data = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        /*
        document.getElementById("result").innerHTML = "";
        document.getElementById("result").append(img2);
        */  
    });

    // for clear canvas
    function fillWhite() {
        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
        tempContext.fillStyle = "white";
        tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    }

});