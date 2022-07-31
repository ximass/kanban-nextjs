import connectDB from '../../lib/utils/mongodb';

export async function getTarefas() {
  const { db } = await connectDB();

  const data = await db.collection('tarefas').find().toArray();

  return data;
}

export default getTarefas;