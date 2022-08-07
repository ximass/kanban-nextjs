import Layout from '../components/Layout';
import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import dynamic from "next/dynamic";
import connectDB from '../lib/utils/mongodb';
import Tarefa from '../models/Tarefa';

const Card = dynamic(import('../components/Card'));

export default function Index({ tarefas }) {
  const [winReady, setWinReady] = useState(false);
  const [tarefasLista, atualizarOrdem] = useState(tarefas);

  useEffect(() => {
    setWinReady(true);
  }, []);

  function handleOnDragEnd(result) {
    if (!result.destination) {
      return;
    }

    const cards = Array.from(tarefasLista);
    const [cardOrdenado] = cards.splice(result.source.index, 1);

    cards.splice(result.destination.index, 0, cardOrdenado);

    cards.forEach((card, index) => {
      card.ordem = index;
    });

    atualizarOrdem(cards);

    fetch("/api/tarefa", {
      method: "POST",
      body: JSON.stringify(cards),
      headers: 
      {
        "Content-Type": 
        "application/json",
      },
    });
  }

  return (
    <div>
      <Layout />
      <main id="grid-conteudo" className="dashboard">
        <h1 id="titulo-pagina">
          <a href="/painel" className="botao-inicio">
          </a>
          <span>Dashboard</span>
        </h1>
        <section className="kanban">
          <div className="titulo-kanban">Todas tarefas</div>
          <div className="lista-colunas">
            <div className="coluna">
              <div className="titulo-coluna">Coluna 1</div>
              {
                winReady ? 
                  <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="coluna">
                      {(provided) => (
                        <div className="conteudo-coluna" {...provided.droppableProps} ref={provided.innerRef}>
                          {
                            tarefasLista.map((tarefa, index) => 
                              <Draggable key={tarefa.id} draggableId={tarefa.id.toString()} index={index}>
                                {(provided) => (
                                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                    <Card tarefa={tarefa} />
                                  </div>
                                )}
                              </Draggable>
                            )
                          }
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                : null
              }
            </div>
          </div >
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  await connectDB();

  const result = await Tarefa.find({});

  const tarefas = result.map((tarefa) => {
    tarefa._id = tarefa._id.toString();

    return tarefa;
  })

  return { props: { tarefas: JSON.parse(JSON.stringify(tarefas)) } }
}
