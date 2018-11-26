import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import DishDetail from './DishdetailComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    render() {
        const HomePage = () => {
            return(
                <Home
                />
            );
        }
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)} />
                <DishDetail selectedDish={this.state.selectedDish} />
                <Footer />
            </div>
        );
    }
}

export default Main;