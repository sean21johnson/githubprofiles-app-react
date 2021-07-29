import React from 'react';

function MetricsItem({ value, title }) {

    return (
        <div className="metrics_item">
            <h2 className="metrics_value">{value} {title}</h2>
        </div>
    )
}

export default MetricsItem;