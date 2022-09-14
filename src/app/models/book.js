const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

//const ObjectId = Schema.ObjectId;

const Book = new Schema({
  name:{type:String, maxLength:255},
  author:{type:String, maxLength:255},
  price:{type:Number},
  description:{type:String},
  image:{type:String, maxLength:255},
  slug: {type:String, slug: 'name', unique: true},
},{
  timestamps: true
});

//add plugin
mongoose.plugin(slug);
Book.plugin(mongooseDelete, { deletedAt : true,});
module.exports = mongoose.model('Book', Book);