'use strict';
import React, {Component} from 'react'

import Header from './common/header'

export default class write extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //提交数据
  submit(e){
    e.preventDefault();
  }

  render() {
    return (<div className='write'>
      <Header/>
      <div className='main'>
        <form className='form' onSubmit={this.submit.bind(this)}>
          <textarea placeholder='此处只征集微信相关稿件，如向杂志投稿，可以登录《中药药理与临床》官网'></textarea>
          <input type='submit' value='提交'/>
        </form>
      </div>
    </div>)
  }
}
