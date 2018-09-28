module.exports = app => {
    const mongoose = app.mongoose
    const TagCategorySchema = new mongoose.Schema({
        //分类名称
        name: {
            type: String,
            unique: true
        },
        //分类描述
        desc: String 
    })
    return mongoose.model('TagCategory', TagCategorySchema)
}