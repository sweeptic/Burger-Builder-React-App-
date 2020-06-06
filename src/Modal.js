import React, { Component } from 'react'
import Aux from './_Aux';
import style from './Modal.module.css';
import Backdrop from './BackDrop';


export default class Modal extends Component {

   shouldComponentUpdate(nextProps, nextState) {
      return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
   }


   render() {
      return (
         <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
            <div
               className={style.Modal}
               style={{
                  transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                  opacity: this.props.show ? '1' : 0
               }}>
               {this.props.children}
            </div>
         </Aux>
      )
   }
}
