const User = require("./User");
const Post = require("./Post");
const Comment = require('./Comment');

// create associations and relationship between user and post
// NOTE: this user_id is for the Post. ONE user has many posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// post belong to ONE user
Post.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});


module.exports = { User, Post, Comment };