import Navigation from "../Navigation/Navigation";
import {Link, Navigate } from 'react-router-dom';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import React,{useContext} from "react";
import AuthContext from "../../Authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const DasboardL = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name } = location.state || {};
    const { isAuthenticated,logout} = useContext(AuthContext);

    useEffect(()=>{
        if(!isAuthenticated) {
            navigate("/Login");
        }
    },[isAuthenticated, navigate]);

    return(
        <>
        {isAuthenticated &&
                    <>            
                        <Container>
                            <Navigation/>
                            <Row className="m-5">
                                <Col md={4}>
                               
                                <Link to={"/todo-dash"} state={{name:name}}>                                      
                                    <Card className="bg-primary text-center p-5" >
                                            <Card.Body>
                                            <Card.Title>Todo List</Card.Title>
                                            <Card.Text>Add your daily Todo list here to catchup your task</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
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
                   
                    }
     
               
        </>
    )
}

export default DasboardL;