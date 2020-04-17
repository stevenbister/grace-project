import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import Message from './components/message';
import Counter from './components/Counter';
import Emoji from './components/Emoji'
import RandomNumberButton from './components/RandomNumberButton';
import Block from './containers/Block';
import './App.css';

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
          <Parallax ref={ref => (this.parallax = ref)} pages={5} >
              <Block colour="purple">
                <ParallaxLayer offset={0.5} speed={0.5}>
                    <Counter count={messages.length} />
                </ParallaxLayer>
              </Block>

            <Block colour="peach">
              <ParallaxLayer offset={0.5} speed={0.5}>
                <Counter count={messages.map(m => m.message).join(',').match(/❤️/gi).length} item={`❤️'s`} />

                <Emoji emoji={messages.map(m => m.message).join(',').match(/❤️/gi)} />
              </ParallaxLayer>
            </Block>

            <Block colour="green">
              <ParallaxLayer offset={1} speed={0.75}>
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
              </ParallaxLayer>
            </Block>

            <Block colour="blue">
              <RandomNumberButton text={'Generate a random message'} max={messages.length} onClick={this.handleRandomNumber}/>
              {randomMessage}
            </Block>

            <Block colour="peach">
            <ParallaxLayer offset={1.5} speed={0.5}>
              <Counter count={messages.map(m => m.message).join(',').match(/love you/gi).length} item={`love you's`} />

              <Message
                key={messages[2454].id}
                name={messages[2454].meta.name} 
                message={messages[2454].message} 
                date={messages[2454].meta.date} 
                time={messages[2454].meta.time} 
              />
            </ParallaxLayer>

            </Block>
          </Parallax>
        </React.Fragment>
      );
    }

    return <p>Loading...</p>
  }  
}
