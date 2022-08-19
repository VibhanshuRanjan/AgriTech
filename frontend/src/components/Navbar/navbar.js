import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import style from './navbar.module.scss';
import logo from '../../utils/image/logo.svg'

function Navbar() {
  return (
    <>
      <NavBar className={style.navbar}  variant="dark">
          {/* <NavBar.Brand className={style.left} href="/">K M</NavBar.Brand> */}
          <a href='/'>
            <img className={style.logo} src={logo}  alt="Image" />
          </a>
          <Nav className={style.mid}>
            <Nav.Link className={style.mid_opt} href="/" >Home</Nav.Link>
            <Nav.Link className={style.mid_opt} href="/about">About</Nav.Link>
            <Nav.Link className={style.mid_opt} href="/contact">Contact Us</Nav.Link>
          </Nav>
      </NavBar>
    </>
  );
}

export default Navbar;