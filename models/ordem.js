var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var OrdemSchema = new Schema(
  {
    ordemId: {type: Number, required: true}
  }
);

// Virtual for author's URL
OrdemSchema
.virtual('url')
.get(function () {
  return '/application/ordem/' + this.ordemId;
});

//Export model
module.exports = mongoose.model('Ordem', OrdemSchema);
