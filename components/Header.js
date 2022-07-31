import React from 'react'

export default function Header() {
    return (
        <div>
            <header className="compacto">
                <nav className="menu">
                    <div className="menu-abas">
                        <div conteudo-aba="menu" className="ativo">
                            <ul>
                                <li>
                                    <a href="/painel">
                                        <span>Início</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav >
            </header>
            <section className="meta-titulo">
                <div className="usuario">
                    <button className="toggle-usuario">
                        <span>
                            Olá, <strong>Mateus</strong>
                        </span>
                    </button>
                    <div className="opcoes-usuario">
                        <a href="/sair">Sair</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
