const express = require('express');
const app = express();
const port = 6200;
const Sequelize = require('sequelize');
const myTable = require('./model/model')

//body-parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// let newTable = myTable.create({
//     fname : "Mushfique",
//     lname : "Azam",
//     email : "mushfique6999@gmail.com",
//     phone : 9092625453
// })

// myTable.update({fname:"Mushfique",lname:"Ahmed"},{where:{id:19}})

// myTable.destroy({where:{id:25}})


app.get('/',(req,res)=>{
    myTable.findAll().then(mytable => res.send(mytable)) 
})

app.get('/:id',(req,res)=>{
    const id = req.params.id;
    myTable.findAll({where: { id:id} })
     .then(myTable => res.send(myTable))
})

app.put('/:id',(req,res)=>{
    const id = req.params.id;
    // myTable.update({},{}).then(updated => res.send("Success"))
    myTable.update({
        fname : req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        phone: req.body.phone
    },{where: {id:id}})
    .then(updated => res.send("updated"))
})

app.post('/',(req,res)=>{
  myTable.create({
        fname : req.body.fname,
        lname : req.body.lname,
        email : req.body.email,
        phone : req.body.phone
    }).then(submitTable => res.send(submitTable))
})


app.delete('/:id',(req,res)=>{
    const id = req.params.id;
   myTable.destroy({where:{id:id}}).then(()=> res.send("Success"))
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})