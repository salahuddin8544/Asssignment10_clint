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
import './Header.css'
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
        <Navbar collapseOnSelect expand="lg" bg="" style={{backgroundColor:'#90B319',color:'white'}} variant="dark">
        <Container>
        <Image className='me-2'
            src={img}
            roundedCircle
            style={{width:'50px'}}
          ></Image>
          <Navbar.Brand><Link to='/' style={{textDecoration:'none',color:'white',fontWeight:'500'}}>Diploma Engineering</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link className='m-0 p-0' to='/' style={{textDecoration:'none',color:'white'}}>Courses</Link> </Nav.Link>
              <Nav.Link><Link className='m-0 p-0' to='/blog' style={{textDecoration:'none',color:'white'}}>Blog</Link> </Nav.Link>
              <Nav.Link><Link className='m-0 p-0' to='/faq' style={{textDecoration:'none',color:'white'}}>FAQ</Link> </Nav.Link>
              <Nav.Link href="#pricing"> 
              {
                theme === "light" ?
                <>
                <Button  className='m-0 p-0 ' style={{backgroundColor:'#90B319',border:'none'}} onClick={() => themeToggler()}>Dark <FaStarAndCrescent></FaStarAndCrescent></Button>
                
                </>
                :
                <>
                
                <Button className='m-0 p-0' style={{backgroundColor:'#90B319', border:'none'}} onClick={() => themeToggler()}>Light <FaSun></FaSun></Button>
                </>
              }
              </Nav.Link>
            
            </Nav>
            <Nav>
              <>
                {
                  user?.uid?
                  <>
                    <Button style={{backgroundColor:'#90B319', border:'none',color:'white'}} onClick={signOut}>Log out</Button>
                  </>
                  :
                  <>
                       <Link className='me-4' onClick={signOut} to='/login'style={{backgroundColor:'#90B319', border:'none', color:'white',textDecoration:'none'}} >Login</Link>
              <Link  to='/register' style={{backgroundColor:'#90B319',color:'white', border:'none',textDecoration:'none'}}>
               Register
              </Link>
                  </>
                }
              </>
              <Link className=''>
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