import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const P = styled.p`
  margin: 0 1rem;
`

const Emoji = (props) => <P>{props.emoji}</P>

Emoji.propTypes = {
  emoji: PropTypes.array
}

export default Emoji;
