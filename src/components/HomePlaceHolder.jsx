import React from 'react';
import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';

export default function componentName() {
    return (
        <div className="componentName">
            <div>
                <div className="text-center">
                    <h3 className="text-secondary text-center mt-5 pt-5">
                        Welcome, to ravenous! Please make a search
                    </h3>
                    <Icon path={mdiLoading} spin={true} size={1} className="text-secondary" />
                </div>
            </div>
        </div>
    )
}