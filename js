#js

if() 中的语句
false、undefined、null、0、NaN和''

Boolean(false) // false
Boolean(undefined) // false
Boolean(null) // false 
Boolean(0) // false 
Boolean(NaN) // false 
Boolean('') // false

=================================================================

 1. window.onload=function(){}是等待所有的内容都加载完之后执行，比如图片，内容，js，css等。

 2. $(function(){})，是等待DOM加载完之后执行（我的理解是标签绘制完毕之后），图片未加载完时也能执行。

3. $(function(){})是$(document).ready(function(){})的简写方式，功能是一样的。

 4. $(window).load(function (){})也是等待所有的内容都加载完之后执行。

 5. 不管是外链js还是页面中的js的window.onload都只执行最后的一个

 6. $(window).load(function (){})可以有多个，而且都是顺序执行。
 
=====================================================================

trim(); 去掉两边的空格
   
trim()的作用是去掉字符串两端的多余的空格，注意，是两端的空格，且无论两端的空格有多少个都会去掉，

当然中间的那些空格不会被去掉，如：

String s = "  a s f g      ";

String s1 = s.trim();

那么s1就是"a s f g"，可见，这和上面所说的是一样的。

trim()不仅可以去掉空格，还能去掉其他一些多余的符号，这些符号分别是：

\t  \n  \v  \f  \r  \x0085  \x00a0  ?  \u2028  \u2029

翻译过来分别是：水平制表符，换行符，垂直制表符，换页符，回车，后面的这几个除了问号外，其他的都是转义符形式写法。

===================================================================================================================
slice();

用于数组的时候slice（）方法可从已有的数组中返回选定的元素，也就是在该方法中指定的元素。该方法不会改变原数组，，返回值是一个新的数组。

slice(x,y); 

x= 开始取值的位置 从0开始      

第一个参数代表的是开始选取的位置，如果是负数的话代表从数组尾部开始算起的位置，-1代表从最后一个元素开始，-2代表从倒数第二个开始。

y=取几个 不写的话 默认 从开始到最后一位。

第二个参数代表的是选取结束的位置，不包含该位置，选取到该位置的上一位开始。如果不写第二个参数，那么就是从开始位置到最后一位。

var aa =[1,2,3,4,5,6]        var bb= aa.slice(0,3)    bb=[1,2,3]

splice(x,y,z);

splice是从数组中添加或删除项目，然后返回被删除的项目或者添加过的项目。而且该方法会改变原数组

如果有两个参数，那么第一个代表的是开始的位置，第二个有值而且没有第三个参数的话，代表的就是截取的位置和长度

var aa = [1,2,3,4,5,6,7]

var bb = aa.splice(0,3)      bb=[4,5,6,7]

如果有三个参数，第一个代表开始的位置，第二个参数是0的话就代表不删除（不是0的话就代表删除的个数），插入第三个参数。

var arr =['George,John','Thomas','James','Adrew','Martin'];

var newArray = arr.splice(2,0,"William"); //从newArray[2]位置插入数据William

newArray=['George','John','William','Thomas','James','Adrew','Martin']

===============================================================================================

event.preventDefault()与event.stopPropagation()是jquery的方法，但其实它们是js本身自带的方法了

event.preventDefault()用法

该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。例如，<input type='' /> 

如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。

注意，如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。无论哪种情况，调用该方法都没有作用。

该方法将通知 Web 浏览器不要执行与事件关联的默认动作（如果存在这样的动作）。

例如，如果 type 属性是 "submit"，在事件传播的任意阶段可以调用任意的事件句柄，通过调用该方法，可以阻止提交表单。

注意，如果 Event 对象的 cancelable 属性是 fasle，那么就没有默认动作，或者不能阻止默认动作。无论哪种情况，调用该方法都没有作用。

 

event.stopPropagation()用法

该方法将停止事件的传播，阻止它被分派到其他 Document 节点。在事件传播的任何阶段都可以调用它。

注意，虽然该方法不能阻止同一个 Document 节点上的其他事件句柄被调用，但是它可以阻止把事件分派到其他节点

该方法将停止事件的传播，阻止它被分派到其他 Document 节点。在事件传播的任何阶段都可以调用它。

注意:虽然该方法不能阻止同一个 Document 节点上的其他事件句柄被调用，但是它可以阻止把事件分派到其他节点。

event是DOM的事件方法，所以不是单独使用，比如指定DOM

==========================================================================================================
js的sort()方法

说明

如果调用该方法时没有使用参数，将按字母顺序对数组中的元素进行排序，说得更精确点，是按照字符编码的顺序进行排序。

要实现这一点，首先应把数组的元素都转换成字符串（如有必要），以便进行比较。

array.sort()方法默认是升序排序，如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，

然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：

若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。

若 a 等于 b，则返回 0。

若 a 大于 b，则返回一个大于 0 的值。

简单点：比较函数两个参数a和b，返回a

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

普通数组 升序

var arr = [4,3,6,5,7,2,1];

arr.sort();

console.log(arr);

//输出结果[1,2,3,4,5,6,7]

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

普通数据 降序

var arr = [4,3,6,5,7,2,1];

arr.sort();

arr.sort(function(a,b){

    return b-a;
});
console.log(arr);

//输出结果[7,6,5,4,3,2,1]

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

对象数组排序

var arr= [ 
    { 'sortNo': 2},
    { 'sortNo': 1},
    { 'sortNo': 5},
    { 'sortNo': 6},
    { 'sortNo': 7},
    { 'sortNo': 3},
    { 'sortNo': 9},
    { 'sortNo': 4},
    { 'sortNo': 0}
];
arr.sort(function(a, b){
        return a.sortNo - b.sortNo;
});
console.log(arr);
//输出结果
//{ 'sortNo': 0}
//{ 'sortNo': 1}
//{ 'sortNo': 2}
//{ 'sortNo': 3}
//{ 'sortNo': 4}
//{ 'sortNo': 5}
//{ 'sortNo': 6}
//{ 'sortNo': 7}
//{ 'sortNo': 9}
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

对象数组多条件排序

（此例如果sortNo相同，则按sortNo2从大到小）
 
 var arr= [ 
    { 'sortNo': 2, 'sortNo2': 3},
    { 'sortNo': 1, 'sortNo2': 3},
    { 'sortNo': 5, 'sortNo2': 3},
    { 'sortNo': 6, 'sortNo2': 3},
    { 'sortNo': 7, 'sortNo2': 3},
    { 'sortNo': 3, 'sortNo2': 4},
    { 'sortNo': 3, 'sortNo2': 2},
    { 'sortNo': 3, 'sortNo2': 1},
    { 'sortNo': 3, 'sortNo2': 3},
    { 'sortNo': 8, 'sortNo2': 3},
    { 'sortNo': 4, 'sortNo2': 1},
    { 'sortNo': 4, 'sortNo2': 2}
];
arr.sort(function(a, b){
    if (a.sortNo === b.sortNo) {
            return b.sortNo2 - a.sortNo2;
    } else {
            return a.sortNo - b.sortNo;
    }
});
console.log(arr); 

//输出结果
//{ 'sortNo': 1, 'sortNo2': 3}
//{ 'sortNo': 2, 'sortNo2': 3}
//{ 'sortNo': 3, 'sortNo2': 4}
//{ 'sortNo': 3, 'sortNo2': 3}
//{ 'sortNo': 3, 'sortNo2': 2}
//{ 'sortNo': 3, 'sortNo2': 1}
//{ 'sortNo': 4, 'sortNo2': 2}
//{ 'sortNo': 4, 'sortNo2': 1}
//{ 'sortNo': 5, 'sortNo2': 3}
//{ 'sortNo': 6, 'sortNo2': 3}
//{ 'sortNo': 7, 'sortNo2': 3}
//{ 'sortNo': 8, 'sortNo2': 3}
=============================================================================










