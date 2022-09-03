// 获取指针的transform样式，从而让其旋转
const secondHand = document.querySelector('.second-hand') as HTMLElement;
const minuteHand = document.querySelector('.minute-hand') as HTMLElement;
const hourHand = document.querySelector('.hour-hand') as HTMLElement;

// 获取当前时间，从时间里设置指针
function setDate(){
    const time = new Date();
    const second = time.getSeconds();
    const secondDeg = second/60*360+90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    

    const minute= time.getMinutes();
    const minuteDeg = minute/(60)*360+second/10+90;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

    const hour= time.getHours();
    const hourDeg = hour/(12)*360+minute/(60)*30+90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    

}

// 设置定时器美隔一秒时间进行刷新页面
setInterval(setDate,1000);
// 



setDate(); // 当指针转一圈后，重置度数

