'use strict';
import React, {Component} from 'react'
import {Tabs} from 'uiw'

import Header from './common/header'

export default class write extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  //提交数据
  submit(key, e) {
    e.preventDefault();
  }

  render() {
    return (<div className='select'>
      <Header/>
      <div className='main'>
        <Tabs activeKey="1" onTabClick={(tab, key, e) => {
            console.log("=>", key, tab)
          }}>
          <Tabs.Pane label="稿件状态查询" key="1">
            <form className='form' onSubmit={this.submit.bind(this, 1)}>
              <p>
                <input type='text' placeholder='请输入稿件编号'/>
              </p>
              <input type='submit' value='提交稿件'/>
            </form>
          </Tabs.Pane>
          <Tabs.Pane label="文章查询" key="2">
            <form className='form' onSubmit={this.submit.bind(this, 2)}>
              <p>
                <select>
                  <option>中文标题</option>
                  <option>英文标题</option>
                </select>
              </p>
              <p>
                <input type='text' placeholder='请输入检索词'/>
              </p>
              <input type='submit' value='提交稿件'/>
            </form>
          </Tabs.Pane>
        </Tabs>
      </div>
    </div>)
  }
}
