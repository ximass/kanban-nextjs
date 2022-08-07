import connectDB from '../../../lib/utils/mongodb';
import Tarefa from '../../../models/Tarefa';

export default async function handler(req, res) {
  const { method } = req;

  await connectDB();

  console.log(req.body);

  switch (method) {
    case 'GET':
      try {
        const tarefas = await Tarefa.find({});
        res.status(200).json({ success: true, data: tarefas });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break
    case 'POST':
      try {
        const tarefa = await Tarefa.create(req.body);
        res.status(201).json({ success: true, data: tarefa });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break
    default:
      res.status(400).json({ success: false });
      break
  }
}