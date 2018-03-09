'use strict';
import React, {Component} from 'react'
import {
  Picker,
  List,
  Carousel,
  SearchBar,
  WhiteSpace,
  Modal,
  Toast,
  Tabs,
  DatePicker,
  Button
} from 'antd-mobile'

//ui
import 'antd-mobile/dist/antd-mobile.css';

export default class test extends Component {
  constructor() {
    super();
    this.state = {
      sValue: '',
      data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI']
    }
    this.seasons = [
      [
        {
          label: '2013',
          value: '2013'
        }, {
          label: '2014',
          value: '2014'
        }
      ],
      [
        {
          label: '春',
          value: '春'
        }, {
          label: '夏',
          value: '夏'
        }
      ]
    ];
    this.tabsTitle = [
      {
        title: '第一个选项卡'
      }, {
        title: '第二个选项卡'
      }, {
        title: '第三个选项卡'
      }
    ];
  }

  render() {
    const {sValue, data, date} = this.state
    const style = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '250px',
      backgroundColor: '#fff'
    }
    return (<div className='test2 clearfix'>
      <Carousel autoplay={true} infinite="infinite" selectedIndex={1} beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)} afterChange={index => console.log('slide to', index)}>
        {
          data.map(val => (<a key={val} href="http://www.alipay.com" className='block'>
            <img src={`https://zos.alipayobjects.com/rmsportal/${val}.png`} style={{
                width: '100%'
              }}/>
          </a>))
        }
      </Carousel>
      <SearchBar placeholder="搜索关键字" maxLength={8}/>
      <Tabs tabs={this.tabsTitle} initialPage={2} animated={false} useOnPan={false}>
        <div style={style}>第一个选项卡内容</div>
        <div style={style}>第二个选项卡内容</div>
        <div style={style}>第三个选项卡内容</div>
      </Tabs>
      <Picker data={this.seasons} title="选择季节" cascade={false} extra="请选择(可选)" value={sValue} onChange={v => this.setState({sValue: v})} onOk={v => this.setState({sValue: v})}>
        <List.Item arrow="horizontal">选择季节</List.Item>
      </Picker>
      <List className="date-picker-list" style={{
          backgroundColor: 'white'
        }}>
        <DatePicker mode='date' value={date} onChange={date => this.setState({date})}>
          <List.Item arrow="horizontal">选择时间</List.Item>
        </DatePicker>
      </List>

      <WhiteSpace/>
      <WhiteSpace/>
      <WhiteSpace/>
      <WhiteSpace/>
      <Button type="warning" onClick={() => Modal.alert('删除文件', '你确定删除该文件吗？', [
          {
            text: '取消',
            onPress: () => console.log('cancel')
          }, {
            text: '确定',
            onPress: () => new Promise((resolve) => {
              Toast.info('点击了确定', 1);
              resolve();
            })
          }
        ])}>删除文件</Button>
    </div>)
  }
}
