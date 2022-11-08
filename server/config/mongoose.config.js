const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/pirates", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Conectado a D.Base"))
    .catch(err => console.log("Algo no esta bien!!", err));