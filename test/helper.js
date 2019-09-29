const mongoose = require("mongoose");
const mongodb = "mongodb://localhost/users_test";

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

module.exports = mongoose;