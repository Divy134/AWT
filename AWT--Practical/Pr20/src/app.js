const express = require('express');
require('./db/conn');
const Student = require('./models/students');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// using Promise.......................
// app.post('/students', (req, res) => 
// {
//     const user = new Student({
//         name : req.body.name,
//         email : req.body.email,
//         phone : req.body.phone,
//         address : req.body.address
//     });
//     user.save().then(()=>
//     {
//         res.send(user)
//     }).catch((err)=>{
//         res.send(err);
//     })
// });

// using async await.......................
app.post('/students', async (req,res)=>
{
    const user = new Student(req.body);
    try
    {
        const CreateUser = await user.save();
        res.status(201).send(CreateUser);
    }
    catch(e)
    {
        res.status(400).send(e);
    }
});

// get data of all students....................... 
app.get('/students', async (req,res)=>
{
    try
    {
        const studentsData = await Student.find();
        res.status(200).send(studentsData);
    }catch(e)
    {
        res.status(400).send(e);
    }
});

// get individual student data.......................
app.get('/students/:id', async (req,res)=>
{
    try
    {
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        if(!studentData)
        {
            res.status(404).send();
        }
        else
        {
            res.status(200).send(studentData);
        }
    }catch(e)
    {
        res.status(400).send(e);
    }
});

app.patch('/students/:id', async (req,res)=>
{
    try
    {
        const _id = req.params.id;
        const updateData = await Student.findByIdAndUpdate(_id, req.body, {
            new : true
        });
        res.send(updateData);
    }catch(e)
    {
        res.status(400).send(e);
    }
});

app.delete('/students/:id', async (req,res)=>
{
    try
    {
        const deleteData = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id)
        {
            res.status(400).send();
        }
        res.send(deleteData);
    }catch(e)
    {
        res.status(400).send(e);
    }
});

app.listen(port, () =>
{
    console.log(`connection is setup at ${port}`);
});



