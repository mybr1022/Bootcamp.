"use client"

import Navbar from "PROYECTOBOOTCAMP/component/navbar/page"
import { Content } from "next/font/google"
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Toolbar from "PROYECTOBOOTCAMP/component/toolbar/page";
import styles from "PROYECTOBOOTCAMP/app/page.module.css"




export  default function loginPage(){

  return(

  <main>
  
  <Navbar/>
  
  

  <container className={styles.lista}>
    <div >
  <Form  className={styles.div}>
      <Row className="mb-3">
        <Form.Group  controlId="validationCustom01">
          <Form.Label>USUARIO</Form.Label>
          <Form.Control required type="text" placeholder="usuario"></Form.Control>
        </Form.Group>
       </Row> 
       <Row className="mb-3">
        <Form.Group  controlId="validationCustom01">
          <Form.Label>CONTRASEÑA</Form.Label>
          <Form.Control required type="password" placeholder="contraseña"></Form.Control>
        </Form.Group>
       </Row> 
      <Button className={styles.ingresar} >INGRESAR</Button>
    </Form>
    
  </div>
   
    
  </container>
 

    
  

<Toolbar/>

</main>
  
 ) 
}