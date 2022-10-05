import styled from 'styled-components';

export const FooterContainerDiv = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px 10%;
    background-color: var(--purpleDark);
`;

export const FooterBoxDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const FooterLikeAndTitleDiv = styled.div`
    display: flex;
    align-items: center;
    
    svg { 
        color: var(--white);
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &:hover {
            path {
                fill: var(--white);
            }
        }
    }

    @media only screen and (max-width: 990px) {
        position: absolute;
        top: -150px;

        svg {
            position: absolute;
            right: 80px;
            top: 3px;
            height: 25px;
        }
    }
`;

export const MusicTitleDiv = styled.div`
    margin-left: 20px;
    
    @media only screen and (max-width: 990px) {
        margin-left: 0;
    }
    
`;

export const MusicTitleSpan = styled.span`
    display: block;
    color: var(--white);
    margin-bottom: 5px;
    font-size: 20px;
    font-family: "GTEestiMedium";
    
    @media only screen and (max-width: 990px) {
        margin-bottom: 10px;
        font-size: 25px;
    }
`;

export const MusicSingerSpan = styled.span`
    color: var(--gray);
    font-family: "GTEestiLight";
`;

export const FooterPlayerOptionsDiv = styled.div`
    color: var(--white);
    display: flex;
    align-items: center;

    svg {
        padding: 5px;
    }

    svg:nth-child(1) {
        margin-right: 30px;
    }

    svg:nth-child(2) {
        margin-right: 10px;
    }

    svg:nth-child(3) {
        margin-right: 10px;
        background-color: var(--purpleBackgroundPlay);
        border-radius: 50%;
    }

    svg:nth-child(5) {
        margin-left: 30px;
        margin-right: 60px;
    }

    @media only screen and (max-width: 620px) {
        justify-content: flex-end;
        width: 410px;
    }
`;

export const FooterSoundAndMaximizeDiv = styled.div`
    color: var(--white);

    svg:nth-child(1) {
        margin-right: 80px;
    }

    @media only screen and (max-width: 620px) {
        display: none;
    }
`;