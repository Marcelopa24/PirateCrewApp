const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    app.get('/api/pirates', PirateController.get_all);
    app.post('/api/pirates', PirateController.create_Pirate);
    app.get('/api/pirates/:id', PirateController.get_Pirate);
    app.put('/api/pirates/:id', PirateController.update_Pirate);
    app.delete('/api/pirates/:id', PirateController.delete_Pirate);
}