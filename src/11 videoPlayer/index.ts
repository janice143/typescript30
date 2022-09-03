(function () {
  // 获取标签
  const player = document.querySelector(".player") as HTMLElement;
  const video = player.querySelector(".viewer") as HTMLVideoElement;
  const progress = player.querySelector(".progress") as HTMLElement;
  const progressBar = player.querySelector(".progress_filled") as HTMLElement;
  const toggle = player.querySelector(".toggle") as HTMLElement;
  const skipButtons = player.querySelectorAll(
    "[data-skip]"
  ) as NodeListOf<HTMLElement>; // 获取自定义属性
  const ranges = player.querySelectorAll(
    ".player_slider"
  ) as NodeListOf<HTMLElement>;

  // 写自定义函数
  // 播放按键
  function togglePlay():void {
    const method = video.paused ? "play" : "pause";
    console.log(method);
    video[method]();
  }
  // console.log(video.paused)

  // 更新播放键的按键
  function updateButton(this: HTMLVideoElement) {
    const icon = this.paused ? "►" : "❚ ❚";
    console.log(icon);
    toggle.textContent = icon;
  }
  // 跳过
  function skip(this: HTMLElement):void {
    video.currentTime += parseFloat(this.dataset.skip as string);
  }
  // 更新滑块的值
  type SliderRange = 'volume' | 'playbackRate';
  function handleRangeUpdate(this: HTMLInputElement):void {
    const name: string = this.name;
    const key: SliderRange = name as SliderRange;
    video[key] = parseFloat(this.value);
    // video[this.name] = this.value;
    // console.log(this.name);
  }
  // 更新进度条
  function handleProgress():void {
    const percent:number = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }
  // 鼠标移动进度条
  function scrub(e:MouseEvent):void {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  // 添加监听事件

  video.addEventListener("click", togglePlay);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("timeupdate", handleProgress);

  toggle.addEventListener("click", togglePlay);
  skipButtons.forEach((button) => button.addEventListener("click", skip));
  ranges.forEach((range) =>
    range.addEventListener("change", handleRangeUpdate)
  );
  ranges.forEach((range) =>
    range.addEventListener("mousemove", handleRangeUpdate)
  );

  let mousedown:boolean = false;
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
  progress.addEventListener("mousedown", () => (mousedown = true));
  progress.addEventListener("mouseup", () => (mousedown = false));
})();
