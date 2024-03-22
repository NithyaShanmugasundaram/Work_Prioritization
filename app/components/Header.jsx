"use client"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';
import styles from "./../styles/Common.module.css";
function Header() {
  return (
    <Navbar expand="lg" sticky="top" className={`${styles.wrapperContainer}`}>
      <Container fluid>
        <Navbar.Brand href="/" ><div className={styles.navbrand}>Work Prioritization</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id={styles.toggle_icon}/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Link className={styles.navlink} href="/">User Stories</Link>
            <Link className={styles.navlink} href="/tasks">Tasks</Link>
            <Link className={styles.navlink} href="/resource">Resource</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;