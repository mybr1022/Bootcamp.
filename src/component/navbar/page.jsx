import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "PROYECTOBOOTCAMP/app/page.module.css"
import Button from 'react-bootstrap/Button';


export default function navbar() {
 return (
  <Navbar bg="dark" variant="dark" className="justify-content-center">
              
  <Nav className={styles.boton}>
            <Nav.Link href="/opciones">ingresar </Nav.Link>
            <Nav.Link href="/">iStore</Nav.Link>
            <Nav.Link href="/productos">productos</Nav.Link>
          </Nav>
     
      </Navbar>
   
  )
}


