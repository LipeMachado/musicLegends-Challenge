import styled from 'styled-components';

import imageAvatar from '../../Assets/imageAvatar.jpeg'

export const NavBarContainerDiv = styled.div`
    background-color: var(--purpleDark);
    padding: 15px 10%;

    @media only screen and (max-width: 990px) {
        background-color: transparent;
    }
`;

export const NavBarBoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavBarItensLinksDiv = styled.div`
    color: var(--gray);
    display: inline-block;
    justify-content: flex-start;

    ul {
        display: flex;
        align-items: center;
        font-family: "GTEestiLight";
        
        li {
            list-style-type: none;
            cursor: pointer;
            padding: 3px;
        }

        li:nth-child(2),
        li:nth-child(3){
            margin: 0 0 0 20px;
        }

        li:nth-child(3){
            border-bottom: 2px solid var(--greenLight);
        }
    }

    @media only screen and (max-width: 990px) {
        display: none;
    }
`;

export const NavBarItensMenuDiv = styled.div`
    display: none;

    @media only screen and (max-width: 990px) {
        color: var(--white);
        display: flex;
        justify-content: flex-start;
    }
`;

export const NavBarLogoDiv = styled.div`
    color: var(--white);
    display: flex;
    justify-content: center;
    padding: 0 60px 0 0;

    h1 {
        font-size: 32px;
        font-family: "GTEestiLight";
        text-transform: uppercase;
    }

    @media only screen and (max-width: 990px) {
        padding: 0 0 0 0;
        justify-content: center;

        h1 {
            font-size: 15px;
        }
    }
`;

export const NavBarProfileDiv = styled.div`
    color: var(--gray);
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
        font-size: 18px;
        font-family: "GTEestiLight";
    }

    @media only screen and (max-width: 990px) {
        justify-content: center;

        p {
            display: none;
        }
    }
`;

export const NavBarProfilePhotoDiv = styled.div`
    margin-left: 20px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: var(--gray);
    background-image: url(${imageAvatar});
    background-size: cover;

    @media only screen and (max-width: 990px) {
        width: 25px;
        height: 25px;
        margin-left: 0;
    }
`;