const getGoal = (req,res) => {
    const db = req.app.get('db');
    db.get_goal()
    .then((goals)=>{
        res.status(200).send(goals)
    })
    .catch((e)=>console.log(e))
}

const addGoal = (req,res) => {
    const db = req.app.get('db');
    const {
        goalTitle,
        goalTotal,
        achievedGoal,
        achieveGoalBy
    } = req.body;
    db.add_goal(goalTitle, goalTotal, achievedGoal, achieveGoalBy)
    .then(()=> {
        res.sendStatus(200)})
    .catch((e) => res.status(500).send(e))
}

const editGoal = (req,res) => {
    const db = req.app.get('db');
    const {id} = req.params;
    const {achievedGoal} = req.query;
    db.edit_goal(id, achievedGoal)
    .then(()=> res.sendStatus(200))
    .catch((e)=> console.log(e))
}

const deleteGoal = (req,res) => {
    const db = req.app.get('db')
    const {id} = req.params;
    db.delete_goal(id)
    .then(()=>res.sendStatus(200))
    .catch((e)=> console.log(e))
}

module.exports = {
    getGoal,
    addGoal,
    editGoal,
    deleteGoal
}