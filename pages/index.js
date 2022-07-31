import Layout from '../components/Layout';
import Card from '../components/Card'
import { getTarefas } from '../lib/database/getTarefas';

export default function Index({ tarefas }) {
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
              <div className="titulo-coluna">Teste<span></span></div>
              <div className="conteudo-coluna">
                {
                  tarefas.map((tarefa) => {
                    <Card key={tarefa._id} tarefa={tarefa} />
                  })
                }
              </div>
            </div>
          </div >
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const tarefas = await getTarefas();

  return {
    props: {
      tarefas: JSON.parse(JSON.stringify(tarefas)),
    }
  };
}
