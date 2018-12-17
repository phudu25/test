import React, { Component } from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Navbar, Row} from "reactstrap";
import {Control, Errors, LocalForm} from "react-redux-form";

class CommentFormComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(values) {
        this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
        this.props.toggle();
    }
    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        return(
            <Modal isOpen={this.props.isModalOpen} toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Submit Comment</ModalHeader>
                <ModalBody>
                    <div className="container">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Label htmlFor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" name="rating"
                                            placeholder="Select ratring number"
                                            className="form-control"
                                            validators={{

                                            }}
                            >
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>
                            <Errors className="text-danger" model=".rating" show="touched"
                                    messages={{
                                        required: 'Required field',
                                    }}
                            />
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="author">Your name</Label>
                            <Control.text model=".author" id="author" name="author"
                                          placeholder="author"
                                          className="form-control"
                                          validators={{
                                              minLength: minLength(3), maxLength: maxLength(15)
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{
                                    minLength: 'The author field should at least be three characters long',
                                    maxLength: 'The author field should be less than or equal to 15 characters.'
                                }}
                            />
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="comment">Your comment</Label>
                            <Control.textarea model=".comment" id="comment" name="comment" rows='6'
                                          placeholder="comment"
                                          className="form-control"
                                          validators={{
                                          }}
                            />
                            <Errors
                                className="text-danger"
                                model=".author"
                                show="touched"
                                messages={{}}
                            />
                        </Row>
                        <Row className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                        </Row>
                    </LocalForm>
                        </div>
                </ModalBody>
            </Modal>
        );
    }
}

export default CommentFormComponent;