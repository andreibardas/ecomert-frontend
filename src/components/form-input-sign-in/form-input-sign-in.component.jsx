import React from "react";

import "./form-input-sign-in.styles.scss";

const FormInputSignIn = ({handleChange, label, ...otherProps}) =>(
    <div className="centering">
    <div className="group">

        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label ?
                (<label className="form-input-label">
                    {label}
                </label>)
                : null
        }

    </div>
    </div>
);

export default FormInputSignIn;