const input = document.querySelector("#search") as HTMLElement;
const content = document.querySelector(".content") as HTMLElement;

// 不确定的属性名
interface DICT{
    [propName: string]: string;
}
let dict: DICT[]= [];

// console.log(searchWord)
const endpoint:string =
  "https://gist.githubusercontent.com/BideoWego/60fbd40d5d1f0f1beca11ba95221dd38/raw/58fb4cce910fbf5fa67a2f0f1f619c09d7b1b373/dictionary.json";
// console.log(endpoint);
// console.log(fetch(endpoint));
fetch(endpoint)
  // .then(blob => console.log(blob.json()))
  //response.json()是一个异步操作，取出所有内容，并将其转为 JSON 对象
  .then((response) => response.json())
  // .then(data => console.log(data)) // data是一个对象
  // 对象转换为数组
  .then((data) =>
    Object.keys(data).forEach((v) => {
      let o:DICT = {};
      o[v] = data[v];
      dict.push(o);
    })
  );

// 显示列表

// 匹配单词
function findWords(wordToMatch:string, dict:DICT[]) {
  return dict.filter((word:DICT) => {
    // 获取数组里面对象的 key
    // console.log(Object.keys(word));

    // return word['a'];
    // return word[wordToMatch];

    const regex = new RegExp(wordToMatch, "gi"); // g:global,i:intensive
    // Object.keys(word)[0].match(regex);
    // 如果包含字段，返回字段，返回word对应的值即可；如果不包含阻断，match会返回为null，不进行if下的操作

    if (Object.keys(word)[0].match(regex)) return word[Object.keys(word)[0]];
  });
}

// 在Html中显示匹配的单词

function displayMatches(this:HTMLInputElement) {
  const matchArray = findWords(this.value, dict);
  // console.log(matchArray);
  // console.log(matchArray[0]);
  const html = matchArray
    .map((word:DICT) => {
      const wordName = Object.keys(word); // 键名
      // console.log(wordName.replace('a',`<span class="hl">${this.value}</span>`));
      const wordDefinition = Object.values(word); // 值
      const regex = new RegExp(this.value, "gi");
      const wordNameHl = wordName
        .toString()
        .replace(regex, `<span class="hl">${this.value}</span>`);
      // const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

      return `
                <li>
                    <span class="name">${wordNameHl}</span>
                    <br>
                    <span class="definition">${wordDefinition}</span>
                </li>
            `;
    })
    .join("");

  content.innerHTML = html;
}

// let selectedWord = findWords('abs',dict);
console.log(dict);
// console.log(selectedWord);
input.addEventListener("change", displayMatches);
input.addEventListener("keyup", displayMatches);
