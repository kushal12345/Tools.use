import React, { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';

import axios from "axios";
import "../../TODO/Body/Style/style.css"
import { useNavigate  } from 'react-router-dom';
import { useContext } from "react";
import AuthContext from "../../../Authentication/AuthContext";
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import Navigation from "../../../Homepage/Navigation/Navigation";



function ShowTodo(){
    const navigate = useNavigate();
    const { isAuthenticated ,id} = useContext(AuthContext);
    const [todo, setTodos] = useState([]);
    const  params = useParams()


    useEffect(()=>{
        if(!isAuthenticated) {
            navigate("/Login");
        }else {
            const fetchData = async () => {
              try {
                console.log(params.id);
                const response = await axios.get(`http://localhost:3001/api/show-todo/${params.id}`);
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
    <>
    <Navigation/>
    {"Todo ID no : "  + params.id}
    <Container className="mt-5">
        <Row>
            <Col md={5}>
            <div className="form-group">
                        <h4>Top 3 Priorities</h4>
                        <input
                         type="text" readonly="readonly"
                        name="T3_1"
                        id="T3_1"
                        defaultValue ={todo.T3_1}
 
                        className="form-control"
                        placeholder="Priority 1"
                        />
                        <input
                         type="text" readonly="readonly"
                        name="T3_2"
                        id="T3_2"
                        defaultValue ={todo.T3_2}
 
                        className="form-control mt-2"
                        placeholder="Priority 2"
                        />
                        <input
                         type="text" readonly="readonly"
                        name="T3_3"
                        id="T3_3"
                        defaultValue ={todo.T3_3}
 
                        className="form-control mt-2"
                        placeholder="Priority 3"
                        />
                    </div>


                  <div className="form-group">
                    <h4>Todo List</h4>
                    <input
                       type="text" readonly="readonly"
                      name="TL_1"
                      id="TL_1"
                      defaultValue ={todo.TL_1}
                        
                      className="form-control"
                      placeholder="TODO List 1"
                    />
                    <input
                       type="text" readonly="readonly"
                      name="TL_2"
                      id="TL_2"
                      defaultValue ={todo.TL_2}
                        
                      className="form-control mt-2"
                      placeholder="TODO List 2"
                    />
                    <input
                       type="text" readonly="readonly"
                      name="TL_3"
                      id="TL_3"
                      defaultValue ={todo.TL_3}
                        
                      className="form-control mt-2"
                      placeholder="TODO List 3"
                    />
                    <input
                       type="text" readonly="readonly"
                      name="TL_4"
                      id="TL_4"
                      defaultValue ={todo.TL_4}
                        
                      className="form-control mt-2"
                      placeholder="TODO List 4"
                    />
                    <input
                       type="text" readonly="readonly"
                      name="TL_5"
                      id="TL_5"
                      defaultValue ={todo.TL_5}
                        
                      className="form-control mt-2"
                      placeholder="TODO List 5"
                    />
                  </div>


                  <div className="form-group">
                    <h4>Don't Forget</h4>
                    <input
                       type="text" readonly="readonly"
                      name="DF_1"
                      id="DF_1"
                      defaultValue ={todo.DF_1}
                        
                      className="form-control"
                      placeholder="Don't Forget 1"
                    />
                    <input
                       type="text" readonly="readonly"
                      name="DF_2"
                      id="DF_2"
                      defaultValue ={todo.DF_2}
                        
                      className="form-control mt-2"
                      placeholder="Don't Forget 2"
                    />
                  </div>
            </Col>

            <Col md={7}>
            <div className="form-group">
                    <h4>Plan's and Schedule</h4>
                    <div className="row">
                      <div className="col-md-3">
                        6:00 AM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_6"
                          id="PS_6"
                          defaultValue ={todo.PS_6}
   
                          className="form-control"
                          placeholder="What do you plan to do at 6"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        7:00 AM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_7"
                          id="PS_7"
                          defaultValue ={todo.PS_7}
   
                          className="form-control"
                          placeholder="What do you plan to do at 7"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        8:00 AM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_8"
                          id="PS_8"
                          defaultValue ={todo.PS_8}
   
                          className="form-control"
                          placeholder="What do you plan to do at 8"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        9:00 AM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_9"
                          id="PS_9"
                          defaultValue ={todo.PS_9}
   
                          className="form-control"
                          placeholder="What do you plan to do at 9"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        10:00 AM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_10"id="PS_10"
                          defaultValue ={todo.PS_10}
   
                          className="form-control"
                          placeholder="What do you plan to do at 10"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        11:00 AM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_11"
                          id="PS_11"
                          defaultValue ={todo.PS_11}
   
                          className="form-control"
                          placeholder="What do you plan to do at 11"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        12:00 PM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_12"
                          id="PS_12"
                          defaultValue ={todo.PS_12}
   
                          className="form-control"
                          placeholder="What do you plan to do at 12"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        1:00 PM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_1"
                          id="PS_1"
                          defaultValue ={todo.PS_1}
   
                          className="form-control"
                          placeholder="What do you plan to do at 1"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        2:00 PM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_2"
                          id="PS_2"
                          defaultValue ={todo.PS_2}
   
                          className="form-control"
                          placeholder="What do you plan to do at 2"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        3:00 PM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_3"
                          id="PS_3"
                          defaultValue ={todo.PS_3}
   
                          className="form-control"
                          placeholder="What do you plan to do at 3"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        4:00 PM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_4"
                          id="PS_4"
                          defaultValue ={todo.PS_4}
   
                          className="form-control"
                          placeholder="What do you plan to do at 4"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        5:00 PM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_5"
                          id="PS_5"
                          defaultValue ={todo.PS_5}
   
                          className="form-control"placeholder="What do you plan to do at 5"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">
                        6:00 PM
                      </div>
                      <div className="col-md-9">
                        <input
                           type="text" readonly="readonly"
                          name="PS_6P"
                          id="PS_6P"
                          defaultValue ={todo.PS_6P}
   
                          className="form-control"
                          placeholder="What do you plan to do at 6"
                        />
                      </div>
                    </div>
                  
                </div>
            </Col>

        </Row>
    </Container>
            
    </>

    }
    </>
);
}

export default ShowTodo;

