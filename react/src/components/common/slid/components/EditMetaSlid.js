import React, {Component} from 'react';
import { connect } from 'react-redux';
import './editMetaSlid.css';

class EditMetaSlid extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor="currentSlideTitle">
                    Title
                </label>
                <input
                    type="text" className="form-control"
                    id="currentSlideTitle"
                    onChange={this.props.handleChangeTitre}
                    value={this.props.titre}/>
                <label htmlFor="currentSlideText">
                    Text
                </label>
                <textarea
                    rows="5"
                    type="text"
                    className="form-control"
                    id="currentSlideText"
                    onChange={this.props.handleChangeTxt}
                    value={this.props.txt}>
                </textarea>
            </div>
        );
    }
}

export default connect() (EditMetaSlid);