# TypeScript30

[30 Day Challenge](https://courses.wesbos.com/account)是 [Wes Bos](https://github.com/wesbos) 设计的一个 30 天原生JS编程挑战。

项目免费提供了 30 个视频教程、30 个挑战的起始文档和 30 个挑战解决方案源代码。目的是在不借助框架、库、编译器和引用的情况下，帮助初学者理解纯JavaScript语言。
本项目基于JS30项目，采用[TypeScript][typescriptlang]语言来实现。
另外，你也可以看我的[JS30](https://github.com/janice143/JavaScript30Program)。

喜欢请 Star 哦♪(^∇^*)
Have fun with the website! ♪(^∇^*)

## 项目使用指南

本项目的30个小项目源文件在`scr`文件夹下，每个子文件夹包含`index.ts`文件，但是由于浏览器不能识别ts语言，所以ts代码需要先转换成js代码。按照下面的指令，可以让你编译出js代码，并在浏览器上浏览。

1. `git clone`拉取本项目代码，然后`cd`切换文件夹
2. `npm install`安装本项目依赖
3. `npm run server` 运行本项目，成功后会出现地址，点击进入会自动使用你的默认浏览器打开。因为地址会自动复制到你的剪切板上，所以你也可以直接打开浏览器，往地址栏上`ctr+v`访问
4. 在另一个控制台上，运行`npm run watch`，可以使`src`文件下的ts文件编译到`dist`文件下的js文件，并可以看到文件的变化




