<template>
  
  <!---->
<div >
  <div class="shuju">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="错误类型">
          <el-input v-model="formInline.errorType" placeholder="请输入错误类型"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>

    <el-table 
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" 
    style="width: 100%" >
      <el-table-column 
      prop="_id" 
      label="_id"
   >
    </el-table-column>
      <el-table-column 
      prop="appId"
      label="appId">
    </el-table-column>
      <el-table-column
      prop="userId" 
      label="userId">
    </el-table-column>
      <el-table-column 
      prop="currentPage" 
      label="页面位置">
    </el-table-column>
      <el-table-column 
      prop="errMsg" 
      label="报错信息">
    </el-table-column>
      <el-table-column 
      prop='errorType' 
      label="错误类型">
    </el-table-column>
      <el-table-column 
      prop="ua"
      label="ua">
    </el-table-column>
      <el-table-column 
      prop="createTime" 
      label="时间">
    </el-table-column>
    </el-table>
  </div>

  <div class="el-pa">
  <el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page="currentPage"
  :page-sizes="[5,10,20,30,50]"
  :page-size="pageSize"
  layout="total, sizes, prev, pager, next, jumper"
  :total="total">
</el-pagination>
</div>
</div>
    
  
  
  </template>
  <script>
  
  // export default {
  //   name: 'ScriptException',
  //   data(){
  //     return {
  //       page:1
  //     }
  //   },
  //   // 组件挂在完毕发请求
  //   mounted(){
  //     // console.log(this.$API);
  //     // 获取列表数据方法
  //     this.getPagelist();
  //   },
  //   methods:{
  //     //获取列表的数据
  //     async getPagelist(){
  //       // 结构出参数
  //       const page = this;
  //       // 当你向服务器请求的时候，这个函数需要参数。初始化字段，代表给服务器传递参数
  //       let result = await this.$API.scriptException.reqscriptExceptionList(page);
  //       console.log(result);
  //     },
  //   },
  // };
  
  
        //   // 01.创建ajax对象
        //   let xhr =new XMLHttpRequest()
        //   // 02.初始化请求
        //   xhr.open('GET','http://localhost:3009/api/get/errorLog')
        //   // 03.发送请求
        //   xhr.send()
        //   // 04.监听读取状态事件
        //   xhr.onreadystatechange=function(){
        //       if(xhr.readyState===4){
        //           // 判断请求是否成功
        //           if(xhr.status===200){
        //               console.log(xhr.response); // JSON
        //               let list = JSON.parse(xhr.response)
  
        //               console.log(list);// object
        //               console.log(list.data); //Array
  
                    
        //           }
        //       }
        //   }
        // console.log('?>???')
  export default{
    data(){
      return {
        currentPage:1,
        pageSize:10,
        total:39,
        formInline:{
            errorType:''

        },



        // tableData:[{
        //   errMsg:"手动捕获错误",
        //   _id:"62f869420bf39f537039d4b4",
        //   appId:"react0001",
        //   userId:"user0008",
        //   errorType:"catchError",
        //   createTime:1660447042510,
        //   currentPage:"http://localhost:3001/#/page2",
        //   ua:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        //   __v:0
        // },{
        //   errMsg:"手动捕获错误",
        //   _id:"62f869420bf39f537039d4b4",
        //   appId:"react0001",
        //   userId:"user0008",
        //   errorType:"catchError",
        //   createTime:1660447042510,
        //   currentPage:"http://localhost:3001/#/page2",
        //   ua:"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
        //   __v:0
        // }]
      tableData:  [{"errMsg": "加载 IMG 资源错误",
            "_id": "630324fde84ef53a0597938d",
            "appId": "wuwei9999",
            "userId": "user99999",
            "errorType": "resourceError",
            "createTime": 1661150461812,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "promise error",
            "_id": "630324e4e84ef53a05979387",
            "appId": "wuwei9999",
            "userId": "user99999",
            "errorType": "promiseError",
            "createTime": 1661150436264,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "63031e5ee84ef53a05979311",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "catchError",
            "createTime": 1661148766891,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "63031bb4e84ef53a0597930b",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "catchError",
            "createTime": 1661148084582,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "promise error",
            "_id": "63031b1de84ef53a059792eb",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "promiseError",
            "createTime": 1661147933766,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "加载 IMG 资源错误",
            "_id": "63031b1ae84ef53a059792e5",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "resourceError",
            "createTime": 1661147930916,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "promise error",
            "_id": "63031a1fe84ef53a059792cf",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "promiseError",
            "createTime": 1661147679862,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "promise error",
            "_id": "63031a1ee84ef53a059792cb",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "promiseError",
            "createTime": 1661147678964,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "加载 IMG 资源错误",
            "_id": "630319fae84ef53a059792b1",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "resourceError",
            "createTime": 1661147642928,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "promise error",
            "_id": "630319e0e84ef53a059792ab",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "promiseError",
            "createTime": 1661147616670,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "promise error",
            "_id": "630319d9e84ef53a059792a5",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "promiseError",
            "createTime": 1661147609228,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "6303177de84ef53a05979275",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "catchError",
            "createTime": 1661147005028,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "63031778e84ef53a0597926f",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "catchError",
            "createTime": 1661147000564,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "63031777e84ef53a0597926b",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "catchError",
            "createTime": 1661146999980,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "6303175ee84ef53a05979235",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "catchError",
            "createTime": 1661146974965,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "6303175ee84ef53a05979231",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "catchError",
            "createTime": 1661146974829,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "6303174be84ef53a059791fb",
            "appId": "wuwei0001",
            "userId": "user00001",
            "errorType": "catchError",
            "createTime": 1661146955693,
            "currentPage": "http://localhost:3000/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\n\nCheck the render method of `App`.",
            "_id": "63030f1de84ef53a05979070",
            "appId": "react0003",
            "userId": "user00010",
            "errorType": "jsError",
            "col": 11,
            "row": 21417,
            "createTime": 1661144861449,
            "currentPage": "http://localhost:3000/#/page4",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught TypeError: Cannot read properties of null (reading 'childNodes')",
            "_id": "63030f1de84ef53a05979071",
            "appId": "react0003",
            "userId": "user00010",
            "errorType": "jsError",
            "col": 37,
            "row": 9235,
            "createTime": 1661144861449,
            "currentPage": "http://localhost:3000/#/page4",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\n\nCheck the render method of `App`.",
            "_id": "63030f1de84ef53a0597906f",
            "appId": "react0003",
            "userId": "user00010",
            "errorType": "jsError",
            "col": 15,
            "row": 37506,
            "createTime": 1661144861448,
            "currentPage": "http://localhost:3000/#/page4",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\n\nCheck the render method of `App`.",
            "_id": "63030f1de84ef53a0597906e",
            "appId": "react0003",
            "userId": "user00010",
            "errorType": "jsError",
            "col": 15,
            "row": 37506,
            "createTime": 1661144861446,
            "currentPage": "http://localhost:3000/#/page4",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\n\nCheck the render method of `App`.",
            "_id": "63030ea1e84ef53a0597902a",
            "appId": "react0003",
            "userId": "user00010",
            "errorType": "jsError",
            "col": 11,
            "row": 21417,
            "createTime": 1661144737903,
            "currentPage": "http://localhost:3000/#/page4",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\n\nCheck the render method of `App`.",
            "_id": "63030ea1e84ef53a05979029",
            "appId": "react0003",
            "userId": "user00010",
            "errorType": "jsError",
            "col": 15,
            "row": 37506,
            "createTime": 1661144737903,
            "currentPage": "http://localhost:3000/#/page4",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught TypeError: Cannot read properties of null (reading 'childNodes')",
            "_id": "63030ea1e84ef53a0597902b",
            "appId": "react0003",
            "userId": "user00010",
            "errorType": "jsError",
            "col": 37,
            "row": 9235,
            "createTime": 1661144737903,
            "currentPage": "http://localhost:3000/#/page4",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.\n\nCheck the render method of `App`.",
            "_id": "63030ea1e84ef53a05979028",
            "appId": "react0003",
            "userId": "user00010",
            "errorType": "jsError",
            "col": 15,
            "row": 37506,
            "createTime": 1661144737901,
            "currentPage": "http://localhost:3000/#/page4",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "62f869420bf39f537039d4b4",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "catchError",
            "createTime": 1660447042510,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "手动捕获错误",
            "_id": "62f8693f0bf39f537039d4b0",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "catchError",
            "createTime": 1660447039254,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "加载 IMG 资源错误",
            "_id": "62f865330bf39f537039d492",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "resourceError",
            "createTime": 1660446003476,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught TypeError: name.map is not a function",
            "_id": "62f862f90bf39f537039d48d",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "jsError",
            "col": 18,
            "row": 456,
            "createTime": 1660445433138,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught TypeError: name.map is not a function",
            "_id": "62f862f30bf39f537039d489",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "jsError",
            "col": 18,
            "row": 456,
            "createTime": 1660445427350,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught TypeError: name.map is not a function",
            "_id": "62f862d80bf39f537039d483",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "jsError",
            "col": 18,
            "row": 456,
            "createTime": 1660445400789,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught TypeError: name.map is not a function",
            "_id": "62f862d50bf39f537039d47d",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "jsError",
            "col": 18,
            "row": 456,
            "createTime": 1660445397778,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught TypeError: name.map is not a function",
            "_id": "62f862770bf39f537039d435",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "jsError",
            "col": 18,
            "row": 456,
            "createTime": 1660445303663,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "加载 IMG 资源错误",
            "_id": "62f853650bf39f537039d430",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "resourceError",
            "createTime": 1660441445481,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "加载 IMG 资源错误",
            "_id": "62f8531c0bf39f537039d426",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "resourceError",
            "createTime": 1660441371988,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "promise error",
            "_id": "62f852550bf39f537039d41c",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "promiseError",
            "createTime": 1660441173694,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught TypeError: name.map is not a function",
            "_id": "62f7b4e4b19e00396cc34159",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "jsError",
            "col": 18,
            "row": 456,
            "createTime": 1660400868560,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        },
        {
            "errMsg": "Uncaught TypeError: name.map is not a function",
            "_id": "62f7b4b7b19e00396cc34155",
            "appId": "react0001",
            "userId": "user0008",
            "errorType": "jsError",
            "col": 18,
            "row": 456,
            "createTime": 1660400823112,
            "currentPage": "http://localhost:3001/#/page2",
            "ua": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
            "__v": 0
        }
    ]
    
      }
    },
    created(){
          // 01.创建ajax对象
          let xhr =new XMLHttpRequest()
          // 02.初始化请求
          xhr.open('GET','http://localhost:3009/api/get/errorLog')
          // 03.发送请求
          xhr.send()
          // 04.监听读取状态事件
          xhr.onreadystatechange=function(){
              if(xhr.readyState===4){
                  // 判断请求是否成功
                  if(xhr.status===200){
                      console.log(xhr.response); // JSON
                      let list = JSON.parse(xhr.response)
  
                      console.log(list);// object
                      console.log(list.data); //Array
  
                    
                  }
              }
          }
    },
    // computed:{
    //     compData(){
    //         return this.tableData.slice(((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize))
    //     }
    // },
    methods: {
      handleSizeChange(val) {
        this.pageSize=val
        this.currentPage=1
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage=val
        console.log(`当前页: ${val}`);
        
      },
      find(){
        console.log(this.formInline)

      }
    }
    
  }
  
  
  
  </script>
  
  <style lang="scss">

  </style>
  
    -->
  
  
    
   