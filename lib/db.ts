import mongoose, { Connection } from 'mongoose';

let cashedConnection:Connection | null = null

const dbconnect = async() => {

    if(cashedConnection){
        console.log('using cashed monngodb connection')
    }
    
    try {
        const connectMDB = await mongoose.connect(process.env.MONGODB_CONNECT!)
        console.log(`connected to ${connectMDB.connection.host} ${connectMDB.connection.name}`)
        cashedConnection = connectMDB.connection
        return cashedConnection
    } catch (error) {
        process.exit(1)
        console.error(error)
    }
}

export default dbconnect