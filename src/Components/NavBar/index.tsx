import React from 'react';
import {
    NavBarContainerDiv,
    NavBarBoxDiv,
    NavBarItensLinksDiv,
    NavBarItensMenuDiv,
    NavBarLogoDiv,
    NavBarProfileDiv,
    NavBarProfilePhotoDiv
} from './style'

import { TextAlignLeft } from 'phosphor-react';

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
                    <NavBarItensMenuDiv>
                        <TextAlignLeft size={25} />
                    </NavBarItensMenuDiv>
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