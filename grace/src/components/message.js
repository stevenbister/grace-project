import React from 'react';

const Message = (props) => {
  const { name, message, date, time } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{message}</p>
      <p>{date} {time}</p>
    </div>
  )
}

export default Message;
