import React, {Component} from 'react';

class OnlyContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let render_media = "";
        if (this.props.type == "img_url") {
            render_media = (
                <img src={this.props.src}/>
            );
        }
        else if (this.props.type == "video") {
            render_media = (
                <object width="100%" height="100%" data={this.props.src}></object>
            );
        }
        else if (this.props.type == "web") {
            render_media = (
                <a href={this.props.src}>Lien</a>
            );
        }
        return (
            <div>
                {render_media}
            </div>
        )
    }
}

export default OnlyContent;