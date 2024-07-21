const testController = (req,res)=>{
    res.status(200).send({
        message:"test route",
        succsess:true
    })
}

module.exports = testController 