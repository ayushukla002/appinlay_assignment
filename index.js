const express = require("express")
const { PORT } = require("./config/script")
const { connectDB } = require("./config/db")
const productRouter = require("./routers/productRouter")
const categoryRouter = require("./routers/categoryRouter")

const app = express()

connectDB()

app.use(express.json());

const port = PORT || 3000

app.use("/product", productRouter)
app.use("/category", categoryRouter)

app.listen(port, ()=>{
    console.log(`app is running on port ${port}`)
})