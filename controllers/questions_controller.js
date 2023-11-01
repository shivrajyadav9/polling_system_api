import Question from '../models/question.js';
import Option from '../models/option.js';


let create = async function (req, res) {
    console.log(req.body);
    try {
        let newQuestion = await Question.create({
            title: req.body.title
        });
        return res.status(200).json({
            message: "Question created !!",
            data: {
                question: newQuestion
            }
        });
    } catch (err) {
        console.log('Error in creating question');
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

let destroy = async function (req, res) {
    try {
        await Option.deleteMany({ question: req.params.id });
        let question = await Question.findByIdAndDelete(req.params.id);

        return res.status(200).json({
            message: "Question deleted",
            data: {
                question: question
            }
        })

    } catch (err) {
        console.log('Error in deleting question', err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

let question = async function (req, res) {
    try {
        let question = await Question.findById(req.params.id).populate('options');
        return res.status(200).json(question);

    } catch (err) {
        console.log('Error in finding question', err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

let questionsController = { create, question, destroy };
export default questionsController;