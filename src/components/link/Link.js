import React from 'react';
const link = (props) => {
    return (<a
        disabled={props.disabled}
        aria-label="Open a link to reserve a restaurant"
        className="link"
        href={props.reserve_url}>{props.children}</a>)
};
export default link;