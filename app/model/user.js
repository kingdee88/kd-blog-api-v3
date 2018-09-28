module.exports = app => {
  const mongoose = app.mongoose
  const Schema = mongoose.Schema
  const UserSchema = new mongoose.Schema({
    mobile: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
    },
    realName: {
      type: String,
      required: true
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role'
    },
    avatar: {
      type: String,
      default: 'https://1.gravatar.com/avatar/a3e54af3cb6e157e496ae430aed4f4a3?s=96&d=mm'
    },
    likeList: [{
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }],
    extra: {
      type: Schema.Types.Mixed
    },
    status: {
      type: String,
      default: '0'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updated: {
      type: Date,
      default: Date.now
    }
  })

  UserSchema
    .virtual('userInfo')
    .get(function () {
      return {
        'realName': this.realName,
        'role': this.role,
        'email': this.email,
        'avatar': this.avatar,
        'likes': this.likeList,
        'provider': this.provider
      }
    })

  return mongoose.model('User', UserSchema)
}