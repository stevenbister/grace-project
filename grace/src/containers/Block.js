import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--${props => props.colour});
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 2rem 1rem;
  scroll-snap-align: start;
`;

const Block = props => <Wrapper colour={props.colour}>{props.children}</Wrapper>;

Block.propTypes = {
  colour: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default Block;
