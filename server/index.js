const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
require('dotenv').config();
const app = express()
const controller = require('./controller')

app.use(express.static(`${__dirname}/../build`));
app.use(bodyParser.json())
app.use(express.static('/../public/build'))

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
    dbInstance.seedFile()
        .then(res => console.log('that sucSEEDed...'))
        .catch(err => console.log('aww shit..', err))
 app.set('db', dbInstance)
}).catch(err => console.log(err))

app.get('/cases', 
    (req, res, next) => {
        const dbInstance = req.app.get('db')
        //console.log(dbInstance, 'dbinstance')
        dbInstance.getCases().then((cases) => {
            res.status(200).send(cases)
        }).catch( err => console.log('Shiz Monkeys what happened?', err))
    })

app.get('/media/:id',
(req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getMedia([req.params.id]).then((cases) => {
        res.status(200).send(cases)
    })
}
)

app.get('/captions/:id',
(req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.getCaptions([req.params.id]).then((cases) => {
        res.status(200).send(cases)
    })
}
)

//app.get('/cases', controller.allCases)

app.delete('/deletecase/:id',
(req, res) => {
    const dbInstance = req.app.get('db')
    dbInstance.deleteCase([Number(req.params.id)]).then((cases) => {
        res.status(200).send(cases)
    })
}
)

app.put('/updatecase/:id',
(req, res) => {
    console.log(req.body, 'reqqqqq')
    const {title, subtitle, brand} = req.body
    const dbInstance = req.app.get('db')
    dbInstance.updateCase([Number(req.params.id), title, subtitle, brand]).then((cases) => {
        res.status(200).send(cases)
    })
} 
)

app.post('/newcase',
(req, res) => {
    const {title, subtitle, brand, blurb, award_blurb, deliverables, link_url, background_url} = req.body
    const dbInstance = req.app.get('db')
    dbInstance.postCase([title, subtitle, brand, blurb, award_blurb, deliverables, link_url, background_url]).then((cases) => {
        res.status(200).send(cases)
    })
}
)

const PORT_NUM = process.env.SERVER_PORT;
app.listen(PORT_NUM, (() => { console.log('YAY') }))