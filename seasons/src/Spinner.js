import React from 'react';

const Spinner = (props) => {
    return (
        <div>
            <div className='ui active dimmer'>
                <div className='ui text loader'>
                    {props.text}
                </div>
            </div>
        </div>
    );
}

Spinner.defaultProps = {
    text: 'Loading...'
};

export default Spinner;