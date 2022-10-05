import React from 'react';
import {
    ProgressBarContainerDiv
} from './style'

const ProgressBar: React.FC = () => {
    return (
        <>
            <ProgressBarContainerDiv>
                <input type="range" />
            </ProgressBarContainerDiv>
        </>
    );
}

export default ProgressBar;