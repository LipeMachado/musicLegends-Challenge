import styled from 'styled-components';

import imageAvatar from '../../Assets/imageAvatar.jpeg'

export const NavBarContainerDiv = styled.div`
    background-color: var(--purpleDark);
    padding: 15px 10%;
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
`;

export const NavBarProfilePhotoDiv = styled.div`
    margin-left: 20px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: var(--gray);
    background-image: url(${imageAvatar});
    background-size: cover;
`;