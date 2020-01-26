window.onload = () =>{
    let canvas = document.getElementById("myCanvas");
    let arrX = [];
    let arrY = []; 
    let ctx = canvas.getContext("2d");
    
//click event on canvas
canvas.addEventListener("click",  event => {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
//click the coordinates
    let x = event.x;
    let y = event.y;
     
 //we need only two points   
   if (arrX.length < 2) {
        arrX.push(x);
        arrY.push(y);
        
//draw the line
        ctx.beginPath();
        ctx.moveTo(arrX[0], arrY[0]);
        let text = "x: " + arrX[0] + " y: " + arrY[0];
        ctx.fillText(text, arrX[0], arrY[0])
        ctx.lineTo(arrX[1], arrY[1]);
        let text2 = "x: " + arrX[1] + " y: " + arrY[1];
        ctx.fillText(text2, arrX[1], arrY[1]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgb(255, 56, 0)";
        ctx.stroke();
        
//calculate the distance
     let distance = Math.sqrt((arrX[1]-arrX[0])*(arrX[1]-arrX[0]) + (arrY[1]-arrY[0])*(arrY[1]-arrY[0])) ;
    if (distance > 0) {
       let text3 = "distance " + distance ;
        ctx.fillText(text3 , 20, 20);
       }
       
    }
    
     else  {
    arrX = [];
    arrY = []; 
 
     } 
});


}
