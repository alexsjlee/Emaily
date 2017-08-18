const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient.js');

const surveySchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  subject: {
    type: String
  },
  recipients: {
    // An array of the RecipientSchema
    type: [RecipientSchema]
  },
  yes: {
    type: Number,
    default: 0
  },
  no: {
    type: Number,
    default: 0
  },
  // _ before the name suggests a relational field
  _user: {
    // Schema.Types.ObjectId will store the User that this survey is made by
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateSent: {
    type: Date
  },
  lastResponded: {
    type: Date
  }
});

mongoose.model('surveys', surveySchema);
