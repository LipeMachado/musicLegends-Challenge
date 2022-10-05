import styled from 'styled-components';

import ImageMusic from '../../Assets/wallpaper.jpg'

export const MainContainerDiv = styled.div`
    color: white;
    padding: 20px 13%;
`;

export const MainCapaMusic = styled.div`
    height: 100%;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-image: url(${ImageMusic});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -9999;
    box-shadow: inset 0 10px 300px 170px var(--purpleDarKBlur);
`;

export const MainLogoLoLDiv = styled.div`
    margin-top: 20%;

    h1 {
        margin-top: 10px;
        font-size: 24px;
        color: var(--gray);
    }
`;

export const MainSliderDiv = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;

    span {
        font-size: 20px;
        margin: 0 15px;
        color: var(--gray);
    }

    svg {
        background-color: var(--white);
        color: var(--purpleDark);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
        border-radius: 50%;
        padding: 10px;

        &:hover {
            background-color: var(--gray);
        }
    }
`;