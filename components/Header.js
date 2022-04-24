import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="compacto">
                <nav className="menu">
                    <div className="menu-abas" js-abas>
                        <div conteudo-aba="menu" className="ativo">
                            <ul>
                                <li>
                                    <a href="/painel">
                                        <span>Início</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/painel/tarefasgeraislista">
                                        <span>Tarefas</span>
                                    </a>
                                    <ul>
                                        <li><a href="/painel/tarefasmodelo">Modelos</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Tarefas</span>
                                    </a>
                                    <ul>
                                        <li><a href="/painel/tarefasgeraislista">Lista</a></li>
                                        <li><a href="/painel/tarefasmodelo">Modelos</a></li>
                                        <li><a href="/painel/tarefasarquivadas">Arquivadas</a></li>
                                        <li><a href="/painel/tarefasexecucao">Em execução</a></li>
                                        <li><a href="/painel/baixas">Baixas</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/painel/clientes">

                                        <span>Clientes</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span>Relatórios</span>
                                    </a>
                                    <ul>
                                        <li><a href="/painel/relatorioexecucoes">Execuções</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/painel/configuracoes">
                                        <span>Configurações</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav >
            </header>
            <section className="meta-titulo">
                <div js-tabela-tarefa-atual>
                </div>
                <div className="central-notificacoes" js-notificacoes>
                </div>
                <div className="usuario">
                    <button className="toggle-usuario">
                        <span>
                            Olá, <strong>Mateus</strong>
                        </span>
                    </button>
                    <div className="opcoes-usuario">
                        <a href="/painel/configuracoesusuario">Configurações</a>
                        <a href="/sair">Sair</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
