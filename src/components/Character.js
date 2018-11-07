import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Character extends Component {
  render() {
    const { name, server } = this.props;
    return (
      <React.Fragment>
        <h2>{name}</h2>
        <p>{server}</p>
      </React.Fragment>
    );
  }
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  server: PropTypes.string.isRequired
};

export default Character;
