export default function handler(req, res){
    res.setPreviewData({user: "Armin"});
    res.redirect(req.query.redirect);
}