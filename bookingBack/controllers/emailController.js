
const emailModel = require('../Models/emailModel')

module.exports = {

    createemail: function (req, res) {

        req.emailo = {

            message: req.body.message,
            voyageur: req.body.voyageur,
            to: req.body.to
        }

        let data = {

            message: req.emailo.message,
            voyageur: req.emailo.voyageur,
            to: req.emailo.to

        }

        emailModel.create(data, function (err, email) {

            if (err) {


                res.json({ message: 'error add email ' + err, data: null, status: 500 })
            }
            else {

                res.json({ message: 'email added successfuly', data: email, status: 200 })
            }

        })

    },

    getAllEmail: function (req, res) {

        emailModel.find({}).populate('voyageur').exec((err, email) => {

            if (err) {


                res.json({ message: 'error  ' + err, data: null, status: 500 })
            }
            else {

                res.json({ message: 'all emails in db ', data: email, status: 200 })
            }
        })

    }

}
