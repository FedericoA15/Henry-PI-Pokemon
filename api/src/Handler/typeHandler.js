const {getTypesApi} = require("../Controllers/Controllers.js")

const getTypeHandler = async (req,res) =>{
    try {
        let type = await getTypesApi();
        res.status(201).json(type);
      } catch (error) {
        return res.status(404).json({ error: error.message });
      }
}
module.exports = getTypeHandler