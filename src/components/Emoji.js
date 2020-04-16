import React from 'react';
import PropTypes from 'prop-types';

const Emoji = (props) => <p>{props.emoji}</p>

Emoji.propTypes = {
  emoji: PropTypes.array
}

export default Emoji;
