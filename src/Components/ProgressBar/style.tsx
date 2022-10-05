import styled from 'styled-components';

export const ProgressBarContainerDiv = styled.div`
    input {
        appearance: none;
        background: linear-gradient(var(--gradient));
        border-radius: 10px;
        position: absolute;
        top: -2px;
        left: 0;
        width: 20%;
        height: 3px;
        outline: none;

        &::before {
            content: '';
            height: 11px;
            width: 0;
            background-color: var(--greenLight);
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            cursor: pointer;
        }

        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: 12px;
            width: 12px;
            border-radius: 50%;
            border: none;
            background-color: var(--greenLight);
            cursor: pointer;
            position: relative;
            margin: -2px 0 0 0;
            z-index: 3;
            box-sizing: border-box;
        }
    }
`;