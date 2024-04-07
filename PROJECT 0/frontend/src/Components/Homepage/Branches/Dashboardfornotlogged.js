
import Navigation from "../Navigation/Navigation";
import { Container, Row, Col, Card,Button } from 'react-bootstrap';

const DasboardNL = () => {

    return(
        
             <>
             <Container>
                <Navigation/>
               
                <Row className="m-5">
                    <p>
                        Please login to continue..
                    </p>
                    <Col md={4}>
                    <Card className="bg-primary text-center p-5" >
                        <Card.Body>
                        <Card.Title>Todo List</Card.Title>
                        <Card.Text>Add your daily Todo list here to catchup your task</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="bg-secondary text-center p-5">
                        <Card.Body>
                        <Card.Title>Calculator</Card.Title>
                        <Card.Text>This is your Calculator save your task.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col md={4}>
                    <Card className="bg-danger text-center p-5">
                        <Card.Body>
                        <Card.Title>Box 3</Card.Title>
                        <Card.Text>This is the third box with a danger background color.</Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                    
             </Container>
                
               
        </>
            
        
    )
}

export default DasboardNL;






