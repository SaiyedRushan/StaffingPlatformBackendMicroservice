import express, { Response } from "express"
import bodyParser from "body-parser"
import { configDotenv } from "dotenv"
import loggerMiddleware from "./middleware/loggerMiddleware"
import jobRoutes from "./routes/jobRoutes"
configDotenv()

const app = express()
const PORT = process.env.PORT || 8080

// middleware to parse json data
app.use(bodyParser.json())
app.use(loggerMiddleware)

app.get("/", (_, res: Response) => {
  res.send("Welcome, to use the jobs api, please go to /api/jobs")
})

app.use("/api/jobs", jobRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
