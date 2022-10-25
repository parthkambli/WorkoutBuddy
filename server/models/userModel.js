import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // Validation
  if (!email || !password) {
    throw Error('All fields must be filled!');
  }
  if (!validator.isEmail(email)) {
    throw Error('email is not valid!');
  }
  if (!validator.isStrongPassword(password)) {
    throw Error('password not strong enough');
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error('Email already in use!');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

//static login method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields must be filled!');
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error('Incorrect credential!');
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error('Incorrect credential!');
  }

  return user;
};

export default mongoose.model('User', userSchema);
