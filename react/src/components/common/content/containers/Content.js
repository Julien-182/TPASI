import React, {Component} from 'react';
import OnlyContent from '../components/OnlyContent';
import AllContent from '../components/AllContent';

class Content extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.onlyContent) {
            return (
                <AllContent src={this.props.src}
                            id={this.props.id}
                            type={this.props.type}
                            title={this.props.title}
                ></AllContent>
            );
        }
        else {
            return (
                <OnlyContent src={this.props.src}
                             id={this.props.id}
                             type={this.props.type}
                             title={this.props.title}></OnlyContent>
            );
        }
    }

}

export default Content;