import React from 'react'

export default class RandomNumberButton extends React.Component {
  constructor (props) {
    super(props)

    // this.state = {
    //   number: ''
    // }

    this.handleClick = this.handleClick.bind(this)
  }

  // Let's generate a random number that won't go higher than the number of messages
  handleClick() {
    const number = Math.floor(Math.random() * this.props.max)

    // this.setState({
    //   number
    // })

    this.props.onClick(number)
    
  }

  render() {
    const { text } = this.props

    return <button onClick={this.handleClick}>{text}</button>
  }
}
