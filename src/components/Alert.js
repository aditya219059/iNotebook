import React from 'react'

const Alert = (props) => {
    const cap = (word) => {
        if (word === "danger") {
            word = "Error"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '70px' }}>
            {props.alert && <div>
                <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{cap(props.alert.type)}</strong>: {props.alert.msg}.
                </div>
            </div>}
        </div>
    )
}

export default Alert
