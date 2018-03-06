'user strict';
import React, {
    Component
} from 'react'

//定义一个公共的组件盒子
export default class roots extends Component {
    render() {
        return (
            <div className='content'>
                {this.props.children}
            </div>
        );
    }
}
