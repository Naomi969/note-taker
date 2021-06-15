const path = require('path');

module.export = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join (_dirname, '../notes.html'));
    });
    
    app.get('*', (req, res) => {
        res.sendFile(path.join (_dirname, '../index.html'));
    });

};