import { createGlobalStyle } from 'styled-components';
import GTEestiBold from './Assets/Fonts/GTEestiProDisplay-Bold.ttf'
import GTEestiLight from './Assets/Fonts/GTEestiProDisplay-Light.ttf'
import GTEestiMedium from './Assets/Fonts/GTEestiProDisplay-Medium.ttf'
import GTEestiRegular from './Assets/Fonts/GTEestiProDisplay-Regular.ttf'
import GTEestiUtraBold from './Assets/Fonts/GTEestiProDisplay-UltraBold.ttf'

export const GlobalStyle = createGlobalStyle`
    
    @font-face {
        font-family: "GTEestiBold";
        src: url(${GTEestiBold});
    }

    @font-face {
        font-family: "GTEestiLight";
        src: url(${GTEestiLight});
    }

    @font-face {
        font-family: "GTEestiMedium";
        src: url(${GTEestiMedium});
    }

    @font-face {
        font-family: "GTEestiRegular";
        src: url(${GTEestiRegular});
    }

    @font-face {
        font-family: "GTEestiUtraBold";
        src: url(${GTEestiUtraBold});
    }

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