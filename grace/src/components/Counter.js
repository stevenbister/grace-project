import React from 'react';

export default function Counter(props) {
  return <p><span>{props.count}</span> {props.item}</p>
}

Counter.defaultProps = {
  item: 'messages',
}
