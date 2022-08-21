<template>
    <!-- <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table> -->
  
    <!--按钮-->
  
    <!-- <el-button type="primary" icno="el-icon-refresh" style="margin:10px 0px">刷新</el-button> -->
  
    <!--
      表格组件
      data:表格组件将来需要展示的数据 ----数组类型
      border:是给表格添加内边框
      column属性
      label:显示标题
      width:对应列的狂赌
      align：标题的对齐方式
    -->
    <div>
    <el-table 
    :data="tableData" 
    style="width: 100%" >
      <el-table-column 
      prop="_id" 
      label="_id"
      align="center"
   >
    </el-table-column>
      <el-table-column 
      prop="appId"
      label="appId"
      align="center">
      
    </el-table-column>
      <el-table-column
      prop="userId" 
      label="userId"
      align="center">
    </el-table-column>
      <el-table-column 
      prop="currentPage" 
      label="页面位置"
      align="center">
    </el-table-column>
      <el-table-column 
      prop="errMsg" 
      label="报错信息"
      align="center">
    </el-table-column>
      <el-table-column 
      prop='errorType' 
      label="错误类型"
      align="center">
    </el-table-column>
      <el-table-column 
      prop="ua"
      label="ua"
      align="center">
    </el-table-column>
      <el-table-column 
      prop="createTime" 
      label="时间"
      align="center">
    </el-table-column>
    </el-table>
  
    <!-- <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[5, 10, 20 , 30 , 50]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination> -->
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
  
  
          // // 01.创建ajax对象
          // let xhr =new XMLHttpRequest()
          // // 02.初始化请求
          // xhr.open('GET','http://localhost:3009/api/get/errorLog')
          // // 03.发送请求
          // xhr.send()
          // // 04.监听读取状态事件
          // xhr.onreadystatechange=function(){
          //     if(xhr.readyState===4){
          //         // 判断请求是否成功
          //         if(xhr.status===200){
          //             console.log(xhr.response); // JSON
          //             let list = JSON.parse(xhr.response)
  
          //             console.log(list);// object
          //             console.log(list.data); //Array
  
                    
          //         }
          //     }
          // }
  import {scriptexception} from '@/api/api.js'
  import { thisExpression } from '@babel/types';
  export default{
    data(){
      return {
        tableData : [{
          errMsg:'',
          _id:'',
          appId:'',
          userId:'',
          errorType:'',
          createTime:0,
          currentPage:'',
          ua:'',
          __v:0
        }],
        // currentPage: 1,// 当前页数
        // pageSize: 10, // 每页显示条数
        // total :0
        
  
      // tableData: [{
      //     errMsg:'手动捕获错误',
      //     _id:'62f869420bf39f537039d4b4',
      //     appId:'react0001',
      //     userId:'user0008',
      //     errorType:'catchError',
      //     createTime:1660447042510,
      //     currentPage:'http://localhost:3001/#/page2',
      //     ua:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      //     __v:0
      //     }, {
      //     errMsg:'手动捕获错误',
      //     _id:'62f869420bf39f537039d4b4',
      //     appId:'hahhaha',
      //     userId:'user0008',
      //     errorType:'catchError',
      //     createTime:1660447042510,
      //     currentPage:'http://localhost:3001/#/page2',
      //     ua:'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36',
      //     __v:0
      //     }]
      };
    },
    // created(){
    //   // this.getData()
  
    //   // 01.创建ajax对象
    //   let xhr =new XMLHttpRequest()
    //       // 02.初始化请求
    //       xhr.open('GET','http://localhost:3009/api/get/errorLog')
    //       // 03.发送请求
    //       xhr.send()
    //       // 04.监听读取状态事件
    //       xhr.onreadystatechange=function(){
    //           if(xhr.readyState===4){
    //               // 判断请求是否成功
    //               if(xhr.status===200){
    //                   console.log(xhr.response); // JSON
  
    //                   let list = JSON.parse(xhr.response)
  
    //                   console.log(list);// object
    //                   console.log(list.data); //Array
    //                   // this.tableData.push(list.data)
    //                   this.tableData=list.data
    //                   this.total =list.total
    //                   console.log(this.total)
  
  
                    
    //               }
    //           }
    //       }
    // },
    // methods: {
    //   getData(params) {
    //     scriptexception(params)
    //     .then(res=>{
    //       console.log(res)
    //       if(res.data.status===200){
    //         this.tableData = res.data.data
    //       }
    //     })
    //   }
    // }
  
    // methods:{
    //   getData(list){
    //     this.list
    //   }
    // }
    mounted(){
      // 01.创建ajax对象
      let xhr =new XMLHttpRequest()
          // 02.初始化请求
          xhr.open('GET','http://localhost:3009/api/get/userAction')
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
                      this.tableData.push(list.data)
                      this.tableData=list.data
                      this.total =list.total
                      console.log(this.total)
                      console.log('我是tableData里面的数据',this.tableData)
  
  
                    
                  }
              }
          }
    }
  }
  
  
  
  </script>
  
  <style scoped>
  
  </style>
  
   
  