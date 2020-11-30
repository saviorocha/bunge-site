var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var InstanciaOrdemSchema = new Schema(
  {
    ordem: {type: Schema.Types.ObjectId, ref: 'Ordem', required: true},
    matricula: {type: Number},
    data: {type: Date, required: true},
    horaInicio: {type: Date, required: true, minLength: 4, maxLength: 4},
    horaFim: {type: Number, required: true,  minLength: 4, maxLength: 4},
    texto: {type: String, required: true},
  }
);

// Virtual for author's URL
InstanciaOrdemSchema
.virtual('url')
.get(function () {
  return '/application/instanciaOrdem/' + this._id
});

//Export model
module.exports = mongoose.model('InstanciaOrdem', InstanciaOrdemSchema);
