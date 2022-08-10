const Mock = require("mockjs")
const jserror_url = 'http://localhost:9527/jserror/counts'

let error_counts = Mock.mock({
    "error|24":[{
        "counts|50-250":0,
    }],
})
Mock.mock("/error/counts", 'post', ()=>{
    return error_counts
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
