import React from 'react';

export default function Card(props) {
    const tarefa = props.tarefa;

    return (
        <div key={tarefa.id} className="item" style={{ background: '#fff', borderLeft: '7px solid #000' }}>
            <div className="estados-card">
                <span className="prazo">
                    {tarefa.prazo}
                </span>
            </div>
            <div className="acoes-cartao">
                <button id="iniciar">
                </button>
                <button id="encerrar">
                </button>
                <button className="toggle-acoes">
                </button>
                <div className="grupo-acoes">
                    <button id="iniciar">
                        <span>Iniciar</span>
                    </button>
                    <button id="encerrar">
                        <span>Pausar</span>
                    </button>
                    <a>
                        <span>Mover</span>
                    </a>
                    <button id="desacompanhar">
                        <span style={{ fontSize: '11px' }}>Desacompanhar</span>
                    </button>
                    <button id="acompanhar">
                        <span>Acompanhar</span>
                    </button>
                    <a>
                        <span>Etiquetas</span>
                    </a>
                    <a>
                        <span>Editar</span>
                    </a>
                    <button id="desarquivar_tarefa">
                        <span>Desarquivar</span>
                    </button>
                    <button id="arquivar_tarefa">
                        <span>Arquivar</span>
                    </button>
                </div>
            </div>
            <a>
                <div className="meta-titulo-item">
                    <div className="sub-titulo">
                        <span style={{ color: '#EB8EF6', backgroundColor: '#FC6B4C' }}>Importante</span>
                    </div>
                    <h2>
                        { tarefa.nome }
                        <span>{ tarefa.cliente }</span>
                    </h2>
                </div>
                <div className="meta-infos">
                    <div className="responsavel">
                        <span>{ tarefa.responsavel }</span>
                    </div>
                    <div className="criada-contagem">
                        <div className="criada-em">23/04/2022</div>
                        <div className="contagem-dias">8/10</div>
                    </div>
                </div>
            </a>
        </div>
    )
}
