import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  font-size: 14px;
  border: solid 1px red;
  display: grid;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Date = styled.span`
  text-align: right;
`;

const MessageText = styled.p`
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
