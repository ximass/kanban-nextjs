import connectDB from '../../../lib/utils/mongodb';
import Tarefa from '../../../models/Tarefa';

export default async function handler(req, res) {
  const { query: { id }, method} = req;

  await connectDB();

  switch (method) {
    case 'GET':
      try {
        const tarefa = await Tarefa.findById(id)
        if (!tarefa) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: tarefa });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break

    case 'PUT':
      try {
        const tarefa = await Tarefa.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });

        if (!tarefa) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: tarefa });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break

    case 'DELETE':
      try {
        const deletedTarefa = await Tarefa.deleteOne({ _id: id });
        if (!deletedTarefa) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break

    default:
      res.status(400).json({ success: false });
      break
  }
}