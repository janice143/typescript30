(function () {
  // 监听窗口滚动事件，如果
  // 获取图片标签
  const sliderImages = document.querySelectorAll(".slide-in") as NodeListOf<HTMLImageElement>;

  function checkSlide():void {
    sliderImages.forEach((sliderImage:HTMLImageElement) => {
      // 屏幕滚动到图片的一半的位置
      const slideInAt = window.scrollY + window.innerHeight;
      // bottom of the image
      const imageBottom = sliderImage.offsetTop + sliderImage.height;
      // console.log(slideInAt)
      // 当图片的顶端到
      const isHalfShown =
        slideInAt > sliderImage.offsetTop + sliderImage.height / 2;
      const isNotScrolledPast = window.scrollY < imageBottom;
      if (isHalfShown && isNotScrolledPast) {
        sliderImage.classList.add("active");
      } else {
        sliderImage.classList.remove("active");
      }
      console.log(window.scrollY);
    });
  }
  function debounce(func: Function, wait:number = 20, immediate:boolean = true) {
    var timeout: number | undefined;
    return function (this:Window) {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = undefined;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  window.addEventListener("scroll", debounce(checkSlide));
})();
