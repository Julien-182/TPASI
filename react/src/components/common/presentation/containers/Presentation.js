import React, {Component} from 'react';
import {connect} from 'react-redux';
import './presentation.css';
import Slid from "../../slid/containers/Slid";

class Presentation extends Component {

    constructor(props) {
        super(props);
        this.getAllPres = this.getAllPres.bind(this);
        this.state={
            title:this.props.title,
            description:this.props.description,
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
    }

    getAllPres() {
        let display_result = this.props.slidArray.map(
            (slid) =>
                display_result = (
                    <Slid
                        id={slid.id}
                        titre={slid.title}
                        content_id={slid.content_id}
                        txt={slid.txt}
                        content_list={this.props.content_list}
                        displayMode="SHORT"
                    ></Slid>
                )
        );

        return display_result;

    }

    handleChangeTitle(e) {
        this.setState({
            title:e.target.value
        });
    }

    handleChangeDescription(e) {
        this.setState({
            description:e.target.value
        });
    }

    render() {
        const display_list = this.getAllPres();
        return (
            <div>
                <label htmlFor="presTitle">
                    Title
                </label>
                <input
                    type="text" className="form-control"
                    id="presTitle"
                    onChange={this.handleChangeTitle}
                    value={this.state.title}/>
                <label htmlFor="prestText">
                    Description
                </label>
                <textarea
                    rows="5"
                    type="text"
                    className="form-control"
                    id="prestText"
                    onChange={this.handleChangeDescription}
                    value={this.state.description}>
                </textarea>
                {display_list}
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    let newSlidArray = ownProps.slidArray.slice();
    let index = newSlidArray.map((slid) => slid.id).indexOf(state.updateModelReducer.presentation.id);
    newSlidArray[index] = state.updateModelReducer.presentation;
    return {
        slidArray: newSlidArray,
    }
};

export default connect(mapStateToProps) (Presentation);