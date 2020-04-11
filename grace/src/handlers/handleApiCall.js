import React from 'react';

class HandleApiCall extends React.Component {
  state = {
    error: null,
    isLoading: true,
    items: [],
  }

  fetchData() {
    fetch('https://raw.githubusercontent.com/stevenbister/grace-project/master/backend/whatsapp-chat.json')
      .then(response => response.json())
      .then(
        data =>
          this.setState({
            items: data,
            isLoading: false,
          })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { items, isLoading } = this.state;
    if( isLoading === false) {
      return (
        <React.Fragment>
          <h2>{items.length}</h2>
          <div>
            <p>{items[0].meta.name}</p>
            <p>{items[0].message}</p>
            <p>{items[0].meta.date} {items[0].meta.time}</p>
          </div>
        </React.Fragment>
      );
    } else {
      return <p>Loading...</p>
    }
  }
}

export default HandleApiCall;
