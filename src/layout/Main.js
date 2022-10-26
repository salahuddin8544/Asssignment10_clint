import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container ,Row,Col} from 'react-bootstrap';
import Header from '../components/Share/Header/Header';
import LeftSide from '../components/Share/LeftSide/LeftSide';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
               <Row>
                    <Col lg="2" className=''>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg="10" className=''>
                        <Outlet></Outlet>
                        
                    </Col>
               </Row>
            </Container>
        </div>
    );
};

export default Main;