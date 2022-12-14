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
    background-position: center;
    z-index: -9999;
    box-shadow: inset 0 10px 300px 170px var(--purpleDarKBlur);

    @media only screen and (max-width: 990px) {
        background-position: center;
    }
`;

export const MainLogoLoLDiv = styled.div`
    margin-top: 20%;

    h1 {
        margin-top: 10px;
        font-size: 24px;
        color: var(--gray);
        font-family: "GTEestiLight";
        letter-spacing: 3px;
    }

    @media only screen and (max-width: 990px) {
        margin-top: 25%;
        
        svg {
            width: 130px;
            height: 50px;
        }

        h1 {
            margin-top: 3px;
            font-size: 15px;
        }
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
        font-family: "GTEestiMedium";
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

    @media only screen and (max-width: 990px) {
        
        span {
            font-size: 13px;
        }
        
        svg {
            width: 10px;
            height: 10px;
            padding: 5px;
        }
    }
`;