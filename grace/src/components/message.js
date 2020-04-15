import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  background: var(--message-colour);
  border: solid var(--message-colour) red;
  border-radius: 5px;
  padding: 5px 20px 5px 5px;
  margin-left: 10px;
  font-size: 14px;
  grid-column: 1 / 3;
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
`;

const MessageText = styled.p`
  display: block;
`;

const Message = (props) => {
  const { name, message, date, time } = props;

  return (
    <Container>
      <Name>{name}</Name>
      <MessageText>{message}</MessageText>
      <Date>{date} {time}</Date>
    </Container>
  )
}

export default Message;
