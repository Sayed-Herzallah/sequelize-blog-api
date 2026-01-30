import express from "express"
import bootstrap from "./app.contoller.js"
const app = express()
const port = 3000
bootstrap(app,express)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))