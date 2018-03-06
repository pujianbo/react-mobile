'use strict';
import React, {Component} from 'react'

import {Tips, ajax} from '../tools'
import Header from './common/header'
import Footer from './common/footer'
import Loadding from './common/loading'

import imgGood from '../Img/good.png'
import imgUser from '../Img/user.png'

export default class selectResult extends Component {
  constructor(props) {
    super(props)
    this.page = 1;
    this.dataLoad = 1;
    this.state = {
      dataLoad: 1,
      dataEnd: 0,
      dataNull: 0,
      comment: false
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

  //收展评论
  showComment(id) {
    console.log(id);
    this.setState({
      comment: !this.state.comment
    })
  }

  //点赞
  nice(id, e) {
    if (e.currentTarget.className.indexOf('niceed') == -1) {
      e.currentTarget.className = 'right niceed'
      Tips('点赞成功', 1)
    }
  }

  //评论
  comment(e) {
    e.preventDefault();
    this.setState({comment: false})
    Tips('评论成功')
  }

  render() {
    const {comment} = this.state
    return (<div className='selectresult'>
      <Header>
        <div className='title'>
          <img src={imgGood}/>
          <h5>中药大全</h5>
          <p>110话题<span>437成员</span>
          </p>
        </div>
      </Header>
      <div className='main'>
        <ul className='items'>
          <li>
            <div className='user clearfix'>
              <a className='lineblock'>
                <img src={imgUser}/>
                中医药专家
              </a>
            </div>
            <div className='txt'>
              请问贵杂志有没有临床医学专集这一刊？
            </div>
            <div className='info'>
              <ul className='chat'>
                <li>
                  <span>思域：</span>好像有哦，我曾经在哪里见过</li>
                <li>
                  <span>李然</span>回复了<span>思域：</span>是的，我也曾经看见过，可以去找一找</li>
                <li>
                  <span>陆战：</span>好像有哦，我曾经在哪里见过
                </li>
              </ul>
              <div className='clearfix other'>
                <time>2017-12-1 11:00</time>
                <span className='right review' onClick={this.showComment.bind(this, 34)}>4545</span>
                <span className='right' onClick={this.nice.bind(this, 2)}>234</span>
              </div>
            </div>
          </li>
          <li>
            <div className='user clearfix'>
              <a className='lineblock'>
                <img src={imgUser}/>
                中医药专家
              </a>
            </div>
            <div className='txt'>
              请问贵杂志有没有临床医学专集这一刊？
            </div>
            <div className='info'>
              <ul className='chat'>
                <li>
                  <span>思域：</span>好像有哦，我曾经在哪里见过</li>
                <li>
                  <span>李然</span>回复了<span>思域：</span>是的，我也曾经看见过，可以去找一找</li>
                <li>
                  <span>陆战：</span>好像有哦，我曾经在哪里见过
                </li>
              </ul>
              <div className='clearfix other'>
                <time>2017-12-1 11:00</time>
                <span className='right review' onClick={this.showComment.bind(this, 34)}>4545</span>
                <span className='right' onClick={this.nice.bind(this, 2)}>234</span>
              </div>
            </div>
          </li>
          <li>
            <div className='user clearfix'>
              <a className='lineblock'>
                <img src={imgUser}/>
                中医药专家
              </a>
              <tag className='right'>未回复</tag>
            </div>
            <div className='txt'>
              又是别人家的大学食堂！哈工大食堂惊艳亮相】新学期开始了，走进哈尔滨工业大学友来餐厅，会不时地听到师生的惊呼声，经过改造的餐厅里，形式各异的餐桌、餐椅，错落有致地排列在各个区域。各种复古吊灯、花式吊灯、高低有序地悬挂在棚顶，美轮美奂。
            </div>
            <div className='info'>
              <div className='clearfix other'>
                <time>2017-12-1 11:00</time>
                <span className='right review' onClick={this.showComment.bind(this, 34)}>4545</span>
                <span className='right' onClick={this.nice.bind(this, 2)}>234</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {
        comment
          ? [
            <div className='task' onClick={this.showComment.bind(this, 0)}/>,
            <Footer>
              <form className='sltcomment clearfix' onSubmit={this.comment.bind(this)}>
                <input className='left' type='text' placeholder='评论信息'/>
                <input className='right' type='submit' value='提交'/>
              </form>
            </Footer>
          ]
          : null
      }
    </div>)
  }
}
