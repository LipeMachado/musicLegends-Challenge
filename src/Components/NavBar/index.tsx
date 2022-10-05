import React from 'react';
import {
    NavBarContainerDiv,
    NavBarBoxDiv,
    NavBarItensLinksDiv,
    NavBarLogoDiv,
    NavBarProfileDiv,
    NavBarProfilePhotoDiv
} from './style'

const NavBar: React.FC = () => {
    return (
        <>
            <NavBarContainerDiv>
                <NavBarBoxDiv>
                    <NavBarItensLinksDiv>
                        <ul>
                            <li>Início</li>
                            <li>Buscar</li>
                            <li>Suas Bibliotecas</li>
                        </ul>
                    </NavBarItensLinksDiv>
                    <NavBarLogoDiv>
                        <h1>MUSIC LEGENDS</h1>
                    </NavBarLogoDiv>
                    <NavBarProfileDiv>
                        <p>Lipe Code</p>
                        <NavBarProfilePhotoDiv />
                    </NavBarProfileDiv>
                </NavBarBoxDiv>
            </NavBarContainerDiv>
        </>
    );
}

export default NavBar;