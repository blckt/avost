var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
var userSchema = new Schema({
    name: String,
    username: {
        type: String, unique: true, required: true
    },
    password: {
        type: String, required: true, select: false
    },
    admin: { type: Boolean, required: true, select: false },
    created_at: Date,
    salt: { type: String, select: false },
    email: {
        type: String, required: true
    },
    verified:Boolean

});
userSchema.methods.comparePasswords = function (pass) {
    var user = this;
    return bcrypt.compareSync(pass, user.password);
}

userSchema.pre('save', function (next) {
    var user = this;
    var salt = bcrypt.genSaltSync(10);
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password,salt,null,function (err,hash) {

    if(err) return next(err);
    user.password=hash;
    next();
  });
});
module.exports = mongoose.model('User', userSchema);