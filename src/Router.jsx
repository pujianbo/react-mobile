import React, {Component} from 'react';
import {
  Router,
  Route,
  Redirect,
  IndexRoute,
  browserHistory,
  hashHistory
} from 'react-router';

const history = process.env.NODE_ENV !== 'production'
  ? browserHistory
  : hashHistory;

// 组件部分
// 公共组件
const roots = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/Common/roots').default)
  }, 'roots')
}
const error = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/Common/error').default)
  }, 'error')
}
// 测试组件
const test = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/test').default)
  }, 'test')
}
const test2 = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/test2').default)
  }, 'test2')
}
const test3 = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/test3').default)
  }, 'test3')
}
// 路由组件
const index = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/index').default)
  }, 'index')
}
// 页面组件
const write = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/write').default)
  }, 'write')
}
const read = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/read').default)
  }, 'read')
}
const select = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/select').default)
  }, 'select')
}
const selectResult = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./Component/selectResult').default)
  }, 'selectResult')
}

const RouteConfig = (<Router history={hashHistory}>
  <Route path='/' getComponent={roots}>
    <IndexRoute getComponent={index}/>
    <Route path='/test' getComponent={test}/>
    <Route path='/test2' getComponent={test2}/>
    <Route path='/test3' getComponent={test3}/>
    <Route path='/write' getComponent={write}/>
    <Route path='/read' getComponent={read}/>
    <Route path='/select' getComponent={select}/>
    <Route path='/selectResult' getComponent={selectResult}/>
    <Route path='/error' getComponent={error}/>
    <Route path='*' getComponent={error}/>
  </Route>
</Router>)
export default RouteConfig;
