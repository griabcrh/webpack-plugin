import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import React, { Component } from 'react';

@observer
class Demo extends Component {

  @observable value = '1';

  componentDidMount() {
    debugger
    console.log('DidMount$,: ',this.value);
  }

  componentWillUpdate() {
    debugger
    console.log('WillUpdate ',this.value);
  }

  componentDidUpdate() {
    debugger
    console.log('DidUpdate ',this.value);
  }
  
  render(){
    return (
      <div>
        <div>test data </div>
        <input value={this.value} onChange={e => this.handleInputValue(e.target.value) } />
      </div>
    )
  }

  @action
  handleInputValue = e => {
    debugger
    this.value = e;
  };

  // autorun(() => {
  //   console.log('autorun ', this.value);
  // });
}

export default Demo;