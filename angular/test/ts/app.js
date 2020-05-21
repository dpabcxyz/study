/*
var hello='hello word!';
console.log(hello);
*/
// 1、var/let
/*function chen(){
   var chenxuan=40056;
}
console.log(chenxuan);
*/
//2、定义布尔类型
/*var bn:boolean=true;
function test(){
    console.log(bn)
}
test();*/
// 3、定义数值型
/*var num:number=1111;
function test2(){
    num++;
    console.log(num)
}
test2();*/
// 4、定义字符串类型
/*var str:string='chenuxuan';
function test3(){
    console.log(str);
}
test3();*/
// 5、定义数组类型
/*var arr=[1,2,3,4,5,67,88,9];
var arr1:number[]=[2454325,5534345,7756,78687656,58765,75685,7568,758,35,53];
var arr2:Array<number>=[999,2,3,4,5,67,88,9];
function test4(){
    console.log(arr[3]);
    console.log(arr1[0]);
    console.log(arr2[0]);
}
test4();*/
// 6、定义枚举类型
/*enum color {red,green,blue,yellow};
enum color1 {red=3,blue=1,green=2,yellow=5};
var col=color[0];
var col1=color1[5];
var c:color1=color1.green;
function test5(){
    console.log(col); // 返回 red
    console.log(col1); //返回 yellow
    console.log(c);    //返回下标
}
test5();*/
// 7、定义any类型
var brr = ['111', 111, 222, '3t4t42'];
var arr = [124, '543543', '32r321r', 22341, 43254];
function test6() {
    console.log(brr[2]);
    console.log(brr[1]);
}
test6();
// void类型
function chenxuan() {
    return '123';
}
function chenxuan_1() {
    return '123';
}
console.log(chenxuan_1());
// 未指定函数类型时默认为void类型
