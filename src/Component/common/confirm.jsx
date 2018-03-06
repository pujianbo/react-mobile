'user strict';
import React, {
    Component
} from 'react';

import '../../Scss/common/confirm.scss'

//确认框
export default class confirm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: 0,
            sigle: 0
        };
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            const {
                show,
                sigle
            } = this.props
            this.setState({
                show,
                sigle
            });
        }, 0)
    }

    //关闭
    localCancel() {
        this.setState({
            show: 0
        })
    }

    render() {
        let {
            config,
            cancel,
            sure,
            cancelName,
            sureName
        } = this.props;
        let {
            show,
            sigle
        } = this.state;
        return (
            <div>
                {show == '1'
                    ? <div className='confirm'>
                            <div className='mask'></div>
                            <div className='cfm'>
                                <div className='title'>{config.title
                                        ? config.title
                                        : '温馨提示'}</div>
                                <div className='content'>{config.content
                                        ? <span className="cfm_content"  dangerouslySetInnerHTML={{__html:config.content}} />
                                        : '提示内容'}</div>
                                {sigle == 1
                                    ? <div className='bottom'>
                                            {cancel != undefined
                                                ? <a className='item cancel2' onClick={cancel.bind(this)}>{config.cancelName
                                                            ? config.cancelName
                                                            : '知道了'}</a>
                                                : <a className='item cancel2' onClick={this.localCancel.bind(this)}>{config.cancelName
                                                            ? config.cancelName
                                                            : '知道了'}</a>}
                                        </div>
                                    : <div className='bottom'>
                                        {cancel != undefined
                                            ? <a className={sure?'item cancel':'item cancel2'} onClick={cancel.bind(this)}>{config.cancelName
                                                        ? config.cancelName
                                                        : '取消'}</a>
                                            : ''}
                                        {sure != undefined
                                            ? <a className='item sure' onClick={sure.bind(this)}>{config.sureName
                                                        ? config.sureName
                                                        : '确定'}</a>
                                            : ''}
                                    </div>}
                            </div>
                        </div>
                    : ''
}
            </div>

        )
    }
}
