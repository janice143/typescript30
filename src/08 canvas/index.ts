(function(){
    // 自执行函数，内部形成闭包，这样不会出现 不同文件不能声明同一变量 的问题
    const c = document.getElementById("myCanvas") as HTMLCanvasElement;
    const ctx = c.getContext("2d") as CanvasRenderingContext2D;
    const inputs = document.querySelectorAll(".controlers input") as NodeListOf<HTMLInputElement>;
    const inputClear = document.querySelectorAll("#clear") as NodeListOf<HTMLInputElement>;
    
    c.width = window.innerWidth * 0.8;
    c.height = window.innerHeight * 0.75;
    
    let strokeColor: string = "black";
    let lineSize:number = 1;
    let eraserChecked:boolean = false;
    
    let isDrawing:Boolean = false;
    let lastX:number = 0;
    let lastY:number = 0;
    
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    
    // console.log(c.width,c.height)
    
    function updateValue(this:HTMLInputElement) {
      if (this.name === "color") strokeColor = this.value;
      else if (this.name === "lineSize") {
        const scale:number = (Math.log(100) - Math.log(1)) / 99;
        lineSize = Math.floor(Math.exp(Math.log(1) + scale * (Number(this.value) - 1)));
        console.log(lineSize);
      } else {
        eraserChecked = this.checked;
        if (eraserChecked == true) strokeColor = "white";
        else strokeColor = inputs[0].value;
      }
      // console.log(strokeColor,lineSize,eraserChecked)
    }
    
    function draw(e: MouseEvent | TouchEvent) {
      // console.log(e.type);
      if (!isDrawing) return; // stop the fn from running when they are not moused down
    
      // console.log(e.type);
      let x:number = 0
      let y:number = 0
      if (e instanceof MouseEvent) {
        x = e.offsetX;
        y = e.offsetY;
      } else if(e instanceof TouchEvent && e.target instanceof HTMLCanvasElement) {
        // https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript
        // https://stackoverflow.com/questions/56927845/handle-mouse-vs-touch-events-via-event-type
        // 处理触摸屏操作
        x = e.changedTouches[0].clientX - e.target.offsetLeft;
        y = e.changedTouches[0].clientY - e.target.offsetTop;
        // console.log(e);
      }
    
      // console.log(strokeColor,lineSize,eraserChecked)
      ctx.lineWidth = lineSize;
      ctx.strokeStyle = strokeColor;
      ctx.beginPath();
      // start from
      ctx.moveTo(lastX, lastY);
      // go to
      ctx.lineTo(x, y);
      ctx.stroke();
      [lastX, lastY] = [x, y];
    }
    
    // 清屏
    function clearCanvas() {
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, c.width, c.height);
    }
    
    inputs.forEach((input:HTMLInputElement) => input.addEventListener("change", updateValue));
    
    c.addEventListener("mousedown", (e: MouseEvent) => {
      isDrawing = true;
      [lastX, lastY] = [e.offsetX, e.offsetY];
    });
    
    c.addEventListener("mousemove", draw);
    c.addEventListener("mouseup", () => (isDrawing = false));
    c.addEventListener("mouseout", () => (isDrawing = false));
    
    // 移动端触摸屏
    
    c.addEventListener("touchstart", (e:TouchEvent) => {
      isDrawing = true;
      if(e.target instanceof HTMLCanvasElement){
        lastX = e.changedTouches[0].clientX - e.target.offsetLeft;
        lastY = e.changedTouches[0].clientY - e.target.offsetTop;
      }
    
      // // 获取画板相对于屏幕的偏移量，即左上角的坐标
      // this.offsetLeft = e.target.offsetLeft
      // this.offsetTop = e.target.offsetTop
      console.log(e);
    });
    
    c.addEventListener("touchmove", draw);
    c.addEventListener("touchend", () => (isDrawing = false));
    c.addEventListener("touchcancel", () => (isDrawing = false));
    
    inputClear[0].addEventListener("click", clearCanvas);
    
})()