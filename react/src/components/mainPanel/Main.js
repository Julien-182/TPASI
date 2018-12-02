import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {updateContentMap, updatePresentation} from "../../actions/index";
import * as contentMapTmp from '../../source/contentMap';
import * as presList from '../../source/pres';
import './main.css';
import BrowseContentPanel from '../browseContentPanel/containers/BrowseContentPanel';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel'
import globalReducer from '../../reducers/index';
import BrowsePresentationPanel from "../browsePresentationPanel/containers/BrowsePresentationPanel";

const store = createStore(globalReducer);

class Main extends React.Component {

    constructor(props) {
        super(props);
        store.dispatch(updateContentMap(contentMapTmp));
        this.state = {
            content_list:contentMapTmp.default,
            pres_list:presList.default,
        }
        store.dispatch(updatePresentation(presList), updateContentMap(contentMapTmp));
    }

    render() {
        return (
            <Provider store={store} >
            <div className="container-fluid height-100">
                <div className="row height-100">
                    <div className="col-md-3 col-lg-3 height-100 vertical-scroll" style={{borderRight:'2px solid grey'}}>
                        <BrowsePresentationPanel
                            pres_list={this.state.pres_list}
                            content_list={this.state.content_list}
                        ></BrowsePresentationPanel>
                    </div>
                    <div className="col-md-6 col-lg-6 height-100 vertical-scroll">
                        <EditSlidPanel
                            selected_slid={this.state.pres_list.slidArray[0]}
                            content_list={this.state.content_list}
                        ></EditSlidPanel>
                    </div>
                    <div className="col-md-3 col-lg-3 height-100 vertical-scroll" style={{borderLeft:'2px solid grey'}}>
                        <BrowseContentPanel content_list={this.state.content_list}></BrowseContentPanel>
                    </div>
                </div>
            </div>
            </Provider>
        );
    }

}

export default Main;