
////////////////////////////////////////////////helllloooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
// const { age } = require('./notes');

// console.log('Server-side code running');
// const add=(a,b)=>a+b;
// const result=add(4,3);
// console.log(result);
// console.log(age);
const express = require('express')
const app = express()
const db=require('./db');
require('dotenv').config();
const port = process.env.PORT || 3000;


const person=require('./models/user');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/home', function (req, res) {
    res.send('in home component')
  })
  app.get('/j', function (req, res) {
    const rahul={
        name:'rahul',
        age:20,
        city:'bangalore'

    }
    res.send(rahul)
  })

app.post('/save', function (req, res) {
    res.send('data saved')
  })
app.post('/savePerson', async function (req, res) {
   try {
    const data=req.body;
    const newPerson=new person(data);
    const response = await newPerson.save();
    res.status(200).json(response)
   } catch (error) {
    console.log(error)
    res.send('error occured')
   }
    
})

// app.get('/person', async function (req, res) {
//     try {
//         const response = await person.find();
//         res.status(200).json(response)
//     } catch (error) {
//         console.log(error)
//         res.send('error occured')
//     }
// })

// app.get('/person/:workType', async function (req, res) {
//     try {
//         const response = await person.find({work:req.params.workType});
//         res.status(200).json(response)
//     } catch (error) {
//         console.log(error)
//         res.send('error occured')
//     }
// })

const personRoute=require('./routes/personRoute');
app.use('/person',personRoute);

app.listen(3000,()=>{console.log('server is running on port 3000')}) 