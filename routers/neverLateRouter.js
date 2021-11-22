import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import Cryptr from 'cryptr'
import NeverLate from '../models/NeverLateModel.js'
import { spawn } from 'child_process'

const neverLateRouter = express.Router()
const cryptr = new Cryptr('mySuperSecretKey')

neverLateRouter.post(
    '/update',
    expressAsyncHandler(async (req, res, next) => {
        const user = await NeverLate.findOne({ user: req.body.user });

        // Update or Create new user in DB
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
                    // Run the python script to scrape the BB
                    const pyBBhosting = spawn('python3', ['/var/www/actions-runner/_work/Never_Late/Never_Late/python/BBScraping.py', req.body.user, req.body.username, req.body.password]);

                    pyBBhosting.stdout.on('data', (data) => {
                        console.log('code successfully execcuted');
                    });
                    pyBBhosting.stderr.on('data', (data) => {
                        console.log(`stderr: ${data}`);
                    });
                    pyBBhosting.on('close', (code) => {
                        console.log(`Exited with code: ${code}`);
                    });
                    return res.send('Succesfully saved.')
                })
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
                    // Run the python script to scrape the BB
                    const pyBBhosting = spawn('python3', ['/var/www/actions-runner/_work/Never_Late/Never_Late/python/BBScraping.py', req.body.user, req.body.username, req.body.password]);

                    pyBBhosting.stdout.on('data', (data) => {
                        console.log('code successfully execcuted');
                    });
                    pyBBhosting.stderr.on('data', (data) => {
                        console.log(`stderr: ${data}`);
                    });
                    pyBBhosting.on('close', (code) => {
                        console.log(`Exited with code: ${code}`);
                    });
                    return res.send('Succesfully saved.')
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
            // Run the python script to scrape the BB
            // change the path if it doesn't work
            const pyBBhosting = spawn('python3', ['/var/www/actions-runner/_work/Never_Late/Never_Late/python/BBScraping.py', req.query.user, user.username, user.password]);

            pyBBhosting.stdout.on('data', (data) => {
                console.log('code successfully execcuted');
            });
            pyBBhosting.stderr.on('data', (data) => {
                console.log(`stderr: ${data}`);
            });
            pyBBhosting.on('close', (code) => {
                console.log(`Exited with code: ${code}`);
            });
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


neverLateRouter.post('/image/upload', expressAsyncHandler(async (req, res, next) => {
    // console.log(req.body)
    const user = await NeverLate.findOne({user: req.body.user});
    if (user){
        NeverLate.findOneAndUpdate({user: req.body.user}, 
            {imageUrl: req.body.imageURL},
            {upsert: true},
            function (err, doc) {
                if (err) {
                    return res.status(500).send({error: err})
                }
                return res.status(200).send("Successful")
            })
    }
}));

neverLateRouter.get('/image/get', expressAsyncHandler(async (req, res, next) => {
    // console.log('body',req.query.user)
    const user = await NeverLate.findOne({user: req.query.user})
    if (!user){
        return res.status(500).send({error: err})
    }
    return res.status(200).send(user)
}));

export default neverLateRouter;