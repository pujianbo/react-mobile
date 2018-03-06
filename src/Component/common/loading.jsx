'user strict';
import React, {
    Component
} from 'react';

import '../../Scss/common/loading.scss'

//数据加载状态
export default class loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: 0,
            empty: 0,
            end: 0
        };
    }
    componentWillReceiveProps() {
        setTimeout(() => {
            const {
                load,
                empty,
                end
            } = this.props
            this.setState({
                load,
                empty,
                end
            });
        }, 0)
    }
    render() {
        let {
            load,
            empty,
            end,
            emptyMsg
        } = this.props;
        let {
            show
        } = this.state;
        return (
            <div className='loading'>
                {load == 1
                    ? <span className='ing'>加载中...</span>
                    : ''}
                {empty == 1
                    ? <span className='no'>{emptyMsg?emptyMsg:'暂无信息'}</span>
                    : ''}
                {end == 1
                    ? <span className='end'>已加载全部信息</span>
                    : ''}
            </div>
        )
    }
}
