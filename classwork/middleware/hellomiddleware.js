function hello(req, res, next){
    console.log("HI! I'M MIDDLEWARE");
    next();
}
module.exports = hello