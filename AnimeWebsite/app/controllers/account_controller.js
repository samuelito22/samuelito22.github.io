const db = require("../models");
const Account = db.account;

exports.create = async (req, res) => {
    if(!req.body.name){
        res.status(400).send({message: "Content is empty"});
        return;
    }
    console.log(req.body.notes)
    const account = new Account({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        notes:[
            {
                title: req.body.notes.title,
                content: req.body.notes.content,
            }
        ]
    });
    console.log(account);

    try{
        const data = await account.save(account)
        res.send(data);
    } catch(err){
        res.status(500).send({
            message:
                err.message || "Was not able to create account"
        });
    }
}
exports.createNote = async (req, res) => {
    if(!req.body.name){
        res.status(400).send({message: "Content is empty"});
        return;
    }
    
    data = await Account.findById(req.body.id)
    data.notes.push(req.body.title,req.body.content)
    try{
        res.send(data);
    } catch(err){
        res.status(500).send({
            message:
                err.message || "Was not able to create account"
        });
    }
}

exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Account.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Account with id=${id}.`
          });
        } else res.send({ message: "Account was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Account with id=" + id
        });
      });
  };

exports.findOne = async (req, res) => {
    const username = req.params.username;
    try{
        const data = await Account.find({'username' : username })
        if(!data)
            res.status(404).send({message: "didn't found any username "});
        else res.send(data);
    }catch (err) {
        res.status(500).send({message: "Error can't find username "});
    }
    
  };

  exports.findAccount = async (req, res) => {
    const id = req.params.id;
    try{
        const data = await Account.findById(id)
        if(!data)
            res.status(404).send({message: "didn't found any id "});
        else res.send(data);
    }catch (err) {
        res.status(500).send({message: "Error can't find id "});
    }
    
  };