// 1、函数重载
// 2、定义类
class person{
    name:string;
    age:number;
    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
    prints(){
        return this.age;
}
}
var p=new person('zhangshan',18);
console.log(p.prints());
