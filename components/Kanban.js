import React from 'react'
import Card from '../components/Card'

export default function Kanban() {
    return (
        <section js-kanban-gerais className="kanban">
            <div className="titulo-kanban">Todas tarefas</div>
            <div className="lista-colunas">
                <div className="coluna">
                    <div className="titulo-coluna">Teste<span></span></div>
                    <div className="conteudo-coluna" js-kanban-gerais-drag js-situacao="">
                        <Card/>
                    </div>
                </div>
            </div >
        </section>
    )
}
