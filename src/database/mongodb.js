const mongoose = require('mongoose')
class MongoDB {
    constructor() {
        this._connect()
    }
    _connect(){
        const env = process.env.NODE_ENV;
        let URI = '';
        if(env === 'dev'){
            URI = process.env.MONGODB_URI_DEV
        } else if(env === 'qc'){
            URI = process.env.MONGODB_URI_QC
        } else if(env === 'prod'){
            URI = process.env.MONGODB_URI_PROD
        }
        console.log('URI', URI)
        mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        mongoose.connect(process.env.MONGODB_URI_DEV, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true })
            .then(() => {
                console.log('Database connection successful')
            })
            .catch((err) => {
                console.error('Database connection error')
            })
    }
}

module.exports = new MongoDB()
