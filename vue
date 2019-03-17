# vue

<input type='checkbox' @keyup.prevent="function">    //prevent  阻止默认事件

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


<router-link to="/document" exact  tag='li'><a>study</a></router-link> 

exact  指定匹配 精确匹配

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

<router-link :to="'/user/'+item.id" v-for="(item,index) in userList" :key="index">{{item.userName}}</router-link>

let data=[{id:1,userName:'leo1',sex:'男',hobby:'写代码'},

{id:2,userName:'leo2',sex:'男',hobby:'唱歌'},{id:3,userName:'leo3',sex:'男',hobby:'读书'}]

export default{

  data(){return{userList: data} } }
  
动态设置 路由坐标 不同路径访问当前页面
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

通过Vue根实例的router 配置传入router实例

$router router实例对象

beforeRouterEnter()进去组件前钩子函数

beforeRouterleave() 离开组件前钩子函数

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

路由对象信息

一个路由信息对象表示当前激活的路由状态信息 每次成功的导航后都会产生一个新的对象

path 字符串 ，对象当前路由的路径

params对象 包含动态路由参数

query对象  ，URL查询参数

hash字符串，当前路由的hash值

fullpath 字符串， URL包含查询参数和hash的完整路径

mathed数组，包含当前路由的所有嵌套路径片段的 路由记录

name字符串 ，当前路由的名称
========================================================================
  created(){
  console.log(
  this.$route.params)       查询动态ID   userId
  }
  ==============================================================================
  :to="{path:'',query:{info:'follow'}}"
  
 {{$route.query}}  查询 
 =============================================================================
 动画
 .v-enter{opacity:0;}                  定义进入过度的开始状态
.v-enter-to{ opacity:1;}               定义进入的结束状态
.v-enter-active{transition:1s;}        定义进入的活动状态
.v-leave{opacity:0;}                   定义离开过度的开始状态
.v-leave-to{opacity:1;}                定义离开的结束状态
.v-leave-active{transition:2s;}         定义离开的活动状态

 用其他动画效果 可以改.v- 比如  .left-enter


 过渡模式
 in-out:新元素先进行过渡，完成之后当前元素过渡离开
 out-in:当先元素进行过渡，完成之后新元素过渡进入  用的多
 
 <transition mode="out-in">  <router-view class="center"></router-view>
    <router-view name="slider"></router-view></transition>
===================================================================================
 
