import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { CheckoutSummary } from './CheckoutSummary';
import ContactData from './ContactData';

export default class CheckOut extends Component {
   state = {
      ingredients: null,
      price: 0
   }

   componentWillMount() {
      const query = new URLSearchParams(this.props.location.search)
      const ingredients = {};
      let price = 0;
      for (let param of query.entries()) {
         if (param[0] === 'price') {
            price = param[1];
         } else {
            ingredients[param[0]] = +param[1];
         }
      }
      this.setState({ ingredients: ingredients, totalPrice: price })
   }

   checkoutCancelledHandler = () => {
      this.props.history.goBack();
   }

   checkoutContinuedHandler = () => {
      console.log(this.props.match.path)
      this.props.history.replace('/checkout/contact-data')
   }

   render() {
      return (
         <div>
            <CheckoutSummary
               ingredients={this.state.ingredients}
               checkoutCancelled={this.checkoutCancelledHandler}
               checkoutContinued={this.checkoutContinuedHandler} />
            <Route
               path={this.props.match.path + '/contact-data'}
               render={(props) => (
                  <ContactData
                     ingredients={this.state.ingredients}
                     price={this.state.totalPrice} {...props} />)} />
         </div>
      )
   }
}
