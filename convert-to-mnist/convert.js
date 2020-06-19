document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    
    //on dev
    var data;
    var arr;
    
    var img = new Image();
    img.crossOrigin = "anonymous"
    img.src = document.getElementById("myImg").src;
    
    img.onload = () => {
        context.drawImage(img, 0, 0);
        data = context.getImageData(0, 0, canvas.width, canvas.height);
        console.log(data);
        
    };

    document.getElementById("convert").onclick = () => {
        let temp = data.data;
        arr = convert(temp);
        console.log(arr);
        console.log(temp);
        
        //test
        //arr.push(1);
        //console.log(arr);
    }

    // convert rgb to mnist (data[])
    function convert(data) {
        let arr = [];
        let m, r;
        for(var i=0; i<data.length; i+=4){
            r = (data[i] + data[i+1] + data[i+2])/(3*255);
            m = 1 - r;
            arr.push(m);
        }

        return arr;
    }
});