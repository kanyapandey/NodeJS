const express = require('express')
const bodyParser = require('body-parser')

const dishRouter = express.Router()
dishRouter.use(bodyParser.json())

// next() is used -> match "/dishes" and will go there directly
dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send all dishes to you!')
})
.post((req,res,next) => {
    res.end('Will add the dish:'+req.body.name+' with details: '+req.body.description)
})
.put((req,res,next) => {
    res.statusCode = 403
    res.end('PUT operation not supported on /dishes')
})
.delete((req,res,next) => {
    res.end('Deleting all dishes to you!')
})

dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    next()
})
.get((req,res,next) => {
    res.end('Will send the dish '+ req.params.dishId + ' to you!')
})
.post((req,res,next) => {
    res.statusCode = 403
    res.end('POST operation not supported on /dishes '+ req.params.dishId)
})
.put((req,res,next) => {
    res.end('Will send the dish '+ req.params.dishId + ' to you!')
})
.delete((req,res,next) => {
    res.end('Deleting all dishes to you!')
})

module.exports = dishRouter