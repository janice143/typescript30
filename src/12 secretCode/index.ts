declare function cornify_add(): void;
(function () {
  const p = document.querySelector("p") as HTMLParagraphElement;

  const pressCode:string[] = [];
  const secretCode:string = "happy 2022";
  //window添加键盘监听事件
  window.addEventListener("keyup", (e:KeyboardEvent) => {
    // console.log(e.key)
    pressCode.push(e.key);
    // console.log(pressCode)
    // 处理pressCode，如果包含secretCode，那么显示出一些隐藏彩蛋
    // pressCode.splice(-secretCode.length,secretCode.length)
    console.log(
      pressCode.splice(
        -secretCode.length - 1,
        pressCode.length - secretCode.length
      )
    );
    // console.log(pressCode.join(''))
    if (pressCode.join("").includes(secretCode)) {
      console.log("DING DING!");
      p.style.display = "none";

      cornify_add();
    }
  });
})();
