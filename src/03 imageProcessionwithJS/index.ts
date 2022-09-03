// 获取Input的value，并且将value赋值给css
const inputs = document.querySelectorAll<HTMLInputElement>('.controlers input');
// this作为参数
function updateValue(this: HTMLInputElement):void{
    const suffix = this.dataset.unit || ''; // 给blur和spacing加单位
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);       
    
}

inputs.forEach(input=>input.addEventListener('change',updateValue));
