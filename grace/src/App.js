import React from 'react';
import Message from './components/Message';
import Counter from './components/Counter';

export default class App extends React.Component {
  state = {
    error: null,
    isLoading: true,
    messages: [],
  }

  fetchData() {
    fetch('https://raw.githubusercontent.com/stevenbister/grace-project/master/backend/whatsapp-chat.json')
      .then(response => response.json())
      .then(
        data =>
          this.setState({
            messages: data,
            isLoading: false,
          })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { messages, isLoading } = this.state;

    if( isLoading === false) {
      return (
        <React.Fragment>
          <Counter count={messages.length} />

          <Counter count={messages.map(m => m.message).join(',').match(/❤️/gi).length} item={'❤️'} />

          <Counter count={messages.map(m => m.message).join(',').match(/love you/gi).length} item={`love you's`} />

          <p>These were the first messages we sent each other after you gave me your number</p>
          {/* Let's get the first X messages */}
          {messages.slice(0, 2).map((m) => {
            const { id, message } = m
            const { name, date, time } = m.meta

            return <Message 
              key={id}
              name={name} 
              message={message} 
              date={date} 
              time={time}
            />
          })}

        </React.Fragment>
      );
    } else {
      return <p>Loading...</p>
    }
  }

  
}
