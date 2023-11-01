import mongoose from 'mongoose';

let optionSchema = new mongoose.Schema({
    question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    },
    text: {
        type: String,
        required: true
    },
    votes: {
        type: Number
    },
    link_to_vote: {
        type: String
    }
});

const Option = mongoose.model('Option', optionSchema);
export default Option;