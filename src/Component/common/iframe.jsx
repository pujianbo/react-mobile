'use strict';
import React, {
    Component
} from 'react'
import {
    Link
} from 'react-router'

import Header from './Header'
import '../../Scss/common/iframe.scss'

//公共的外部链接盒子
export default class iframe extends Component {

    render() {
        const {
            title,
            url
        } = this.props.params
        return (
            <div className='iframe'>
                <Header title={title} />
                <iframe src={url}></iframe>
            </div>
        )
    }
}
