'user strict';
import React, {Component} from 'react';
import {hashHistory, Link} from 'react-router'

import '../../Scss/common/header.scss'

//网站头部条
export default class header extends Component {

  render() {
    const {children, title, descri,style} = this.props
    return (<header className="header">
      {
        children
          ? children
          : <a className='title'>
              <h5>{
                  title
                    ? title
                    : '中药药理与临床'
                }</h5>
              <p>{
                  descri
                    ? descri
                    : 'Pharmacology of Chinese Medicine'
                }</p>
            </a>
      }
    </header>)
  }
}
