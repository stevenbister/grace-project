import React from 'react';
import {PropTypes, oneOfType} from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
  background: var(--${props => props.colour});
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 2rem 0;
  position: relative;
`;

const Block = props => {
  return <Wrapper colour={props.colour}>{props.children}</Wrapper>;

};

Block.propTypes = {
  colour: PropTypes.string,
  children: oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.element
  ])
}

export default Block;
