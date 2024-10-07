import express from "express"
import db from "./model/db.js"
import bodyParser from "body-parser"
import userRouter from "./routes/user.route.js"
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/user", userRouter)
app.listen(3000, () => {
    console.log("server started..on 3000")
})