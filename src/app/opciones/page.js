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




export  default function opcionesPage(){

  return(

  <main>
  
  <Navbar/>
  
  

  <container className={styles.lista}>
  <div className="d-grid gap-2">
      <Button href="/login"  variant="primary" size="lg">
        INGRESAR
      </Button>
      <Button  href="/registro" variant="primary" size="lg">
        REGISTRARSE
      </Button>
    </div>
  
   
    
  </container>
 

    
  

<Toolbar/>

</main>
  
 ) 
}