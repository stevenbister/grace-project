import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

const Paragraph = styled.p`
  margin: 0 1rem;
`;

const AnimatedSpan = styled(animated.span)`
  font-family: var(--heading-font);
  font-size: 22vw;
`

const Counter = (props) => {
  const spring = useSpring({ number: props.count, from: { number: 0 } })

  return <Paragraph><AnimatedSpan>{spring.number.interpolate(number => Math.floor(number))}</AnimatedSpan> {props.item}</Paragraph>
}

Counter.defaultProps = {
  item: 'messages',
}

Counter.propTypes = {
  count: PropTypes.number,
  item: PropTypes.string
}

export default Counter;
