'use strict';
import React, {Component} from 'react'
import '../Scss/index.scss'

export default class index extends Component {
  render() {
    return (<div className='index clearfix'>
      <ul>
        <li>
          <a href='#/read'>期刊阅读</a>
        </li>
        <li>
          <a href='#/select'>在线查询</a>
        </li>
        <li>
          <a href='#/selectresult'>查询结果</a>
        </li>
        <li>
          <a href='#/write'>微信投稿</a>
        </li>
      </ul>
    </div>)
  }
}
