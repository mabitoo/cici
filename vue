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
