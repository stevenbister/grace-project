import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  --purple: rgb(165, 115, 221);
  --green: rgb(155, 247, 169);
  --peach: rgb(252, 224, 181);
  --blue: rgb(141, 177, 244);

  background: var(--${props => props.colour});
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-auto-flow: column dense;
  align-items: center;
  padding: 2rem 0;
  scroll-snap-align: start;

  h1, h2, h3, p {
    grid-column: 2 / 3;
  }
`;

const Block = props => <Wrapper colour={props.colour}>{props.children}</Wrapper>;

export default Block;
