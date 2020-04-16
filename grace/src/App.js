import React from 'react';
import styled from 'styled-components';
import Message from './components/Message';
import Counter from './components/Counter';
import Emoji from './components/Emoji'
import RandomNumberButton from './components/RandomNumberButton';
import Block from './containers/Block';
import './App.css';

const Heading2 = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 1.6rem;
`;

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
          <Block colour="purple">
            <Counter count={messages.length} />
          </Block>

          <Block colour="peach">
            <Counter count={messages.map(m => m.message).join(',').match(/❤️/gi).length} item={`❤️'s`} />

            <Heading2>That looks like this...</Heading2>
            <Emoji emoji={messages.map(m => m.message).join(',').match(/❤️/gi)} />
          </Block>

          <Block colour="green">
            <Heading2>These were the first messages we sent each other after you gave me your number</Heading2>
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

          <Block colour="blue">
            <RandomNumberButton text={'Generate a random message'} max={messages.length} onClick={this.handleRandomNumber}/>
            {randomMessage}
          </Block>

          <Block colour="peach">
            <Counter count={messages.map(m => m.message).join(',').match(/love you/gi).length} item={`love you's`} />  
          </Block>
        </React.Fragment>
      );
    } else {
      return <p>Loading...</p>
    }
  }  
}
