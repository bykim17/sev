import User from "../../models/user";

const query = {
  user: (parent, args, {userId}, info) => {
    return User.findById(userId);
  },
  users: (parent, args, context, info) => {
    return User.find();
  },
  user_name: (parent, args, context, info) => {
    return User.findOne({ name: args.name });
  },
};

export default query;
