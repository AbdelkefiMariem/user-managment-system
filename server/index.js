const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./db/model/User.js')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())


const PORT = 5000
mongoose.connect('mongodb+srv://mariem:4545@cluster0.5usolfq.mongodb.net/user_managment'
    , (err, done) => {
        if (err) {
            console.log(err)
        }
        if (done) { console.log("data base connected with succes !"); }
    })
app.get('/home', (req, res) => {
    res.send('hello')
})
app.get('/all', async (req, res) => {
    try {
        await User.find({}).then(result => { res.send(result) })
    }
    catch (err) {
        res.send(err)
    }
})
app.post('/all', async (req, res) => {
    User.create(req.body,(err,result)=>{
        if (err) console.log(err);
        res.json(result)
    })

})
app.put('/update/:number', async (req, res) => {
    try {
        await User.findOneAndUpdate(
            {number:req.params.number},{
                name: req.body.name,
                email: req.body.email,
                number: req.body.number,
                adress: req.body.adress,
                company: req.body.company,
                gender: req.body.gender
            })
            res.send("tzed")
    }
    catch (err) {
        res.send(err)
    }
})


app.delete('/delete/:number', async (req, res) => {
    try {
        await User.findOneAndDelete({ number: req.params.number })
        res.send("deleted with succes!")
    }
    catch (err) {
        //    res.send(err)
        console.log('erreur');
    }
})
app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}...`);
})