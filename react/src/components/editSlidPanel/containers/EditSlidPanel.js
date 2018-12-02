import React, {Component} from 'react';
import {connect} from 'react-redux';
import Slid from "../../common/slid/containers/Slid";

class EditSlidPanel extends Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Slid
                content_list={this.props.content_list}
                id={this.props.selected_slid.id}
                titre={this.props.selected_slid.titre}
                content_id={this.props.selected_slid.content_id}
                txt={this.props.selected_slid.txt}
                displayMode="FULL_MNG">
            </Slid>
        )
    }

}

const mapStateToProps = (state,ownProps) => {
    return {
        selected_slid:state.selectedReducer.slid,
    }
};

export default connect(mapStateToProps)(EditSlidPanel);