import React,{useContext, useState} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../image/logo.png';
import  {lightTheme,darkTheme,GlobalStyles} from '../theme/Theme';
import styled, { ThemeProvider } from "styled-components";
import { FaSun,FaStarAndCrescent } from "react-icons/fa";
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const signOut = ()=>{
    logOut()
    .then(()=>{})
    .catch((error)=>{
      console.error(error);
    })
    console.log('clicked');
  }
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
        <Container>
        <Image className='me-2'
            src={img}
            roundedCircle
            style={{width:'50px'}}
          ></Image>
          <Navbar.Brand><Link to='/'>Diploma Engineering</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Courses</Nav.Link>
              <Nav.Link href="#pricing">FAQ</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
              <Nav.Link href="#pricing"> 
              {
                theme === "light" ?
                <>
                <Button className='m-0 p-0' onClick={() => themeToggler()}>Dark <FaStarAndCrescent></FaStarAndCrescent></Button>
                
                </>
                :
                <>
                
                <Button className='m-0 p-0' onClick={() => themeToggler()}>Light <FaSun></FaSun></Button>
                </>
              }
              </Nav.Link>
            
            </Nav>
            <Nav>
              <>
                {
                  user?.uid?
                  <>
                    <Button onClick={signOut}>Log out</Button>
                  </>
                  :
                  <>
                       <Link onClick={signOut} to='/login'>Login</Link>
              <Link  to='/register'>
               Register
              </Link>
                  </>
                }
              </>
              <Link>
              {
                user?.photoURL?
                <Image
                title={user?.displayName}
                roundedCircle
                src={user.photoURL}
                style={{height:'30px'}}
                  ></Image>
                :
                <FaUser></FaUser>
              }
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      </StyledApp>
    </ThemeProvider>
    );
};

export default Header;