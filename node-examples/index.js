var rect = require('./rectangle')

function solveRect(l,b){
    console.log("l="+l+"b="+b)
    rect(l,b, (err,rectangle) => {
        if(err){
            console.log("ERR : ",err.message)
        }else{
            console.log("the result is"+ l + b + " is" + rectangle.area() + rectangle.perimeter())
        }
        console.log("after callback")
    })
}
solveRect(2,4)
solveRect(3,5)
solveRect(0,4)
solveRect(-3,4)