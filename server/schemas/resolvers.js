const { User, Comment, Feature } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // find me
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("comments");
        return userData;
      }

      throw new AuthenticationError("You are not logged in!");
    },
    //get all comments
    comments: async (parent, args, context) => {
      const params = context.user ? { _id: context.user._id } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    // single comment by id
    comment: async (parent, { _id }) => {
      return Comment.findOne({ _id });
    },
    // all users
    users: async () => {
      return User.find().select("-__v -password").populate("comments");
    },
    // user by id
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("comments");

    },
    features: async (parent, args) => {
      return Feature.find()
    }
  },
  Mutation: {
    // add new user
    // addUser: async (parent, args) => {
    //   const user = await User.create(args);
    //   const token = signToken(user);

    //   return { token, user };
    // },
    // login to acc
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPass = await user.isCorrectPassword(password);

      if (!correctPass) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    // add new comment
    addComment: async (parent, args, context) => {
      if (context.user) {
        const comment = await Comment.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { comments: comment._id } },
          { new: true }
        );

        return comment;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // add new reply
    addReply: async (parent, { commentId, replyBody }, context) => {
      if (context.user) {
        const updatedComment = await Comment.findOneAndUpdate(
          { _id: commentId },
          {
            $push: {
              replies: { replyBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedComment;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    // Add New Feature
  addFeature: async (parent, {title, description, price}) => {
    const newFeature = await addFeature.create({title, description, price});

    return newFeature;
  },

    
  },
  
};



module.exports = resolvers;
