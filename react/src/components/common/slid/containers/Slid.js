import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setSelectedSlid, updateSlid} from "../../../../actions/index";
import OnlyContent from '../../content/components/OnlyContent';
import EditMetaSlid from '../../slid/components/EditMetaSlid'
import './slid.css';

class Slid extends Component {

    constructor(props) {
        super(props);

        this.state = {
            titre: this.props.titre,
            txt: this.props.txt
        };

        this.handleChangeTitre = this.handleChangeTitre.bind(this);
        this.handleChangeTxt = this.handleChangeTxt.bind(this);

        this.updateSelectedSlid = this.updateSelectedSlid.bind(this);
        this.updateSlid = this.updateSlid.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            titre: nextProps.titre,
            txt: nextProps.txt
        });
    }

    handleChangeTitre(e) {
        e.preventDefault();
        this.setState({
            titre: e.target.value
        }, this.updateSlid);
    }

    handleChangeTxt(e) {
        e.preventDefault();
        this.setState({
            txt: e.target.value
        }, this.updateSlid);
    }

    updateSelectedSlid() {
        if (this.props.displayMode === 'SHORT') {
            const tmpSlid = {
                id: this.props.id,
                titre: this.props.titre,
                txt: this.props.txt,
                content_id: this.props.content_id
            };
            this.props.dispatch(setSelectedSlid(tmpSlid));
        }
    }

    updateSlid() {
        const newSlid = {
            id: this.props.id,
            title: this.state.titre,
            txt: this.state.txt,
            content_id: this.props.content_id
        };
        this.props.dispatch(updateSlid(newSlid));
    }



    render() {
        let display_visual;
        let content = this.props.content_list[this.props.content_id];
        if (content === undefined) {
            content = this.props.content_list["1"];
        }
        if (this.props.displayMode == "SHORT") {
            display_visual = (
                <div className="shortslide" onClick={()=>{this.updateSelectedSlid()}}>
                    <h4>{this.state.titre}</h4>
                    <p>{this.state.txt}</p>
                    <OnlyContent src={content.src}
                             title={content.title}
                             id={content.id}
                             type={content.type}
                    ></OnlyContent>
                </div>
            )
        }
        else if (this.props.displayMode == "FULL_MNG") {
            display_visual = (
                <div>
                    <EditMetaSlid
                        handleChangeTitre={this.handleChangeTitre}
                        handleChangeTxt={this.handleChangeTxt}
                        titre={this.state.titre}
                        txt={this.state.txt}>
                    </EditMetaSlid>
                    <OnlyContent src={content.src}
                                 title={content.title}
                                 id={content.id}
                                 type={content.type}
                    ></OnlyContent>
                </div>
            )
        }
        return display_visual;
    }

}

export default connect()(Slid);