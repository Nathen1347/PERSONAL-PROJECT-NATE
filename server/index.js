const express = require('express');
const massive = require('massive');
require('dotenv').config();
const session = require('express-session')
const {getBudget, addBudget, editBudget, deleteBudget} = require('./budgetController')
const {getGoal, addGoal, editGoal, deleteGoal} = require('./goalController')
const {getIncome, addIncome, editIncome, deleteIncome} = require('./incomeController')
const {getUser, postRegister, postLogin, logout} = require('./authController')
const app = express();

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365,
    }
}))

massive({
    connectionString: process.env.CONNECTION_STRING,
    ssl:{
        rejectUnauthorized: false
    }
}).then((dbInstance)=>{
    app.set('db', dbInstance);
    console.log('Database connection succesful')
})
.catch((e)=>{
    console.log('DB connection error', e);
})

//Authentication Endpoints
app.post('/api/register', postRegister)
app.post('/api/login', postLogin)
app.get('/api/me', getUser)
app.delete('/api/logout', logout)

//Budget Endpoints
app.get('/api/budget', getBudget)
app.post('/api/budget', addBudget)
app.put('/api/budget/:id', editBudget)
app.delete('/api/budget/:id', deleteBudget)

//Goal Endpoints
app.get('/api/goal', getGoal)
app.post('/api/goal', addGoal)
app.put('/api/goal/:id', editGoal)
app.delete('/api/goal/:id', deleteGoal)

//Income Endpoints
app.get('/api/income', getIncome)
app.post('/api/income', addIncome)
app.put('/api/income/:id', editIncome)
app.delete('/api/income/:id', deleteIncome)

const PORT = process.env.SERVER_PORT;
app.listen(PORT, ()=> console.log(`Servering running on ${PORT}`))