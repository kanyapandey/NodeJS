const express = require('express')
const bodyParser = require('body-parser')

const promoRouter = express.Router()
promoRouter.use(bodyParser.json())

// next() is used -> match "/promotions" and will go there directly
promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send all promotions to you!')
})
.post((req,res,next) => {
    res.end('Will add the promotion:'+req.body.name+' with details: '+req.body.description)
})
.put((req,res,next) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /promotions')
})
.delete((req,res,next) => {
    res.end('Deleting all promotions to you!')
})

promoRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send the promotion '+ req.params.promoId + ' to you!')
})
.post((req,res,next) => {
    res.statusCode = 403
    res.end('POST operation not supported on /promotions '+ req.params.promoId)
})
.put((req,res,next) => {
    res.end('Will send the promotion '+ req.params.promoId + ' to you!')
})
.delete((req,res,next) => {
    res.end('Deleting all promotions to you!')
})

module.exports = promoRouter