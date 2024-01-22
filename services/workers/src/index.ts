import express, { Response } from "express"
import bodyParser from "body-parser"
import { configDotenv } from "dotenv"
import loggerMiddleware from "./middleware/loggerMiddleware"
import workerRoutes from "./routes/workerRoutes"
configDotenv()

const app = express()
const PORT = process.env.PORT || 8081

// middleware to parse json data
app.use(bodyParser.json())
app.use(loggerMiddleware)

app.get("/", (_, res: Response) => {
  res.send("Welcome, to use the workers api, please go to /api/workers")
})

app.use("/api/workers", workerRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
