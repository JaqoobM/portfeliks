import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

const db = mongoose.connect('mongodb://127.0.0.1:27017/portfeliks')

export default db