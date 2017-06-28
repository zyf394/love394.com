import mongo from 'koa-mongoose'
// const dbUrl = 'mongodb://' + auth.username + ':' + auth.password + '@localhost:27017/member'
// const connect = mongoose.connect(dbUrl)
const mongoose = mongo.mongoose

const MemberSchema = new mongoose.Schema({
    name: {type: String},
    phone: {type: String},
    is_payed: {type: Boolean},
    is_enrolled: {type: Boolean},
    enrolled_time: {type: Date},
    pay_time: {type: Date}
})

const Member = mongoose.model('Member', MemberSchema)

export default Member