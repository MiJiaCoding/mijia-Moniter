const Mock = require("mockjs")
const jserror_url = 'http://localhost:9527/jserror/counts'

let jserror = Mock.mock({
    "jserror|24":[{
        "counts|50-250":0,
    }],
})
Mock.mock("/jserror/counts", 'post', ()=>{
    return jserror
})
// module.exports = [
//     {
//         url:'/jserror/counts',
//         type: 'post',
//         response: _ => {
//             return {
//                 data:{
//                     res: jserror
//                 } 
//             }
//         },
        
//     }
// ]
