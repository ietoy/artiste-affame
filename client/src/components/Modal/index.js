import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
      console.log(this.props);
    // // Render nothing if the "show" prop is false
if( !this.props.show){
    return null;
}
    return (
        <div>
       <h1>Log In</h1>
       {this.props.children}
            <button onClick={this.props.onClose}>
              Close
            </button>
         
        </div>
  
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;