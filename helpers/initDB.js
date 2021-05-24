import mongoose from 'mongoose'
//sudhanshu
//7swdpPoqaGk5PsCx

//tDBUURRnKApxO96Q
function initDB()
{
    if(mongoose.connections[0].readyState)
    {
            console.log('already connected')
            return
    }
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    mongoose.connection.on('connected',()=>{
        console.log("connected to mongo")
    })
    mongoose.connection.on('error',(err)=>{
        console.log(" error connecting to mongo",err)
    })
}
export default initDB