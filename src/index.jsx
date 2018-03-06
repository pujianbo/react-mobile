import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';
import {Provider} from 'react-redux';
import route from './Router';
import store from './Redux/store';

//引用样式
import './Scss/common/reset.scss'
import './Scss/common/media.scss'
import './Scss/common/public.scss'
import './Scss/main.scss'

//引入react-weui
import 'weui';
import 'react-weui/build/packages/react-weui.css';

//引入vconsole调试
// import './js/vconsole.js'

store.subscribe(() => { //监听state变化
  //console.log(store.getState())
});

render(<Provider store={store}>
  {route}
</Provider>, document.getElementById('main'));
