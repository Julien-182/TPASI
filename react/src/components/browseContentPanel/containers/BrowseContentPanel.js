import React, {Component} from 'react';
import Content from "../../common/content/containers/Content"

class BrowseContentPanel extends Component {

    constructor(props) {
        super(props);
        this.getAllContent = this.getAllContent.bind(this);
    }

    getAllContent() {
        let display_result = "";
        let tab = [];

        for (var cont in this.props.content_list) {
            tab.push(this.props.content_list[cont]);
        }

        display_result = tab.map(
            (content) =>
                display_result = (
                    <Content src={content.src}
                             title={content.title}
                             id={content.id}
                             type={content.type}
                             onlyContent={false}
                    ></Content>
                )
        );

        return display_result;

    }

    render() {
        const display_list = this.getAllContent();
        return (
            <div>
                {display_list}
            </div>
        )
    }

}

export default BrowseContentPanel;