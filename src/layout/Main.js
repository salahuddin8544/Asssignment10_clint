import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container ,Row,Col} from 'react-bootstrap';
import Header from '../components/Share/Header/Header';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
               <Row>
                    <Col lg="4" className='bg-warning'>

                    </Col>
                    <Col lg="8" className='bg-danger'>
                        <Outlet></Outlet>
                    </Col>
               </Row>
            </Container>
        </div>
    );
};

export default Main;