# canvas-test
###### canvas doc https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/canvas
#### canvas example
##### set up
``` javascript
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
```
#### draw function
``` javascript
  function draw(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
    context.closePath();
  }
```
