import React from 'react';

export const validateMessage = (errors, name, rulesData) => {
    if (typeof (rulesData) !== 'string') {
        return rulesData?.map((val, key) => {
            return errors[name]?.type === val.split(':')[0] &&
                <div key={key} className='invalid-feedback'>
                    {val.split(':')[1]}
                </div>
        })
    } else {
        return errors[name] &&
            <div className='invalid-feedback'>
                {rulesData}
            </div>
    }
}