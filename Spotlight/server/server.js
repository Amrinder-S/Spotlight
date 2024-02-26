require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { redirect } = require('react-router-dom');
const app = express();
const {getDatabasePool} = require('./db.js');

app.use(cors());
app.use(express.json());


app.get('/message', (req, res) => {
    res.json({ message: "Search Projects From Database" });
});

app.post('/login', async (req, res) => {
    const loginData = req.body;
    const username = 'user@ekus.com';
    const password = '123';
    const pool = await getDatabasePool();
    pool.query(`SELECT * FROM users WHERE username='${username}' AND password='${password}'`, (err, res) => {
        if (err) {
            console.error('Error executing query', err.stack);
        } else {
            console.log('Connected to PostgreSQL at', res.rows);
        }
    });
    console.log(loginData);
  
    res.send('Form data received successfully!');
  });


  app.post('/signup', async (req, res) => {
    try {
        const signupData = req.body;
        const userexist = false;
        if(userexist){
        return res.send({
            message : "User Already Exists, Please Create A New Account ",
            type : "error"
        })
    }
        // const newUser = new UserModel({
        //     name: signupData.name,
        //     email: signupData.email,
        //     password: signupData.password
        // });

        res.send({
            message : "Congratulations, Account Created Successfully!",
            type : "success"
        });
       
    } catch (error) {
        console.error('Error saving user:', error);

        res.status(500).send('Internal Server Error');
    }
});

    
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });