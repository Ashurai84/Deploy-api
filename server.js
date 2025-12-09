import express from "express"
import cors from "cors"
import { checkCityCount } from "/Users/ashutoshrai/Desktop/deploy-api/node_modules/city-count"


const app = express()

app.use(cors())

let users = [{name:"Saurabh",city:"Mumbai"},{name:"Tejas",city:"Pune"},{name:"ashutosh",city:"Delhi"},{name:"Priya",city:"Mumbai"},{name:"Rahul",city:"Pune"},{name:"Neha",city:"Delhi"}]

app.get("/api/v1/users", (req, res) => {
    res.json(users)

    let count = checkCityCount(users, "Mumbai")
    console.log("Number of users in Mumbai:", count)
})

// app.get("/api/v1/city-count/:city", (req, res) => {
//     const city = req.params.city
//     const count = checkCityCount(users, city)
//     res.json({ city, count })
// })

app.listen(8000, () => {
    console.log("Server Up and Running")
})
