'use strict';
import React, {Component} from 'react'

import Header from './common/header'
import Loadding from './common/loading'

import imgGood from '../Img/good.png'

export default class read extends Component {
  constructor(props) {
    super(props)
    this.page = 1;
    this.dataLoad = 1;
    this.state = {
      dataLoad: 1,
      dataEnd: 0,
      dataNull: 0
    }
  }

  componentWillMount() {
    this.getData();
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  componentDidMount() {
    window.onscroll = () => {
      const {dataEnd, dataNull} = this.state;
      if (this.dataLoad == 1 || dataEnd == 1 || dataNull == 1)
        return;
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      if (document.body.clientHeight - window.innerHeight - scrollTop <= 100) {
        this.page++;
        this.getData();
      }
    }
  }

  //获取数据
  getData() {
    return
    ajax({
      url: '/test/',
      data: {
        id: 23
      },
      success: (res => {
        console.log(res);
      })
    })
  }

  //选择年份
  sltYear() {
    console.log(this.refs.year.value);
  }

  render() {
    return (<div className='read'>
      <Header/>
      <div className='main'>
        <label className='sltbar clearfix'>
          <span className='left'>选择年份</span>
          <select className='right' onChange={this.sltYear.bind(this)} ref='year'>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
          </select>
        </label>
      </div>
      <ul className='books clearfix'>
        <li>
          <a className='item'>
            <img src={imgGood}/>
            <p>第42卷 第14期</p>
          </a>
        </li>
        <li>
          <a className='item'>
            <img src={imgGood}/>
            <p>第42卷 第14期</p>
          </a>
        </li>
        <li>
          <a className='item'>
            <img src={imgGood}/>
            <p>第42卷 第14期</p>
          </a>
        </li>
        <li>
          <a className='item'>
            <img src={imgGood}/>
            <p>第42卷 第14期</p>
          </a>
        </li>
        <li>
          <a className='item'>
            <img src={imgGood}/>
            <p>第42卷 第14期</p>
          </a>
        </li>
        <li>
          <a className='item'>
            <img src={imgGood}/>
            <p>第42卷 第14期</p>
          </a>
        </li>
      </ul>
    </div>)
  }
}
