 // 点击a标签，切换键盘:点击piano键盘，添加chosen class，去掉drum的class; 显示对应的piano键盘;在对应的键盘中添加chosen，这样audio也可以对应
 function addChosen(){
    const chosen =  document.getElementsByClassName("piano");
    const notChosen = document.getElementsByClassName("drum");
    chosen[0].classList.add('chosen');
    notChosen[0].classList.remove('chosen');
    const notChosenKit = document.getElementById("drumKit") as HTMLElement;
    notChosenKit.classList.remove('chosen');
    notChosenKit.style.display = "none"; 
    const chosenKit = document.getElementById("pianoKit")as HTMLElement;
    chosenKit.style.display = "flex";
    chosenKit.classList.add('chosen');
    // 换钢琴壁纸
    const wallpaper = document.getElementsByTagName("html");
    wallpaper[0].style.backgroundImage="url(./pianoback.jpg)";
    
}
function addChosenDrum(){
    const chosen =  document.getElementsByClassName("drum");
    const notChosen = document.getElementsByClassName("piano");
    chosen[0].classList.add('chosen');
    notChosen[0].classList.remove('chosen');
    const notChosenKit = document.getElementById("pianoKit") as HTMLElement;
    notChosenKit.classList.remove('chosen');
    notChosenKit.style.display = "none"; 
    const chosenKit = document.getElementById("drumKit") as HTMLElement;
    chosenKit.style.display = "flex";
    chosenKit.classList.add('chosen');
    // 换鼓壁纸
    const wallpaper = document.getElementsByTagName("html");
    wallpaper[0].style.backgroundImage="url(./drumback.jpg)";
}


// 点击键盘字母时，对应的键添加class属性
function playSound(e: KeyboardEvent){
    const audio = document.querySelector(`.chosen audio[data-key="${e.keyCode}"]`) as HTMLAudioElement;
    // console.log(audio);
    if (!audio) return;
    const key = document.querySelector(`.chosen div[data-key="${e.keyCode}"]`) as HTMLElement;
    key.classList.add('playing');//添加playing类属性
    audio.currentTime = 0; //音频重头播放

    audio.play();
}

 // 去掉playing 类属性
 function removeTransition(e:TransitionEvent){
     if (e.propertyName !='transform') return;
     const target = e.target as HTMLElement;
    target.classList.remove('playing');
 }

function clickPlaySound(keycode: string | number){
    // data-key=keycode;
    const audio = document.querySelector(`.chosen audio[data-key="${keycode}"]`) as HTMLAudioElement;
    if (!audio) return;
    const key = document.querySelector(`.chosen div[data-key="${keycode}"]`) as HTMLElement;
    key.classList.add('playing');//添加playing类属性
    audio.currentTime = 0; //音频重头播放
    audio.play();
    // console.log(audio);
};


// 类型断言
// 类型断言有两种形式。 其一是“尖括号”语法：
// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;

// 另一个为as语法：
// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;

const keys = document.querySelectorAll<HTMLElement>('.key');
keys.forEach(key=>key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);

