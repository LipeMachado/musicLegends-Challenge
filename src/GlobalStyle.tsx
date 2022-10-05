import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --purpleDark: #14061F;
        --purpleDarKBlur: #14061fd4;
        --purpleBackgroundPlay: #200C30;
        --gradient: 90.35deg, #4AC08F 2.49%, #2FB4FF 101.2%, #2FB4FF 101.2%;
        --greenLight: #2EF4CC;
        --gray: #C0C0C0;
        --white: #F1F0F0;
    }
    
    * {
        margin: 0;
        padding: 0;
    }
`;