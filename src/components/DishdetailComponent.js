import React, { Component }   from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    renderDish({dish}) {
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        )
    }
    renderComments({comments}) {
        return (
            <div>
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map(comment => (
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {comment.date}</p>
                            </li>
                        ))}
                    </ul>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-lg"></span> Submit Comment</Button>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish({dish:this.props.dish})}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments({comments:this.props.comments})}
                    </div>
                </div>
                <CommentForm isModalOpen={this.state.isModalOpen} toggle={this.toggleModal} />
            </div>
        );
    }
}

export default DishDetail;