import React from 'react';
import {
    MainContainerDiv,
    MainCapaMusic,
    MainLogoLoLDiv,
    MainSliderDiv
} from './style';

import {
    CaretLeft,
    CaretRight
} from 'phosphor-react';

const Main: React.FC = () => {
    return (
        <>
            <MainContainerDiv>
                <MainCapaMusic />
                <MainLogoLoLDiv>
                    <svg width="250" height="94" viewBox="0 0 250 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_205_2)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M123.122 43.892C126.056 43.9295 128.968 43.3969 131.696 42.3239C134.249 41.3237 136.579 39.8354 138.555 37.9432C140.484 36.0537 142.012 33.799 143.048 31.3125C143.838 29.459 144.353 27.501 144.574 25.5C144.734 23.5325 144.763 21.5565 144.66 19.5852H123.225L119.401 27.2216H134.629C134.07 29.6131 132.649 31.7177 130.633 33.1364C128.457 34.6643 125.837 35.4425 123.174 35.3522C121.402 35.3572 119.649 34.9913 118.029 34.2784C114.832 32.8975 112.312 30.3189 111.016 27.1023C110.328 25.4439 109.99 23.6629 110.021 21.8693C110.015 20.0786 110.371 18.305 111.067 16.6534C112.056 14.2401 113.752 12.1787 115.936 10.7376C118.12 9.29644 120.69 8.54249 123.311 8.57389C125.657 8.55545 127.967 9.1428 130.016 10.2784C131.96 11.3765 133.531 13.0264 134.526 15.017L142.997 11.0625C141.252 7.65935 138.531 4.84746 135.177 2.98293C131.581 0.999115 127.526 -0.0173062 123.414 0.0341041C118.991 -0.0226247 114.647 1.20726 110.918 3.57251C107.189 5.93776 104.237 9.33518 102.425 13.3466C101.201 16.0232 100.57 18.9295 100.573 21.8693C100.536 24.7984 101.12 27.7025 102.288 30.3921C103.423 33.0066 105.046 35.3837 107.072 37.3977C109.117 39.4353 111.547 41.0514 114.223 42.1534C117.041 43.3225 120.068 43.9139 123.122 43.892V43.892ZM81.8643 93.7329C84.796 93.7685 87.7072 93.2419 90.4383 92.1818C92.993 91.1857 95.3242 89.6968 97.2975 87.8011C99.2275 85.9094 100.76 83.6556 101.807 81.1704C102.588 79.3148 103.096 77.3573 103.316 75.358C103.465 73.3834 103.465 71.4006 103.316 69.4261H81.9501L78.1261 77.1477H93.4735C92.9013 79.533 91.4749 81.6295 89.4609 83.0455C87.2864 84.5795 84.6666 85.3638 82.0015 85.2784C80.2308 85.2754 78.4796 84.9098 76.8571 84.2046C74.4451 83.1449 72.3998 81.4035 70.9759 79.1971C69.552 76.9906 68.8124 74.4166 68.8491 71.7954C68.8513 70 69.2066 68.2223 69.8951 66.5625C70.5683 64.979 71.5404 63.5383 72.7588 62.3182C73.9656 61.1226 75.3918 60.1679 76.96 59.5057C78.5858 58.8187 80.3379 58.4761 82.1044 58.5C84.4454 58.4758 86.7517 59.0636 88.7922 60.2045C90.7359 61.2956 92.3067 62.9401 93.3021 64.9262L101.773 60.9887C100.029 57.5856 97.3072 54.7737 93.9537 52.9091C90.3532 50.8958 86.2869 49.85 82.1559 49.875C77.7298 49.8153 73.3831 51.046 69.6529 53.415C65.9227 55.7839 62.9724 59.1873 61.1667 63.2046C59.9403 65.8801 59.3087 68.7871 59.3148 71.7273C59.2888 74.6554 59.8726 77.5571 61.0296 80.25C62.1715 82.861 63.7941 85.237 65.8139 87.2557C67.8709 89.275 70.2982 90.8836 72.9645 91.9944C75.7844 93.1594 78.8106 93.7506 81.8643 93.7329ZM175.664 50.5909V93H166.232L145.878 65.4375V93H136.858V54.5454L134.8 50.5909H146.461L166.627 78.5284V50.5909H175.664ZM0 50.5909H11.4892V84.6818H28.7572L26.3736 92.9829H0L2.17782 88.6022V54.9886L0 50.5909ZM31.9466 93.017H57.6686V84.733H41.3095V75.4432H53.9475L56.2453 67.4659H41.3095V58.9432H57.6686V50.6761H31.9466V93.017ZM132.365 93.017H106.643V50.5738H132.365V58.8409H116.023V67.3637H130.942L128.661 75.4432H116.023V84.75H132.365V93.017ZM0 0.749984H11.4892V34.8409H28.7572L26.3736 43.142H0L2.17782 38.7613V5.11362L0 0.749984ZM31.9466 43.1761H57.6686V34.875H41.3095V25.5682H53.9475L56.2453 17.5909H41.3095V9.06817H57.6686V0.80117H31.9466V43.1761ZM212.652 43.1761H186.93V0.732922H212.652V8.96591H196.361V17.4886H211.28L208.999 25.4659H196.361V34.7728H212.703L212.652 43.1761ZM86.46 0.749984H73.1703L75.9826 6.15336L60.6351 43.1761H70.1866L73.4447 34.909H90.7299L94.1595 43.1761H103.762L86.46 0.749984ZM76.6342 26.7955L82.2588 12.5285L87.6432 26.7955H76.6342ZM237.07 31.4999V12.375H248.954V16.7045H241.889V20.8977H248.062L246.862 25.0909H241.889V31.5511L237.07 31.4999ZM225.17 12.0341C223.204 12.071 221.294 12.6841 219.678 13.7964C218.061 14.9086 216.811 16.4706 216.085 18.2863C215.358 20.102 215.188 22.0904 215.594 24.0023C216 25.9142 216.965 27.6642 218.368 29.0329C219.771 30.4016 221.549 31.328 223.48 31.6959C225.41 32.0637 227.407 31.8566 229.22 31.1006C231.033 30.3445 232.58 29.0731 233.669 27.446C234.757 25.8189 235.338 23.9086 235.339 21.9545C235.327 20.6383 235.055 19.3372 234.538 18.1254C234.021 16.9137 233.269 15.8151 232.325 14.8923C231.38 13.9695 230.263 13.2406 229.035 12.7472C227.807 12.2539 226.494 12.0058 225.17 12.017V12.0341ZM225.17 27.2727C224.115 27.2559 223.09 26.9298 222.221 26.3353C221.353 25.7408 220.68 24.9045 220.288 23.9313C219.897 22.9582 219.803 21.8917 220.019 20.8658C220.235 19.8398 220.751 18.9002 221.503 18.165C222.254 17.4297 223.207 16.9316 224.243 16.7332C225.278 16.5348 226.35 16.645 227.322 17.0499C228.295 17.4548 229.125 18.1363 229.71 19.0089C230.294 19.8816 230.606 20.9064 230.606 21.9545C230.588 23.3726 230.006 24.726 228.987 25.7192C227.969 26.7124 226.597 27.2648 225.17 27.2556V27.2727ZM158.07 42.6136C162.82 44.273 167.998 44.273 172.748 42.6136C174.811 41.8518 176.679 40.647 178.219 39.0852C179.743 37.4872 180.911 35.5881 181.648 33.5114C182.482 31.1815 182.895 28.723 182.866 26.25V0.68184H173.4V25.7387C173.553 28.1799 172.83 30.596 171.359 32.5569C170.58 33.3548 169.647 33.989 168.616 34.4221C167.585 34.8553 166.477 35.0784 165.358 35.0784C164.239 35.0784 163.131 34.8553 162.1 34.4221C161.069 33.989 160.136 33.3548 159.356 32.5569C157.879 30.5983 157.15 28.182 157.298 25.7387V0.68184H147.85V26.25C147.815 28.7219 148.222 31.1804 149.05 33.5114C149.79 35.5814 150.959 37.4742 152.48 39.0681C154.042 40.6716 155.955 41.8964 158.07 42.6477V42.6136ZM237.739 67.8069L231.858 66.7159C229.217 66.2216 227.759 64.7727 227.759 62.642C227.759 59.7443 230.811 58.0057 233.778 58.0057C234.773 58.0057 239.797 58.2614 240.826 63.1194L248.92 59.2671C247.737 55.858 244.153 49.8069 233.71 49.8069C225.29 49.8069 218.448 55.8239 218.448 63.2216C218.448 69.4943 222.752 74.0966 229.971 75.5284L235.853 76.6875C238.768 77.25 240.5 78.8523 240.5 80.983C240.5 83.7443 238.099 85.4148 234.241 85.4489C232.201 85.5051 230.202 84.8787 228.563 83.6701C226.924 82.4616 225.741 80.7409 225.204 78.7841L217.419 83.0114C219.134 88.6705 224.707 93.7159 234.19 93.7159C238.481 93.8926 242.673 92.4078 245.885 89.5738C247.161 88.4178 248.185 87.0134 248.893 85.4476C249.601 83.8818 249.978 82.1881 250 80.4716C249.983 74.1137 245.302 69.2727 237.739 67.8409V67.8069ZM210.08 56.8125C212.086 58.7236 213.7 61.0047 214.83 63.5284C215.978 66.1621 216.57 69.0019 216.57 71.8722C216.57 74.7425 215.978 77.5823 214.83 80.2159C213.71 82.7404 212.095 85.0177 210.08 86.9147C208.033 88.8295 205.642 90.3445 203.032 91.3806C200.306 92.4657 197.394 93.0156 194.458 93H179.745V50.5738H194.475C197.407 50.6783 200.302 51.2539 203.049 52.2784C205.657 53.339 208.042 54.8771 210.08 56.8125ZM203.22 80.8125C204.37 79.6697 205.285 78.3148 205.913 76.8239C206.575 75.259 206.916 73.5783 206.916 71.8806C206.916 70.1829 206.575 68.5024 205.913 66.9375C205.289 65.4295 204.371 64.0594 203.212 62.9066C202.052 61.7538 200.673 60.8412 199.156 60.2216C197.561 59.556 195.845 59.2197 194.115 59.2329H188.97V84.4943H194.115C195.847 84.5017 197.562 84.1595 199.156 83.4886C200.699 82.8681 202.107 81.9597 203.306 80.8125H203.22Z" fill="#F1F0F0" />
                        </g>
                        <defs>
                            <clipPath id="clip0_205_2">
                                <rect width="250" height="93.75" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h1>RIOT GAMES</h1>
                </MainLogoLoLDiv>
                <MainSliderDiv>
                    <CaretLeft size={20} />
                    <span>1 / 20</span>
                    <CaretRight size={20} />
                </MainSliderDiv>
            </MainContainerDiv>
        </>
    );
}

export default Main;