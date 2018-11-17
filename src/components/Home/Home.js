import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitValueAction } from '../../actions/myAction';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { inputVal: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleSubmit() {
    const { inputVal } = this.state;
    this.props.submitValueAction(inputVal);
  }

  render() {
    const { inputVal } = this.state;
    const { inputValueFromReducer } = this.props;
    return (
      <div>
        <input value={inputVal} onChange={this.handleChange} /><br />
        <button type="button" onClick={this.handleSubmit}>Submit</button> <br />
        <span>Your value : {inputValueFromReducer}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { inputValueFromReducer } = state.myReducer;
  return { inputValueFromReducer };
};

export default connect(mapStateToProps, { submitValueAction })(Home);
