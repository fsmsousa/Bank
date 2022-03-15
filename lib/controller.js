const controller = (req, res) => {
const {createContact} = require("./service.js")

const response = req.query;

const data = createContact(response);

try {
  if(!data.contact && !data.name && !data.contBank){
    const error = "não veio informações";
    res.status(400).send(`error: ${error}`);
  }
  res.status(200).send(data);
} catch (error) {
  console.log('Erro na aplicação:', error);
}
};

module.exports = controller;