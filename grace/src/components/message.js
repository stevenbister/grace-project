import React from 'react';

export default function Message(props) {
  const { name, message, date, time } = props;

  return (
    <div>
      <p>{name}</p>
      <p>{message}</p>
      <p>{date} {time}</p>
    </div>
  )
}
