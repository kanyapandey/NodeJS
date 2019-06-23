const express = require('express')
const bodyParser = require('body-parser')

const leaderRouter = express.Router()
leaderRouter.use(bodyParser.json())

// next() is used -> match "/promotions" and will go there directly
leaderRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send all leaders to you!')
})
.post((req,res,next) => {
    res.end('Will add the leaders:'+req.body.name+' with details: '+req.body.description)
})
.put((req,res,next) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /leaders')
})
.delete((req,res,next) => {
    res.end('Deleting all leaders to you!')
})

leaderRouter.route('/:leaderId')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send the leaders '+ req.params.leaderId + ' to you!')
})
.post((req,res,next) => {
    res.statusCode = 403
    res.end('POST operation not supported on /leaders '+ req.params.leaderId)
})
.put((req,res,next) => {
    res.end('Will send the leaders '+ req.params.leaderId + ' to you!')
})
.delete((req,res,next) => {
    res.end('Deleting all leaders to you!')
})

module.exports = leaderRouter