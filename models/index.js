const User = require("./User");
const Post = require("./Post");
// const Comment = require('./Comment');

module.exports = { User, Post };

// create associations and relationship between user and post
// NOTE: this user_id is for the Post. ONE user has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});
// post belong to ONE user
Post.belongsTo(User, {
  foreignKey: "user_id",
});
