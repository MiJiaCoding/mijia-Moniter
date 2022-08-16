const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/user-actions", {
    useNewUrlParser: true
  })
  .then(res => {
    // console.log(res);
    console.log("数据库连接成功");
  })
  .catch(err => {
    console.log(err);
  });
