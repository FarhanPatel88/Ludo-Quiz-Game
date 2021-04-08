const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const subjschema = mongoose.Schema({
    identity: {
        type: Number,
        // required: true,
        autoIncrement: true
    },
    questions: {
        type: String,
        required: true
    },
    answers: {
        type: String,
        required: true
    },
    answer_1: {
        type: String
    },
    answer_2: {
        type: String
    },
    answer_3: {
        type: String
    },
    answer_4: {
        type: String
    },
    answer_5: {
        type: String
    },
    answer_6: {
        type: String
    },
})

subjschema.plugin(autoIncrement.plugin, {
    model: 'Subjective',
    field: 'identity',
    startAt: 1
});




mongoose.model('Subjective', subjschema)