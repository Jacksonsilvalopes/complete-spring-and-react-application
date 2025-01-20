

export const Menu: React.FC = () => {
    return (
        <aside className="column is-2 is-is-narrow-mobile is-is-fullheight section is-is-hidden-mobile">
            <p className="menu-label is-is-hidden-touch">
                Minhas Vendas
            </p>
            <ul className="menu-list">
                <li>
                    <a href="#">
                        <span className="icon"></span> Home
                    </a>
                    <a href="#">
                        <span className="icon"></span> Cadastro
                    </a>
                    <a href="#">
                        <span className="icon"></span> Config.
                    </a>
                </li>
            </ul>
        </aside>
    )
}