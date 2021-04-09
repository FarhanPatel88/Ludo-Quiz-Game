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
    answer_6: "and provide output plus carry"
  }

  subjective.create(query, (err, subject) => {
    if (err) {
      return res.send({
        error: err
      })
    }
    res.json(subject)
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


router.get('/insert-questions', (req, res) => {
  let query = [{
      identity: 2,
      questions: "Write the use of half adder",
      answers: "A half adder is used for adding together the two least significant digits in a binary sum ",
      answer_1: "A half adder is used for adding together",
      answer_2: "A half adder is used for subtracting together",
      answer_3: "the two least significant digits",
      answer_4: "the two most significant digits",
      answer_5: "the three most significant digits",
      answer_6: "in a binary sum"
    },
    {
      identity: 3,
      questions: "Define full adder",
      answers: "A full adder is a digital circuit that adds three one-bit binary numbers, two operands and a carry bit ",
      answer_1: "A full adder is a digital circuit",
      answer_2: "A full adder is an analog circuit",
      answer_3: "that adds three one-bit binary numbers,",
      answer_4: "that adds two two-bit binary numbers,",
      answer_5: "that adds one three-bit binary numbers,",
      answer_6: "two operands and a carry bit"
    },
    {
      identity: 4,
      questions: "Write the Boolean Expression for half subtractor",
      answers: "Diff= A'B+AB', Borrow = A'B ",
      answer_1: "Borrow = A'B',",
      answer_2: "Diff= A'B+AB',",
      answer_3: "Diff= A'B+A'B',",
      answer_4: "Borrow = A'B",
      answer_5: "Borrow = AB'",
      answer_6: "Diff= A'B'+A'B',"
    },
    {
      identity: 5,
      questions: "Write the Boolean expression for full subtractor",
      answers: "Diff = xy'z'+x'y'z+xyz+x'yz', Borrow = x'z+x'y+yz ",
      answer_1: "Diff = x'y'z'+x'yz+xyz+xyz'",
      answer_2: "Diff = xy'z+x'yz+x'yz+x'yz',",
      answer_3: "Diff = xy'z'+x'y'z+xyz+x'yz',",
      answer_4: "Borrow = x'z'+x'y'+yz",
      answer_5: "Borrow = xz+xy+yz,",
      answer_6: "Borrow = x'z+x'y+yz"
    },
    {
      identity: 6,
      questions: "Write any 2 application of full subtractor",
      answers: "It is used in ALU (Arithmetic Logic Unit) and CPU (Central Processing Unit), they are widely used in electronic calculators ",
      answer_1: "It is used in ALU (Arithmetic Logic Unit)",
      answer_2: "It is used in keyboards, mice",
      answer_3: "they are widely used in chargers",
      answer_4: "and CPU (Central Processing Unit),",
      answer_5: "they are widely used in electronic calculators",
      answer_6: "they are widely used in analog calculators"
    },
    {
      identity: 7,
      questions: "Write the Boolean expression for half adder",
      answers: "Sum = A XOR B, Carry = A AND B ",
      answer_1: "Carry = A AND B",
      answer_2: "Carry = A OR B",
      answer_3: "Sum = A XNOR B,",
      answer_4: "Sum = A XOR B,",
      answer_5: "Carry = A XNOR B",
      answer_6: "Sum = A AND B,"
    },
    {
      identity: 8,
      questions: "Write the Boolean expression for full adder",
      answers: "Sum = x'y'z+x'yz+xy'z'+xyz, Carry = xy+xz+yz ",
      answer_1: "Carry = xy+xz+yz",
      answer_2: "Sum = xy'z'+x'y'z'+xy'z'+xyz,",
      answer_3: "Sum = x'y'z+x'yz+xy'z'+xyz,",
      answer_4: "Carry = x'y'+xz+yz",
      answer_5: "Carry = xy'+x'z+y'z",
      answer_6: "Sum = xyz+x'y'z'+x'y'z'+xyz,"
    },
    {
      identity: 9,
      questions: "Describe the limitation of half subtractor",
      answers: "There is no provision for accepting Borrow as input from the previous stage and also speed is limted by the longest delay in the circuit ",
      answer_1: "There is no provision for accepting Borrow as input from the previous stage",
      answer_2: "and also speed is limted by the longest delay in the circuit",
      answer_3: "There is no provision for accepting Borrow as input from the next stage",
      answer_4: "There is a provision for accepting Borrow as input from the previous stage",
      answer_5: "and also speed is limted by the shortest delay in the circuit",
      answer_6: "and also speed is good by the longest delay in the circuit"
    },
    {
      identity: 10,
      questions: "For 2 input variables write the output of Sum for half adder",
      answers: "SUM = A XOR B = A ⊕ B ",
      answer_1: "= A ⊕ B",
      answer_2: "SUM = A XOR B",
      answer_3: "DIFF = A XOR B",
      answer_4: "= A . B",
      answer_5: "DIFF = A OR B",
      answer_6: "= A + B"
    },
    {
      identity: 11,
      questions: "For 2 input variables write the output of Sum for full adder",
      answers: "SUM = (A XOR B) XOR C = (A ⊕ B) ⊕ C ",
      answer_1: "= (A ⊕ B) ⊕ C",
      answer_2: "SUM = (A XOR B) XOR C",
      answer_3: "= (A . B) + C",
      answer_4: "SUM = (A AND B) OR C",
      answer_5: "SUM = (A OR B) OR C",
      answer_6: "= (A + B) + C"
    },
    {
      identity: 12,
      questions: "Define BCD",
      answers: "BCD is a decimal representation of a number directly coded in binary, digit by digit ",
      answer_1: "by two digits",
      answer_2: "of a number directly coded in binary,",
      answer_3: "BCD is a decimal representation",
      answer_4: "of a number directly coded in decimal,",
      answer_5: "digit by digit",
      answer_6: "BCD is a octal representation"
    },
    {
      identity: 13,
      questions: "Write the types of basic adder circuits",
      answers: "Half adder, Full adder ",
      answer_1: "Half adder,",
      answer_2: "Half adder, Quarter adder",
      answer_3: "Quarter adder,",
      answer_4: "Full adder",
      answer_5: "Full adder, Quarter adder",
      answer_6: "Full adder, Simplex adder"
    },
    {
      identity: 14,
      questions: "For input as 1 and 0, evaluate the output of sum and carry for half adder",
      answers: "Sum = 1, Carry = 0",
      answer_1: "Sum = 1,",
      answer_2: "Sum = 0,",
      answer_3: "Sum = 1, Carry = 1",
      answer_4: "Sum = 0, Carry = 1",
      answer_5: "Carry = 1",
      answer_6: "Sum = 0, Carry = 0"
    },
    {
      identity: 15,
      questions: "For input as 1 and 1, evaluate the output of sum and carry for half adder",
      answers: "Sum = 1, Carry = 1",
      answer_1: "Sum = 1,",
      answer_2: "Sum = 0,",
      answer_3: "Sum = 1, Carry = 1",
      answer_4: "Sum = 0, Carry = 1",
      answer_5: "Carry = 1",
      answer_6: "Sum = 0, Carry = 0"
    },
    {
      identity: 16,
      questions: "Evaluate the sum and carry if the inputs of full adder is 1, 0, 1",
      answers: "Sum = 0, Carry = 1",
      answer_1: "Sum = 1,",
      answer_2: "Sum = 0,",
      answer_3: "Sum = 1, Carry = 1",
      answer_4: "Sum = 0, Carry = 1",
      answer_5: "Carry = 1",
      answer_6: "Sum = 0, Carry = 0"
    },
    {
      identity: 17,
      questions: "Evaluate the difference and borrow if inputs of half subtractor is 0 and 1",
      answers: "Difference = 1, Borrow = 1",
      answer_1: "Difference = 1,",
      answer_2: "Difference = 0,",
      answer_3: "Difference = 1, Borrow = 1",
      answer_4: "Difference = 0, Borrow = 1",
      answer_5: "Borrow = 1",
      answer_6: "Difference = 0, Borrow = 0"
    },
    {
      identity: 18,
      questions: "Evaluate the difference and borrow if the inputs of full subtractor is 0, 1, 1",
      answers: "Difference = 0, Borrow = 1",
      answer_1: "Difference = 1,",
      answer_2: "Difference = 0,",
      answer_3: "Difference = 1, Borrow = 1",
      answer_4: "Difference = 0, Borrow = 1",
      answer_5: "Borrow = 1",
      answer_6: "Difference = 0, Borrow = 0"
    },
    {
      identity: 19,
      questions: "Write the BCD value for decimal number 582",
      answers: "BCD = 010110000010",
      answer_1: "BCD = 010110010110",
      answer_2: "BCD = 010110000010",
      answer_3: "BCD = 010111010010",
      answer_4: "BCD = 010100000101",
      answer_5: "BCD = 010110010111",
      answer_6: "BCD = 010110111010"
    },
    {
      identity: 20,
      questions: "Write the circuit number for BCD adder and subtractor",
      answers: "IC 7483",
      answer_1: "IC 7486",
      answer_2: "IC 7483",
      answer_3: "ID 3483",
      answer_4: "ID 5483",
      answer_5: "IC 7481",
      answer_6: "IA 7484"
    }
  ]

  subjective.insertMany(query, (err, subject) => {
    if (err) {
      return res.send({
        error: err
      })
    }
    res.json(subject)
  })
})

module.exports = router;