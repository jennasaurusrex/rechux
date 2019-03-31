import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearJokes, getJokes } from './redux';

class Joke extends Component {
  state = {
    jokes: '',
  };

  componentDidMount() {
    this.props.getJokes();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.jokes
            ? this.props.jokes.map((joke) => (
                <li style={{ listStyle: 'none' }} key={joke.id}>
                  {joke.joke}
                </li>
              ))
            : ''}
        </ul>
        <button onClick={this.props.clearJokes}>Clear</button>
        <button onClick={this.props.getJokes}>Get Jokes haha</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state: ', state);
  return {
    jokes: state.jokes && state.jokes.value,
  };
};

const mapDispatchToProps = {
  getJokes,
  clearJokes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Joke);
