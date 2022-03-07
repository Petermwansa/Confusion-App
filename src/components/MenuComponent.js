import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        //then define a state for the component which stores the properties that we can make use of
        this.state = {
            selectedDish: null
        };

    }


    renderDish(dish) {
        if(dish != null) {  
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardTitle heading>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        //if the selected dish is null, nothing will be rendered on hte screen
        else {
            return(
                <div></div>
            )
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {

        //then here we define the menu
        //for every dish I will return
        const menu = this.props.dishes.map((dish) => {
            return (
                //the key will identify each item uniquely since each item has a unique id
                <div key={dish.id}  className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)} className="d-flex align-items-center">
                           <CardImg width="100%" src={dish.image} alt={dish.name} />
                       <CardImgOverlay body className="flex-grow-1 ms-3">
                           <CardTitle heading>{dish.name}</CardTitle>
                       </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return ( 
            <div className="container">
                <div className="row">
                        {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}


export default Menu;