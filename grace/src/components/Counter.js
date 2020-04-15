import React from 'react';

const Counter = (props) => <p><span>{props.count}</span> {props.item}</p>

Counter.defaultProps = {
  item: 'messages',
}

export default Counter;
