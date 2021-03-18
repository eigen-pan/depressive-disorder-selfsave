const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class Database {
    constructor(){
        this.connect()
    }

    connect(){
        mongoose.connect("mongodb+srv://admin:dbpassword@cluster0.xtvsa.mongodb.net/test?retryWrites=true&w=majority")
        .then(
            () => {
                console.log("database connected")
            }
        )
        .catch(
            (err) => {
                console.log("database connection error "+ err);
            }
        )
    }
}

module.exports = new Database();