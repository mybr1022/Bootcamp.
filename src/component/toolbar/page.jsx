import styles from "PROYECTOBOOTCAMP/app/page.module.css";
import { Navbar, Nav } from "react-bootstrap";

export default function Toolbar() {
    return (
        <main>
            <Navbar bg="dark" variant="dark" className="justify-content-center">
              
                <Nav className={styles.boton}>
                    <Nav.Link href="#tab1">Tab 1</Nav.Link>
                    <Nav.Link href="#tab2">Tab 2</Nav.Link>
                    <Nav.Link href="#tab3">Tab 3</Nav.Link>
                </Nav>
            </Navbar>
        </main>
    );
}
