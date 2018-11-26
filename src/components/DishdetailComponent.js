import React, {Component} from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class DishDetail extends Component {
    renderDish(dish) {
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

    renderComments(comments) {
        if (comments != null) {
            return (
                <div>
                    <Card>
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            {comments.map(comment => (
                                <li>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {comment.date}</p>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        let dish = this.props.selectedDish;
        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            );
        }
    }
}


export default DishDetail;