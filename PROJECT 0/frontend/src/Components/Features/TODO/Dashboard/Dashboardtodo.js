import {Container, Row, Col} from 'react-bootstrap';
import Navigation from '../../../Homepage/Navigation/Navigation';
import "./Style/Style.css";
import React,{useContext, useState} from "react";
import AuthContext from '../../../Authentication/AuthContext';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {Link } from 'react-router-dom';
import axios, * as others from 'axios';


const DashboardTodo = () => {
    const navigate = useNavigate();
    const { isAuthenticated, AuthUser} = useContext(AuthContext);
    const [todos, setTodos] = useState([]);


    useEffect(()=>{
        if(!isAuthenticated) {
            navigate("/Login");
        }else {
            const fetchData = async () => {
              try {
                const response = await axios.get('http://localhost:3001/api/todo-home');
                setTodos(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
      
            fetchData();
          }
        }, [isAuthenticated, navigate]);


    return(
        <>
        {isAuthenticated && 
            <Container>
                <Row>
                    <Navigation/>
                </Row>

                <Row className='py-3'>
                    <Col md={2}>
                        <Row>
                            <Link to={`/todo-home`}  state={{ name: AuthUser }}>
                                <button className="todo-mail-button">ADD NEW</button>
                            </Link>    
                        </Row>
                    </Col>

                    <Col md={10}>
                       <div className='filter_pagination'>
                            <Row>
                                        <Col md={3}>
                                            Refresh
                                        </Col>

                                        <Col md={6}>
                                            <b>Tools.use</b>
                                        </Col>

                                        <Col md={3}>
                                            Filter
                                        </Col>

                                    </Row>
                       </div>
                    </Col>
                 </Row>
                 
                {/*  main part */}
                 <Row >
                    <Col md={2}>
                        <Row >
                            <div className='Sidebarinbox'>
                                Favourites
                            </div>

                            <div className='Sidebarinbox'>
                                Draft
                            </div>
                        </Row>
                    </Col>

                    <Col md={10}>
                        {todos.map((todo, index) => (
                        <Link to={`/show-todo/${todo.id}`} key={index} state={{ name: AuthUser }}>
                        <div className="bodylist">
                            <Row>
                            <Col md={3}>
                                {todo.created}
                            </Col>

                            <Col md={3}>
                                {todo.id}
                            </Col>

                                    <Col md={3}>
                                        {todo.User}
                                    </Col>

                                    <Col md={3}>
                                        Actions
                                    </Col>
                            </Row>
                                </div>
                        </Link>
                                     ))}
                    </Col>
                 </Row>
               
            </Container>
}
        </>   
    );
}

export default DashboardTodo;