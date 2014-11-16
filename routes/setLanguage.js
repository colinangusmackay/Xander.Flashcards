module.exports = function(req, res){
    var language = req.body.language;
    res.send("set-language to "+language);
};