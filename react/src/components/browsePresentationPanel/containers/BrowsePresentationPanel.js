import React, {Component} from 'react';
import Presentation from "../../common/presentation/containers/Presentation";

class BrowsePresentationPanel extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Presentation
                id={this.props.pres_list.id}
                title={this.props.pres_list.title}
                description={this.props.pres_list.description}
                slidArray={this.props.pres_list.slidArray}
                content_list={this.props.content_list}
            ></Presentation>
        )
    }

}

export default BrowsePresentationPanel;