const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/ecom').then(
    () => {
        console.log("Connected succefully !!! ");
    }
);


module.exports = mongoose;