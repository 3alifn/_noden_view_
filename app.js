
const { app, express,  mysql ,  session, cookieParser, bodyParser, sqlmap, fs } = require("./server")

const public = require("./route/route_public")
const privet = require("./route/route_privet")
const teacher = require("./route/route_teacher")
const student = require("./route/route_student")
const authentication= require("./route/route_auhentication");
const admin = require("./route/route_admin");

app.get("/", (req, res)=>{
  res.render('view_public/home_page')
})
app.use("/pu/", public)
app.use("/pv/", privet)
app.use("/admin/", admin)
app.use("/student/", student)
app.use("/teacher/", teacher)
app.use("/au", authentication)


app.use((req, res, next)=>{

  res.sendFile(__dirname+'/views/view_public/404.html')

// throw new Error("This url was not found!")

})
