import {Link} from 'react-router-dom'

import Container from './Container'
import styles from ''

function Navbar() {
    return (
        <div>
             <Link to="/">Home</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/company">Sobre</Link>
            <Link to="/NewProject">Projetos</Link>

        </div>
    )
}

export default Navbar