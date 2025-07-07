const app = require("./app")
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const port = 8080;

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
}).then(() => {
    console.log('MongoDB database connection successfully')
}).catch((error) => {
    console.log('MongoDB database connection fail', error)
})




app.listen(port, () => {
    console.log(`Server is runing at http://localhost:${port}`)
})
