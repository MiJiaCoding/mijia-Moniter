<template>
  
  <table>
    <thead>
        <tr>
            <th>errMsg</th>
            <th>_id</th>
            <th>appId</th>
            <th>userId</th>
            <th>errorType</th>
            <th>createTime</th>
            <th>currentPage</th>
            <th>ua</th>
        </tr>
    </thead>
    <tbody id="shuju">

    </tbody>
    </table>
  
  


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
                    console.log(xhr.response);
                    let list = JSON.parse(xhr.response)

                    console.log(list);
                    console.log(list.data);

                    list.data.forEach(r => {
                        let tr = document.createElement('tr')
                        let td1=document.createElement('td')
                        td1.innerHTML= r.errMsg
                        let td2=document.createElement('td')
                        td2.innerHTML=r._id
                        let td3=document.createElement('td')
                        td3.innerHTML=r.appId
                        let td4=document.createElement('td')
                        td4.innerHTML=r.userId
                        let td5=document.createElement('td')
                        td5.innerHTML=r.errorType
                        let td6=document.createElement('td')
                        td6.innerHTML=r.creatTime
                        let td7=document.createElement('td')
                        td7.innerHTML=r.currentPage
                        let td8=document.createElement('td')
                        td8.innerHTML=r.ua

                        let td9=document.createElement('td')                        
                        let btn1=document.createElement('button')
                        btn1.innerHTML='编辑'
                        let btn2=document.createElement('button')
                        btn2.innerHTML='删除'
                        
                        td9.appendChild(btn1)
                        td9.appendChild(btn2)

                        tr.appendChild(td1)
                        tr.appendChild(td2)
                        tr.appendChild(td3)
                        tr.appendChild(td4)
                        tr.appendChild(td5)
                        tr.appendChild(td6)
                        tr.appendChild(td7)
                        tr.appendChild(td8)
                        document.querySelector('#shuju').appendChild(tr)

                    });
                }
            }
        }

export default{
}




</script>

<style scoped>

</style>

 
