module.exports = function protectRoute(req, res, next) {
    req.session.currentUser ? next() : res.redirect("/auth/signin");
};