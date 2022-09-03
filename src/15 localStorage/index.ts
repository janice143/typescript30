(function () {
  interface Item {
    text: string;
    done: boolean;
  }
  // 获取标签
  const addItems = document.querySelector(".add-items") as HTMLElement;
  const itemsList = document.querySelector(".plates") as HTMLElement;
  const items:Item[] = JSON.parse(localStorage.getItem("items") as string) || [];

  // 获取form中添加的元素，放到items变量中存储起来
  function addItem( this:HTMLFormElement, e:Event):void {
    e.preventDefault();
    const text = (this.querySelector("[name=item]") as HTMLInputElement).value;
    // 构造一个对象 item 来存储这个信息
    const item:Item = {
      text, // ES6中对 text: text, 的简写
      done: false, // 标记有没有checked
    };
    items.push(item);
    // console.log(items)
    populateList(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
  }

  // 将items中的信息挂载到DOM树上
  function populateList(plates:Item[] = [], platesList:HTMLElement) {
    platesList.innerHTML = plates
      .map((plate, i):string => {
        return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${
          plate.done ? "checked" : ""
        } />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
      })
      .join("");
  }
  // 更新localStorage中的checked状态
  function toggleDone(e:MouseEvent) {
    // 也可以这样写：const target = e.target as HTMLInputElement; 
    if (e.target instanceof HTMLInputElement && !e.target.matches("input")) return; // skip this unless it's an input
    // console.log(e.target)
    const el = e.target as HTMLInputElement;
    const index = parseFloat(el.dataset.index as string);
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateList(items, itemsList);
  }

  //
  addItems.addEventListener("submit", addItem);
  itemsList.addEventListener("click", toggleDone);
  populateList(items, itemsList);
})();
