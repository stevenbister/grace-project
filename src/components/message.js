import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background: var(--message-colour);
  border: solid var(--message-colour) red;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #7f7979;
  font-size: 14px;
  padding: 5px 20px 5px 5px;
  margin: 1rem 1rem;
  line-height: 1.3;
  word-wrap: anywhere;
  ${props => props.name === 'Grace' ? 'margin-right: calc(1rem + 10px);' : 'margin-left: calc(1rem + 10px);' };
`;

const Name = styled.span`
  font-weight: 600;
  padding-bottom: 5px;
  display: block;
`;

const Date = styled.span`
  font-weight: 600;
  text-align: right;
  display: block;
  color: #7f7979;
  padding-top: 10px;
`;

const MessageText = styled.p`
  display: block;
`;

const Message = (props) => {
  const { name, message, date, time } = props;

  return (
    <Container name={name}>
      <Name>{name}</Name>
      <MessageText>{message}</MessageText>
      <Date>{date} {time}</Date>
    </Container>
  )
}

Message.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
}

export default Message;
