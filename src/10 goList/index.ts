(function () {
  let lastChecked: HTMLInputElement;

  function clickCheck(this: HTMLInputElement, e: MouseEvent) {
    let inBetween = false;
    // console.log(e.shiftKey)
    // 打印出按住shift键后的任务列表,标记第一个最后一个check的box，这个box到按住shift后点击的box都打印出来
    if (e.shiftKey && this.checked)
      inputChecks.forEach((inputCheck: HTMLInputElement): void => {
        // console.log(inputCheck === this || inputCheck === lastChecked);
        if (inputCheck === this || inputCheck === lastChecked) {
          inBetween = !inBetween;
          // console.log('Starting to check them in between!');
        }
        // console.log('行内是否',inBetween);
        if (inBetween) {
          inputCheck.checked = true;
        }
      });
    lastChecked = this;
  }
  function addHideFun(this: HTMLElement) {
    this.style.display = "none";
  }
  function displayTask(this: HTMLInputElement) {
    // console.log(this.value);
    // 使用createElement创建元素
    const newTaskItem = document.createElement("div") as HTMLElement;
    newTaskItem.className = "new-task-item";

    const html: string = `
            <div class="task-item">
                <input type="checkbox">
                <p>${this.value}</p>
            </div>
            `;
    newTaskItem.innerHTML = html;
    newTask.append(newTaskItem);
    // console.log(newTask);
    // console.log(html);
    this.value = "";

    // console.log(newTaskItem)
    newTaskItem.addEventListener("dblclick", removeTask);
  }
  function removeTask(e: MouseEvent) {
    interface Path {
      [propName: string]: HTMLElement;
    }
    const path = e.composedPath && e.composedPath();
    if (path[1] instanceof HTMLElement) {
      path[1].remove();
    }
  }
  // 匹配类名为add-icon的元素，点击该元素时，隐藏
  const addHide = document.querySelector(".add-icon") as HTMLElement;
  // console.log(addHide)
  addHide.addEventListener("click", addHideFun);

  // 匹配类型为text的input，往里输入文字时，添加css样式
  const textInput = document.querySelector("#task-input") as HTMLInputElement;
  const newTask = document.querySelector(".new-task") as HTMLElement;
  textInput.addEventListener("change", displayTask);

  // 清除任务。新添加的元素没有算上
  const textItems = document.querySelectorAll(
    ".task-item p"
  ) as NodeListOf<HTMLElement>;
  // console.log(textItems)
  textItems.forEach((textItem: HTMLElement) =>
    textItem.addEventListener("dblclick", removeTask)
  );

  const inputChecks = document.querySelectorAll(
    ".task-item input"
  ) as NodeListOf<HTMLInputElement>;
  // console.log(inputChecks)
  inputChecks.forEach((inputCheck: HTMLInputElement) =>
    inputCheck.addEventListener("click", clickCheck)
  );
})();
