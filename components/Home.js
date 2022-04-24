import React from 'react'
import Kanban from '../components/Kanban'

export default function Home() {
	return (
		<main id="grid-conteudo" className="dashboard" js-kanban-usuario="">
			<h1 id="titulo-pagina">
				<a href="/painel" className="botao-inicio">
				</a>
				<span>Dashboard</span>
			</h1>
			<section className="filtros-pagina">
				<button className="filtro-mobile" js-filtro-mobile>
				</button>
				<div js-filtro-completo className="filtro-completo" js-usuario="">
					<div className="row gutters-2 align-items-end">
						<div className="col-lg-150px campo">
							<label>Busca</label>
							<input type="text" id="busca" js-filtro-change />
						</div>
						<div className="col-lg-150px campo">
							<label>Projeto</label>
							<bravoselect id="projeto" desmarcar="true" js-filtro-change>
								<input type="text" placeholder="Selecione" />
								<opcoes>
									<opcao>teste1</opcao>
									<opcao>teste2</opcao>
								</opcoes>
							</bravoselect>
						</div>
						<div className="col-lg-150px campo">
							<label>Setor</label>
							<bravoselect id="setor_id" desmarcar="true" multiplo js-filtro-change>
								<input type="text" placeholder="Selecione" />
								<opcoes>
									<opcao id="" value=""></opcao>
								</opcoes>
							</bravoselect>
						</div>
						<div className="col-lg-150px campo">
							<label>Solicitante</label>
							<bravoselect id="solicitante" desmarcar="true" js-filtro-change>
								<input type="text" placeholder="Selecione" />
								<opcoes>
									<opcao id="" value=""></opcao>
								</opcoes>
							</bravoselect>
						</div>
						<div className="col-lg-150px campo">
							<label>Etiqueta</label>
							<bravoselect id="etiqueta" desmarcar="true" js-filtro-change>
								<input type="text" placeholder="Selecione" />
								<opcoes>
									<opcao id="" value=""></opcao>
								</opcoes>
							</bravoselect>
						</div>
						<div className="col-lg-150px campo">
							<label>Tipo de tarefa</label>
							<bravoselect id="tarefatipo_id" desmarcar="true" js-filtro-change>
								<input type="text" placeholder="Selecione" />
								<opcoes>
									<opcao id="" value=""></opcao>
								</opcoes>
							</bravoselect>
						</div>
						<div className="col-lg-auto campo">
							<a href="/painel" className="limpar-filtro">Limpar filtros</a>
						</div>
					</div>
					<div className="filtros-admin">
						<a js-responsavel="" js-imagem-bg="">Todos responsáveis</a>
						<a js-responsavel="sem_responsavel" js-imagem-bg="">Sem responsável</a>
						<span className="separador"></span>
						<a ></a>
						<span className="separador"></span>
						<a id="minhas_solicitacoes">Minhas solicitações</a>
					</div>
					<div className="aplicar-filtro" js-aplicar-filtro>Aplicar filtro</div>
				</div>
			</section>
			<Kanban></Kanban>
		</main>
	)
}
