import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Cryptr from 'cryptr'
import NeverLate from '../models/NeverLateModel.js'

const neverLateRouter = express.Router()
const cryptr = new Cryptr('mySuperSecretKey')


neverLateRouter.post(
    '/update',
    expressAsyncHandler(async (req, res, next) => {
        const user = await NeverLate.findOne({ user: req.body.user });
        if (user) {
            NeverLate.findOneAndUpdate(
                { user: req.body.user },
                {
                    email: req.body.email,
                    username: req.body.username,
                    password: cryptr.encrypt(req.body.password)
                },
                { upsert: true },
                function (err, doc) {
                    if (err) {
                        return res.send(500, {error: err})
                    }
                    return res.send('Succesfully saved.')
                } )
            return;
        } else {
            const entry = {
                user: req.body.user,
                email: req.body.email,
                username: req.body.username,
                password: cryptr.encrypt(req.body.password)
            }
            NeverLate.create(entry, (error, data) => {
                if (error) {
                    return next(error)
                } else {
                    res.json(data)
                }
            })
        }
    })
);

neverLateRouter.get(
    '/calendar',
    expressAsyncHandler(async (req, res) => {
        // console.log(req.query.user);
        const user = await NeverLate.findOne({ user: req.query.user })
        if (user) {
            user.password = cryptr.decrypt(user.password)
            return res.json(user)
        }
        return res.send('User not found')
    })
)

// neverLateRouter.route('/calendar').get((req, res, next) => {
//     neverLatePort.find({ user: req.query.user }, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// })

// neverLateRouter.route('/update').put((req, res, next) => {
//     neverLatePort.findOne({ user: req.body.user }, {
//         $set: req.body
//     }, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//             console.log('User updated successfully !')
//         }
//     })
// })








export default neverLateRouter;