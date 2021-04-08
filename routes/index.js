var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const subjective = mongoose.model('Subjective')

/* GET home page. */
router.get('/', function (req, res, next) {
  subjective.findOne({
    identity: 1
  }, (err, subj) => {
    if (err) {
      return res.send({
        error: err
      })
    }
    // console.log(subj)
    res.render('index', {
      title: 'Express',
      quest: subj,
      count: 'Random'
    });
    // console.log(res)
  })
});

router.get('/questions', function (req, res, next) {

  let query = {
    identity: 1,
    questions: "Define half adder",
    answers: "A half adder is a circuit able to add two single binary digits and provide output plus carry ",
    answer_1: "A half adder is a circuit",
    answer_2: "able to add two double binary digits",
    answer_3: "able to add two single binary digits",
    answer_4: "and provide output",
    answer_5: "able to add three single decimal digits",
    answer_6: "and provide output plus carry",
  }

  subjective.create(query, (err, subject) => {
    if (err) {
      return res.send({
        error: err
      })
    }
    res.send(query)
  })
})

router.post('/check:id', ({
  params,
  body
}, res) => {
  let id = params.id
  id = id.slice(1, id.length)
  subjective.findOne({
    identity: parseInt(id)
  }, (err, subj) => {
    if (err) {
      return res.send({
        error: err
      })
    }
    // let new_id = subj.id
    // console.log(subj._doc)
    // console.log(body)
    let answer = body.answer_box
    console.log(answer)
    console.log(subj._doc.answers)
    if (answer === subj._doc.answers) {
      id = parseInt(id) + 1

      subjective.findOne({
        identity: parseInt(id)
      }, (err, data) => {
        if (err) {
          return res.send({
            error: err
          })
        }
        res.render('index', {
          title: 'Express',
          quest: data._doc,
          count: data._doc.identity
        })
        // console.log(data)
      })
    } else {
      id = parseInt(id) + 1

      subjective.findOne({
        identity: parseInt(id)
      }, (err, data) => {
        if (err) {
          return res.send({
            error: err
          })
        }
        res.render('index', {
          title: 'Express',
          quest: data._doc,
          count: 'Wrong'
        })
        // console.log(data)
      })
    }
  })
  console.log(id)
  console.log(params)
  // res.redirect('/')
})




module.exports = router;