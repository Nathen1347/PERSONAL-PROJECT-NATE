const getIncome = (req,res) => {
    const db = req.app.get('db');
    db.get_income()
    .then((income)=>{
        res.status(200).send(income);
    })
    .catch((e)=>{console.log(e)})
}

const addIncome = (req,res) => {
    const db = req.app.get('db')
    const {
        incomeSource,
        incomeAmount,
        payDate,
    } = req.body;
    db.add_income(incomeSource, incomeAmount, payDate)
    .then(()=> {
        res.sendStatus(200)
    })
    .catch((e)=>{
        res.status(500).send(e)
    })
}

const editIncome = (req,res) => {
    const dbInstance = req.app.get('db')
    const {id} = req.params;
    const {incomeAmount} = req.query;

    dbInstance.edit_income(id, incomeAmount)
    .then((income) => res.status(200).send(income))
    .catch((e) => console.log(e))
}

const deleteIncome = (req,res) => {
    const db = req.app.get('db')
    const {id} = req.query;
    db.delete_income(id)
    .then(()=>res.sendStatus(200))
    .catch((e)=> console.log(e))
}

module.exports = {
    getIncome,
    addIncome,
    editIncome,
    deleteIncome
}