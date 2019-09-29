const mongoose = require("mongoose");
const mongodb = "mongodb://localhost/users";
const port = process.env.PORT || 3000;
const app = require("./src/app");

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (req, res) => {
    if (req) {
        console.log('Base de datos OFFLINE');
    } else {
        console.log('Base de datos ONLINE');
    }
});


app.listen(port);