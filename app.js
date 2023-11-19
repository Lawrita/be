const express = require("express")

const app = express()

app.get("/r", (req, res)=>{
res.json("your happiness is your responsibility....")



})


const person = {
    firstName: "lawrita",
    lastName: "george",
    country: "nigeria",
    gender: "female"
} 

app.post("/mmm", (req, res)=>{
    res.status(500).json({Message: "succesful", person})
})



const details = {
    stateOfOrigin: "rivers state",
}

app.patch("/about", (req, res)=>{
    res.status(200).json({Message: "welcome to port harcourt the city of opportunities", details})
})

const nickName = {
    otherName: "Black Diamond",
}

app.put("/identity", (req, res)=>{
    res.status(404).json({Message: "black dont crack", nickName})
})

const personal = {
    name: "mihana",

}

app.delete("/personal", (req, res)=>{
    res.status(501).json({Message: "delete mihana succesful", personal})
})


app.listen(5000, ()=>{
    console.log(`server running on port:  5000`)
})