import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  grid-column: 2 / 3;
  border: solid 2px var(--peach);
  color: var(--peach);
  background: transparent;
  padding: 15px 10px;
  margin-bottom: 20px;
  font-size: 1.3rem;
  box-shadow: 2px 2px 2px #7f7979;
`;

const RandomNumberButton = (props) => {
  // Let's generate a random number that won't go higher than the number of messages
  const handleClick = () => props.onClick(Math.floor(Math.random() * props.max));

  const { text } = props;

  return <Button onClick={handleClick}>{text}</Button>;
}

export default RandomNumberButton;
