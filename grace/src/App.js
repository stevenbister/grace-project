import React from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import Emoji from './components/Emoji'
import RandomNumberButton from './components/RandomNumberButton';
import Block from './containers/Block';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoading: true,
      messages: [],
      number: '',
    }

    this.handleRandomNumber = this.handleRandomNumber.bind(this);
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

  handleRandomNumber(number) {
    this.setState({number})
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { messages, number, isLoading } = this.state;
    let randomMessage;

    // If number is set generate random message
    if (number) {
      randomMessage = <Message
        key={messages[number].id}
        name={messages[number].meta.name} 
        message={messages[number].message} 
        date={messages[number].meta.date} 
        time={messages[number].meta.time} 
      />
    }

    if (isLoading === false) {
      return (
        <React.Fragment>
          <Block>
            <Counter count={messages.length} />
          </Block>

          <Block>
            <Counter count={messages.map(m => m.message).join(',').match(/❤️/gi).length} item={'❤️'} />

            <h2>That looks like this...</h2>
            <Emoji emoji={messages.map(m => m.message).join(',').match(/❤️/gi)} />
          </Block>

          {/* <Counter count={messages.map(m => m.message).join(',').match(/love you/gi).length} item={`love you's`} /> */}

          <Block>
            <h2>These were the first messages we sent each other after you gave me your number</h2>
            {/* Let's get the first X messages */}
            {messages.slice(0, 2).map(m => {
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
          </Block>

          <Block>
            <RandomNumberButton text={'Generate a random message'} max={messages.length} onClick={this.handleRandomNumber}/>
            {randomMessage}
          </Block>        
        </React.Fragment>
      );
    } else {
      return <p>Loading...</p>
    }
  }  
}
