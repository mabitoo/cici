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

实例上 beforeEach afterEach

组件内的

beforeRouterEnter()进去组件前钩子函数

beforeRouteUpdate()进入组件中的钩子函数

beforeRouterleave() 离开组件前钩子函数

单个路由中 ：beforeEnter

钩子函数接受的参数

to: 要进入的目标路由对象 到哪里去

form 正要离开导航的路由对象 从哪里来

next 用于决定要跳转或者取消导航




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

 用其他动画效果 可以改.v- 比如  .left-enter 需要在 <transition mode="out-in">   加上name="left"


 过渡模式
 in-out:新元素先进行过渡，完成之后当前元素过渡离开
 out-in:当先元素进行过渡，完成之后新元素过渡进入  用的多
 
 <transition name="left" mode="out-in">  <router-view class="center"></router-view>
    <router-view name="slider"></router-view></transition>
===================================================================================
<router-link :to="{path:'/about#abc'}" event='mouseover'>about</router-link>

event='mouseover' 鼠标悬停   组件展开
===============================================================
 路由元信息
 
 在路由配置中  可以配置一些数据  在用于路由对象信息对象中
 
 访问meta 中数据， $route.meta
 ======================================================================
 动画动效
  提供了transition的封装组件  ，添加过渡动画
  添加删除css类名
 
==============================================================================
插件的写法 
vue.prototype.$custom = '这是自定义属性'
console.log(this.$custom)

let local = {save (key,value){localSrorange.setItem(key,JSON.stringify(value)}

export default { install :function (vm){vm.prototype.$local=loacl}}
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

let obj = { install : function (Vue , option){ console.log(Vue)  console.log(option)}}

Vue.use(obj,{a:1})
======================================================================
 methods:{
  backHandle(){
  this.$router.back()  后退
  },
  forwordHandle(){
  this.$router.forward()  前进
  },
  goHandle(){
   this.$router.go(-2)   走几步       不符合步数 没反映
  },
  pushHandle(){
  //this.$router.push('/document')
  this.$router.push({path:'/document'}) 去的位置
  },
   replaceHandle(){
  //this.$router.replace('/document')
  this.$router.replace({path:'/document'})  替换
  
  
  
  =============================================================================
   懒加载
   
   把不同路由对应的组件分割成不同的代码块,然后当路由被访问的时候菜加载对应组件
   
   vue异步组件
    ｛
           compoents:{resolve,rejece}=>{}}
   ｝
   
   webpack代码分割功能
   
    require.ensure代码分块
    
        require.ensure(依赖 ，回调函数，【chunk名字】)
        
        
        let  work =(resolve)=>{
        return  require.ensure([],()=>{resolve(require('@/views/backend/workbench'))},'abc')
        
        
        
        import函数
        
        let  work =(resolve)=>{
        return import('@/views/backend/workbench')
        }
        
        
        
        
        ===================================================================================
        
     vueX   
        
        
   安装 npm i vuex -- save
   
   Vue.use(Vuex)
   
   new.Vuex.Store() 定义容器
   
   let store = new Vuex.Store({})
   
   {store}
   
    核心概念
    
    store: 类似容器  包含应用的发部分状态
    
    一个页面只有一个store
    状态存储是响应的
    
    不能直接改变store中的状态 唯一途径提交mutations
    
    State:包含所有应用级别状态的对象
    
    Getters:在组件内部获取store中状态的函数
    
    Mutations:唯一修改状态的事件回调函数
    
    Actions：包含异步操作， 提交mutation改变状态
    
    Modules:将Store分割成不同的模块
    
    Vuex辅助函数
    
    mapState
    mapGetters
    mapMutations
    mapActions
    ========================================================================================
    Axios 
    node i axios --save
    Mock
    模拟数据   http://easy-mock.com
    import axios from ‘axios’
    语法
    axios(config)
    axios【method】｛｝
    
    created(){
    axios({
    method:'get',
    url:'http//ssss'
    }).then((response)=>{console.log(response.data)}).catch((error)=>{})
    }
    axios.get('//http',{params:｛ABC：‘数据’｝}).then().catch()
    
    自定义请求实例
    
    创建
    axios.create(config)
    配置
    {
    baseURl:'//http',  下面请求用相对路径 get('/adc')
    timeout:1000,超时时间
    responseType:'josn',
    params:{
    book:'123'},
    headers:{
    'head':'miaowei',
    'content-type':'application/x-www-form-urlencode'
    }
    
    },
    transfromRequest：【funciton(data){return queryString.string(data)}】
    
    取消请求
    var CancelToken = axios.CancelToken
    var source = CancelToken.source();
    配置
    cancelToken:source.token
    捕获取消错误
    if(axios.isCancel(error)){}
    调用取消
    source.cancel(操作被用户取消)
    并发请求
    axios.all(iterable)
    axios.spread(callback)
    
    
    
    
    
    
    
    
  
  
  
