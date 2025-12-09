import express from "express"
import cors from "cors"
import checkCityCount from "@ashuhrai_71/city-count"

const app = express()

app.use(cors())

let users = [{name:"Saurabh",city:"Mumbai"},{name:"Tejas",city:"Pune"},{name:"ashutosh",city:"Delhi"},{name:"Priya",city:"Mumbai"},{name:"Rahul",city:"Pune"},{name:"Neha",city:"Delhi"}]

app.get("/api/v1/users", (req, res) => {
    res.json(users)

    let count = checkCityCount(users, "Mumbai")
    console.log("Number of users in Mumbai:", count)
})
 

app.listen(8000, () => {
    console.log("Server Up and Running")
})
