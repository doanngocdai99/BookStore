module.exports = {
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongooseToOblect: function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose
    }
}