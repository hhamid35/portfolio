import React, { useState, useEffect} from 'react';
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Particle from '../Particle/Particle';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../../Assets/HamidHarisResume.pdf';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const resumeLink = 'https://raw.githubusercontent.com/hhamid35/portfolio/main/src/Assets/HamidHarisResume.pdf';

function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const removeTextLayerOffset = () => {
        console.log('onLoadSuccess');
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
        textLayers.forEach(layer => {
            const { style } = layer;
            style.display = 'none';
        });
    }

    return (
        <div>
            <Container fluid className='resume-section'>
                <Particle />
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button
                        variant='primary'
                        href={pdf}
                        target='_blank'
                        style={{ maxWidth: '250px' }}
                    >
                        <AiOutlineDownload style={{ color: 'black' }} />
                        <span style={{ fontSize: '1.2em', color: 'black' }} >&nbsp;Download Resume</span>
                    </Button>
                </Row>
                <Row className='resume'>
                    <Document file={ resumeLink } className='d-flex justify-content-center'>
                        <Page onLoadSuccess={removeTextLayerOffset} wrap={false} pageNumber={1} scale={ width > 786 ? 1.7 : 0.6 } />
                    </Document>
                </Row>
                <Row style={{ justifyContent: 'center', position: 'relative' }}>
                    <Button
                        varian='primary'
                        href={pdf}
                        target='_blank'
                        style={{ maxWidth: '250px' }}
                    >
                        <AiOutlineDownload style={{ color: 'black' }} />
                        <span style={{ fontSize: '1.2em', color: 'black' }} >&nbsp;Download Resume</span>
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;