import React from "react";


import "./menu-item.styles.scss";


const MenuItem = ({ title, image }) => (
    <div className="menu-item">
        <div className="background-image"
             style={{
                 backgroundImage: 'url(' + image +')'
             }}
        />
            <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">CUMPARA ACUM</span>
        </div>
    </div>

);

export default MenuItem;