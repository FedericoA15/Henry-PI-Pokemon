const validate = (req,res,next) => {
    const { name, type, hp, attack, defense, speed, height, weight } =
    req.body;
    if(!name) return res.status(400).send({error: "Missing name"})
    if(!hp) return res.status(400).send({error: "Missing hp"})
    if(!attack) return res.status(400).send({error: "Missing attack"})
    if(!defense) return res.status(400).send({error: "Missing defense"})
    if(!speed) return res.status(400).send({error: "Missing speed"})
    if(!height) return res.status(400).send({error: "Missing height"})
    if(!weight) return res.status(400).send({error: "Missing weight"})
    next();
}
module.exports = validate;