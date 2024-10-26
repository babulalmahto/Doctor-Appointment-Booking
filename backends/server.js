import express from 'express'
import cors from 'cors'
import 'dotenv/config'


// app config
const app = express()
const port = process.env.PORT || 4080
const localhost = process.env.localHost || '127.0.0.8'

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints

app.get('/', (req, res) => {
    res.send("API WORKING")
})
app.listen(port, () => {
    console.log(`Server started at http://${localhost}:${port}`)
})