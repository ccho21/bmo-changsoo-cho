import React from 'react';

const button = (props) => (
    <button
        disabled={props.disabled}
        type={props.type}
        className="btn"
        onClick={props.clicked}>{props.children}</button>
);

export default button;