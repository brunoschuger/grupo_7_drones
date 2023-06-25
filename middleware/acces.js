function guestMiddleWare(req, res, next){
    if (req.session.user) {
        return res.redirect("/")
    };
    next();
}
function adminMiddleWare(req, res, next){
    if (!req.session.user.admin) {
        return res.redirect("/")
    };
    next();
}

module.exports = { guestMiddleWare, adminMiddleWare }