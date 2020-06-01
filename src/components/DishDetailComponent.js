import React, { Component } from "react";
import Menu from "./MenuComponent";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  renderDish = ({ name, image, description }) => (
    <Card>
      <CardImg width="100%" top src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </Card>
  );

  renderComments = ({ comments }) => {
    if (!comments) {
      return <div></div>;
    }
    return (
      <div>
        <h4>Comments</h4>
        {comments.map(({ id, author, date, comment }) => (
          <div key={id}>
            <div>{comment}</div>
            <div>
              --{author}, {date}
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    if (!this.props.dish) {
      return <div></div>;
    }

    const { dish } = this.props;

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(dish)}</div>
        <div className="col-12 col-md-5 m-1">{this.renderComments(dish)}</div>
      </div>
    );
  }
}

export default DishDetail;
