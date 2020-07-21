import React from "react";
import { withRouter } from "react-router-dom";


import "./menu-item.styles.scss";


const MenuItem = ({ title, image, history, linkUrl, match }) => (
    <div className="menu-item" onClick={() => history.push(match.url + linkUrl)}>
        <div className="background-image"
             style={{
                 backgroundImage: 'url(' + image +')'
             }}
        />
            <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle" stlye="">CUMPARA ACUM</span>
        </div>
    </div>

);

export default withRouter(MenuItem);