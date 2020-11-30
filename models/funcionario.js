let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let FuncionarioSchema = new Schema(
  {
    nome: { type: String, required: true, unique: true },
    setor: { type: String, required: true, enum: ['Elétrica', 'Mecânica', 'Lubrificação', 'Usinagem'] },
    matricula: { type: String, required: true },
    senha: { type: String, required: true }
  }
);

// Virtual for author's URL
FuncionarioSchema
  .virtual('url')
  .get(function () {
    return '/application/funcionario/' + this.matricula;
  });

//Export model
module.exports = mongoose.model('Funcionario', FuncionarioSchema);
