#js

if() 中的语句
false、undefined、null、0、NaN和''

Boolean(false) // false
Boolean(undefined) // false
Boolean(null) // false 
Boolean(0) // false 
Boolean(NaN) // false 
Boolean('') // false
--------------------- 

            1. window.onload=function(){}是等待所有的内容都加载完之后执行，比如图片，内容，js，css等。

            2. $(function(){})，是等待DOM加载完之后执行（我的理解是标签绘制完毕之后），图片未加载完时也能执行。

            3. $(function(){})是$(document).ready(function(){})的简写方式，功能是一样的。

            4. $(window).load(function (){})也是等待所有的内容都加载完之后执行。

            5. 不管是外链js还是页面中的js的window.onload都只执行最后的一个

            6. $(window).load(function (){})可以有多个，而且都是顺序执行。


