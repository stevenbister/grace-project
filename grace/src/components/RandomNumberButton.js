import React from 'react'

const RandomNumberButton = (props) => {
  // Let's generate a random number that won't go higher than the number of messages
  const handleClick = () => props.onClick(Math.floor(Math.random() * props.max));

  const { text } = props;

  return <button onClick={handleClick}>{text}</button>;
}

export default RandomNumberButton;
