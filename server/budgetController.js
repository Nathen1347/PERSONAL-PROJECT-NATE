const getBudget = (req, res) => {
  const db = req.app.get("db");
  db.get_budget()
    .then((budget) => {
      res.status(200).send(budget);
    })
    .catch((e) => console.log(e));
};

const addBudget = (req, res) => {
  const db = req.app.get("db");
  const { item, category, purchaseDate, expenseAmount } = req.body;
  db.add_budget(item, category, purchaseDate, expenseAmount)
    .then(() => res.sendStatus(200))
    .catch((e) => res.status(500).send(e));
};

const editBudget = (req, res) => {};

const deleteBudget = (req, res) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db.delete_budget(id)
    .then(() => res.sendStatus(200))
    .catch((e) => console.log(e));
};

module.exports = {
  getBudget,
  addBudget,
  editBudget,
  deleteBudget,
};
