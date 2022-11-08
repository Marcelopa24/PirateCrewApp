const Pirate = require("../models/pirate.model");

module.exports.get_all = (req, res) => {
    Pirate.find().sort({nombre: 1})
        .then(Piratees => res.json(Piratees))
        .catch( err =>{
            console.log(err);
            res.status(400).json(err);
        });
}

module.exports.create_Pirate = (req, res) => {
    Pirate.create(req.body)
        .then(Pirate => res.json(Pirate))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.get_Pirate = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(Pirate => res.json(Pirate))
        .catch( err =>{res.status(400).json(err);});
}

module.exports.update_Pirate = (req, res) => {
    Pirate.findByIdAndUpdate({_id: req.params.id}, req.body,{new:true, runValidators:true})
        .then(Pirate => res.json(Pirate))
        .catch( err =>{res.status(400).json(err);});
}

module.exports.delete_Pirate = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then(result => res.json(result))
        .catch( err =>{res.status(400).json(err);});
}