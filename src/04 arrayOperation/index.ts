interface Inventor{
    first: string,
    last: string,
    year: number,
    passed: number
  } 
const inventors:Inventor[] = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

const people:string[] = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

    // 参考网站：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
    // 获取数组长度
    console.log(people.length);
    // 循环
    people.forEach(function(item:string,index:number):void{
        console.log(item,index);
    })
    // 数组尾部添加一个元素
    let newLength = people.push('Wheeler, Ben');// newLength的结果是people的长度，不是新添加的元素内容
    console.log(people.length);
    // 从尾部删除一个元素
    let last = people.pop();
    console.log(people.length);
    // 从头部删除一个元素
    let first = people.shift();
    console.log(people.length);
    // 从头部添加一个新元素
    let firstItem = people.unshift('Bernhard, Sandra');
    console.log(people);
    // 寻找下标
    let pos = people.indexOf('Blair, Tony');
    console.log(pos);
    // 根据下标删除元素
    let removeItem = people.splice(pos,1);//参数1表示Pos下标后多少个
    console.log(removeItem);
    // 复制数组 1
    let newPeople1 = people; //people和newPeople1指向同一个内存
    let newLenght1 = newPeople1.push('aaa');
    console.log(newPeople1);
    console.log(people);
    // 复制数组 2
    let newPeople2 = people.slice(); // people和newPeople1指向不同一个内存
    let newLenght2 = newPeople2.push('aaa');
    console.log(newPeople2);
    console.log(people);
    //  如果超出了数组本身的长度，Js引擎会更新数组长度，而不会报错
    people[100] = 'bbb';
    console.log(people);
    // Array.prototype.filter() 过滤
    const fifteen = inventors.filter((inventor:Inventor):boolean=>(inventor.year>=1500 && inventor.year < 1600));
    console.table(fifteen);
    // Array.prototype.map()
    const fullNames = inventors.map((inventor:Inventor): string => (inventor.first + ' ' + inventor.last));
    const fullNames2 = inventors.map((inventor:Inventor):string => `${inventor.first} ${inventor.last}`);
    console.log(fullNames);
    console.log(fullNames2);
    // Array.prototype.sort();升序
    const ordered = inventors.sort((a:Inventor,b:Inventor): 1 | -1 => a.year > b.year ? 1 : -1);
    console.table(ordered);
    // 降序
    const oldest = inventors.sort(function(a:Inventor,b:Inventor): 1 | -1{
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1:1;
    });
    console.table(oldest);
    // Array.prototype.reduce() 结果返回单个值
    const totalYears = inventors.reduce((total:number,inventor:Inventor): number => {
        return total + (inventor.passed - inventor.year);
    }, 0); // 0表示返回的单个值再加上0
    console.log(totalYears);
    

    
