import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image1 from '../imagen/image1.png';

function BasicExample() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Buzo/Sudadera de corte oversize, confeccionada en algodón frisado negro y beige.
                Cuello redondo, manga larga con puños, detalle de cinta.
                Presentación con bordado en frente a contra tono.

                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    );
}

export default BasicExample;