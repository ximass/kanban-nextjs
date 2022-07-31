import connectDB from '../utils/mongodb';

export async function getTarefas() {
  const { db } = await connectDB();

  const data = await db.collection('tarefas').find().sort({ ordem: 1 }).toArray();

  return data;
}

export default getTarefas;