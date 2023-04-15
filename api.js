module.exports.postData = async(req,res) => {
    console.log(req.file)
    console.log(req.body)
    return res.send("send data")
}