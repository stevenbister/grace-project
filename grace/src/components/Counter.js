import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
  grid-column: 2 / 3;
`;

const Span = styled.span`
  font-family: var(--heading-font);
  font-size: 22vw;
`

const Counter = (props) => <Paragraph><Span>{props.count}</Span> {props.item}</Paragraph>

Counter.defaultProps = {
  item: 'messages',
}

export default Counter;
