import React, { useState } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "./Style/style.css";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import { useContext } from "react";
import AuthContext from "../../../Authentication/AuthContext";

function Bodys(){
    const navigate = useNavigate();
    const { AuthUser, id ,counterid} = useContext(AuthContext);

    

    const [todo, setTodo] = useState({
        User: AuthUser,
        id:id,
        T3_1:"",
        T3_2:"",
        T3_3:"",

        TL_1:"",
        TL_2:"",
        TL_3:"",
        TL_4:"",
        TL_5:"",

        DF_1:"",
        DF_2:"",

        PS_6:"",
        PS_7:"",
        PS_8:"",
        PS_9:"",
        PS_10:"",
        PS_11:"",
        PS_12:"",
        PS_1:"",
        PS_2:"",
        PS_3:"",
        PS_4:"",
        PS_5:"",
        PS_6P:""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setTodo({
           ...todo,
            [name]:value 
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.PS_6 && todo.PS_7 && todo.PS_8 && todo.PS_9 && todo.PS_10 && todo.PS_11 && todo.PS_12 && todo.PS_1 && todo.PS_2 && todo.PS_3 && todo.PS_4 && todo.PS_5 && todo.PS_6P){
            axios.post("http://localhost:3001/todo",{...todo, User:AuthUser})
           .then(res=>{
                console.log(res);
                counterid(id);
                // navigate codde
                navigate("/");
            })
           .catch(err => {
                console.error(err);
              });
        }
    }


return(
    <Container className="mt-5">
        <form onSubmit={handleSubmit}>
        <Row>
            <Col md={5}>
            <div className="form-group">
                        <h4>Top 3 Priorities</h4>
                        <input
                        type="text"
                        name="T3_1"
                        id="T3_1"
                        value={todo.T3_1}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="Priority 1"
                        />
                        <input
                        type="text"
                        name="T3_2"
                        id="T3_2"
                        value={todo.T3_2}
                        onChange={handleChange}
                        className="form-control mt-2"
                        placeholder="Priority 2"
                        />
                        <input
                        type="text"
                        name="T3_3"
                        id="T3_3"
                        value={todo.T3_3}
                        onChange={handleChange}
                        className="form-control mt-2"
                        placeholder="Priority 3"
                        />
                    </div>


                  <div className="form-group">
                    <h4>Todo List</h4>
                    <input
                      type="text"
                      name="TL_1"
                      id="TL_1"
                      value={todo.TL_1}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="TODO List 1"
                    />
                    <input
                      type="text"
                      name="TL_2"
                      id="TL_2"
                      value={todo.TL_2}
                      onChange={handleChange}
                      className="form-control mt-2"
                      placeholder="TODO List 2"
                    />
                    <input
                      type="text"
                      name="TL_3"
                      id="TL_3"
                      value={todo.TL_3}
                      onChange={handleChange}
                      className="form-control mt-2"
                      placeholder="TODO List 3"
                    />
                    <input
                      type="text"
                      name="TL_4"
                      id="TL_4"
                      value={todo.TL_4}
                      onChange={handleChange}
                      className="form-control mt-2"
                      placeholder="TODO List 4"
                    />
                    <input
                      type="text"
                      name="TL_5"
                      id="TL_5"
                      value={todo.TL_5}
                      onChange={handleChange}
                      className="form-control mt-2"
                      placeholder="TODO List 5"
                    />
                  </div>


                  <div className="form-group">
                    <h4>Don't Forget</h4>
                    <input
                      type="text"
                      name="DF_1"
                      id="DF_1"
                      value={todo.DF_1}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Don't Forget 1"
                    />
                    <input
                      type="text"
                      name="DF_2"
                      id="DF_2"
                      value={todo.DF_2}
                      onChange={handleChange}
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
                          type="text"
                          name="PS_6"
                          id="PS_6"
                          value={todo.PS_6}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_7"
                          id="PS_7"
                          value={todo.PS_7}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_8"
                          id="PS_8"
                          value={todo.PS_8}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_9"
                          id="PS_9"
                          value={todo.PS_9}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_10"id="PS_10"
                          value={todo.PS_10}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_11"
                          id="PS_11"
                          value={todo.PS_11}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_12"
                          id="PS_12"
                          value={todo.PS_12}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_1"
                          id="PS_1"
                          value={todo.PS_1}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_2"
                          id="PS_2"
                          value={todo.PS_2}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_3"
                          id="PS_3"
                          value={todo.PS_3}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_4"
                          id="PS_4"
                          value={todo.PS_4}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_5"
                          id="PS_5"
                          value={todo.PS_5}
                          onChange={handleChange}
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
                          type="text"
                          name="PS_6P"
                          id="PS_6P"
                          value={todo.PS_6P}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="What do you plan to do at 6"
                        />
                      </div>
                    </div>
                  
                </div>
            </Col>

        </Row>
        <Row className="mt-1">
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </Row>
        </form>
    </Container>
);
}

export default Bodys;

