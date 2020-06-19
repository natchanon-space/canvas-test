document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');

    context.fillStyle = "red";
    context.fillRect(0, 0, 100, 100);
    context.fillStyle = "blue"
    context.fillRect(10,10,90,90);

    const img = new Image();
    img.src = canvas.toDataURL("image/jpeg");

    img.width = 10;
    img.height = 10;

    document.getElementById("result").append(img);

    console.log(img.data);
});