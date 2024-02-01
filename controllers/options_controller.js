import Question from '../models/question.js';
import Option from '../models/option.js';


// create an option
let create = async function (req, res) {
    try {
        let option = await Option.create({
            question: req.params.id,
            text: req.body.text,
            votes: 0
        });

        //link to vote contains option id so it is added later to option once option is created and id is generated
        await Option.findByIdAndUpdate(option._id, {
            link_to_vote: `https://pollingsystemapi-k3ks.onrender.com/options/${option._id}/add_vote`
        })

        // update options array in the question
        let updatedOption = await Option.findById(option._id);
        let question = await Question.findById(req.params.id).populate('options');
        question.options.push(option._id);
        question.save();

        return res.status(200).json({
            message: 'option created !!',
            data: {
                option: updatedOption
            }
        })

    } catch (err) {
        console.log('Error in creating option', err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


// function to increase the vote count of an option
let addVote = async function (req, res) {
    try {
        let option = await Option.findById(req.params.id);
        await Option.findByIdAndUpdate(req.params.id, {
            votes: option.votes + 1
        });

        let updatedOption = await Option.findById(req.params.id);

        return res.status(200).json({
            message: "Vote added",
            data: {
                option: updatedOption
            }
        })
    } catch (err) {
        console.log('Error in adding vote', err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

// delete an option
let destroy = async function (req, res) {
    try {
        let option = await Option.findById(req.params.id);
        let questionId = option.question;

        await Option.findByIdAndDelete(req.params.id);
        await Question.findByIdAndUpdate(questionId, { $pull: { options: option._id } });

        return res.status(200).json({
            message: "Option deleted"
        })

    } catch (err) {
        console.log('Error in deleting option', err);
        return res.status(500).json({
            message: "Internal Server Error "
        })
    }
}

let optionsController = { create, addVote, destroy };
export default optionsController;