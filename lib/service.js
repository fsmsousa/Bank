const createContact = (response) =>{

  const { contato, nome, agencia, conta } = response;

  const contBank = createConta(agencia, conta);
  
  const profile = {
    name:nome,
    contact:contato,
    contBank
  };

    return profile;
  };

const createConta = (agencia, conta) => {
  const contaResult = {
    agencia,
    conta
  };
  return contaResult;
};

module.exports = {createContact};