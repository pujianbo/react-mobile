'user strict';
import React, {
    Component
} from 'react';

import '../../Scss/common/footer.scss'

//底部条
export default class footer extends Component {
    render() {
        return (
            <footer className='footer'>
                {this.props.children}
            </footer>
        )
    }
}
