function guestMiddleWare(req, res, next) {
    if (req.session.user) {
        return res.redirect("/")
    };
    next();
}
function userMiddleWare(req, res, next) {
    if (!req.session.user) {
        return res.redirect("/")
    };
    next();
}
function adminMiddleWare(req, res, next) {

    if (!req.session.user) {
        return res.redirect("/")
    }
    const admin = JSON.stringify(req.session.user.admin)
    console.log(admin)
    if (admin == 0) {
        return res.redirect("/")
    } else {
        next()
    }
}

module.exports = { guestMiddleWare, adminMiddleWare, userMiddleWare }