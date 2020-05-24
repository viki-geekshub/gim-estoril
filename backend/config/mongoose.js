
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gim-estoril', {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useNewUrlParser: true
    })
.then(()=>console.log('Successfully conected to MongoDB'))
.catch(console.error)