const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { UserAction, ErrorLog, VisitLog, UserLog }  = require("./models/index");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.text());

app.all("/*", cors());
 
app.use("/api/get/pvuv", async (req, res) => {
  const uv = await UserLog.find().count();
  res.json({
    uv
  });
})

app.use("/api/get/userAction", async (req, res) => {
  const page = req.query.page;
  const total = await UserAction.find().count();
  const data = await UserAction.find()
    .sort({ createTime: -1 })
    // .limit(10)
    // .skip(10 * (page - 1));
  res.json({
    total,
    pages: Math.ceil(total / 10),
    data
  });
})

app.use("/api/get/errorLog", async (req, res) => {
  const page = req.query.page;
  const total = await ErrorLog.find().count();
    // console.log(req.query);
  const data = await ErrorLog.find()
    .sort({ createTime: -1 })
    // .limit(10)
    // .skip(10 * (page - 1));
  res.json({
    total,
    pages: Math.ceil(total / 10),
    data
  });

})

// app.get('/api/get/errorLog',(req,res)=>{
//   let {pageIndex,pageSize} = req.query
//   pageIndex = parseInt(pageIndex)
//   pageIndex = parseInt(pageSize)
//   ErrorLog.find().skip((pageIndex-1)*pageSize).limit(pageSize).then(r=>{
//     res.send(r)
//   })

// })


app.use("/api/get/visitLog", async (req, res) => {
  const page = req.query.page;
  const total = await VisitLog.find().count();
  const data = await VisitLog.find()
    .sort({ createTime: -1 })
    // .limit(10)
    // .skip(10 * (page - 1));
  res.json({
    total,
    pages: Math.ceil(total / 10),
    data
  });
})

app.use("/report/actions", (req, res) => {
  const logs = typeof req.body === 'object' ? req.body : JSON.parse(req.body);

  console.log(logs);
  logs?.forEach(async item => {
    const log = JSON.parse(item);
    const { appId, userId, type, data, currentTime, currentPage, ua } = log; 
    switch(type) {
      case 'action':
        const userAction = new UserAction({
          appId,
          userId,
          actionType: data.actionType,
          data: data.data,
          createTime: currentTime,
          currentPage, 
          ua
        });
        await userAction.save();
        break;
      case 'error':
        const errorLog = new ErrorLog({
          appId,
          userId,
          errorType: data.errorType,
          errMsg: data.message,
          error: data.error,
          col: data.col,
          row: data.row,
          createTime: currentTime,
          currentPage, 
          ua
        });
        await errorLog.save();
        break;
      case 'visit':
        const visitLog = new VisitLog({
          appId,
          userId,
          stayTime: data.stayTime,
          createTime: currentTime,
          currentPage: data.page,
          ua,
        });
        if (!data.page) {
          return;
        }
        await visitLog.save();
        break;
      case 'user':
        const target = await UserLog.find({ userId, appId });

        if (target?.length === 0) {
          const userLog = new UserLog({
            appId,
            userId,
            ua,
          });
          await userLog.save();
        }
        break;
      default:
        break;
    }
  })

  res.send("发送成功");
});

app.use(function(req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.locals.message = err;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    code: "error",
    info: err
  });
});

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
require("./db");

