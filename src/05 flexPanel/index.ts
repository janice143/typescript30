// 点击panel 12345，给对应的panel添加.panel-open属性
function clickOpen(num:number):void{
    const panelNumIf = document.getElementsByClassName(`panel${num} panel-open`) as unknown as NodeListOf<HTMLElement>;
    const panelNum = document.getElementsByClassName(`panel${num}`) as unknown as NodeListOf<HTMLElement>;
    // console.log(panelNumIf[0])
    if (panelNumIf[0])
        panelNumIf[0].classList.remove('panel-open');
    else
        panelNum[0].classList.add('panel-open');//添加playing类属性
    console.log(`panel${num} panel-open`);          
};
