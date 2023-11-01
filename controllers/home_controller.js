import Question from '../models/question.js'
import Option from '../models/option.js';

let home = async function (req, res) {
    try {
        let questions = await Question.find({}).populate('options');

        return res.status(200).json({
            message: "All Questions",
            data: {
                questions: questions
            }
        });
    } catch (err) {
        console.log('Error in getting quetions', err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

let homeController = { home };
export default homeController;