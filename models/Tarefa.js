import mongoose from 'mongoose';

const tarefaSchema = new mongoose.Schema({
  id: {
    type: Number
  },
  nome: {
    type: String,
    required: [true, "Digite um nome para a tarefa"],
    maxlength: [60, "Máximo de 60 caracteres"],
  },
  prazo: {
    type: String
  },
  cliente: {
    type: String
  },
  responsavel: {
    type: String
  },
  ordem: {
    type: Number
  }
});

export default mongoose.models.Tarefa || mongoose.model('Tarefa', tarefaSchema)