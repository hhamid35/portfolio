import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Particle from '../Particle/Particle';

function Home()  {
    return (
        <section>
            <Container fluid className='home-section' id='home'>
                <Particle />
                <Container className='home-container'>
                    <Row>
                        <Col md={7} className='home-header'>
                            <h1 style={{ paddingBottom: 15}} className='heading'>
                                Hi There!{' '}
                                <span className='wave' role='img' aria-labelledby='wave'>
                                    👋🏻
                                </span>
                            </h1>
                            <h1 className='heading-name'>
                                I'M
                                <strong className='main-name'> HAMID HARIS</strong>
                            </h1>
                            <div style={{ padding: 50, textAlign: 'left' }}>
                                
                            </div>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 20 }}>

                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Home;