import styled from 'styled-components';

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
        
        li {
            list-style-type: none;
        }

        li:nth-child(2),
        li:nth-child(3){
            padding: 0 0 0 20px;
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
    }
`;

export const NavBarProfileDiv = styled.div`
    color: var(--gray);
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
        font-size: 18px;
    }
`;

export const NavBarProfilePhotoDiv = styled.div`
    margin-left: 20px;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: var(--gray);
`;