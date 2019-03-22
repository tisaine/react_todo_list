import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    render() {
        const {id, title} = this.props.todo;

        return (            
            <div className="itemlist">                
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind
                (this, id)} /> 
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} 
                style={btnStyle}> X </button>
                </p>
            </div>
                 )
    } 
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  }

  const btnStyle ={
      background: '#ff0000',
      color: '#fff',
      border: 'none',
      padding: '5px 9px',
      borderRadius: '50%',
      cursor: 'pointer',
      float: 'right'
  }

export default Todoitem