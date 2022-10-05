import React from 'react';
import ProgressBar from '../ProgressBar';
import {
    FooterContainerDiv,
    FooterBoxDiv,
    FooterLikeAndTitleDiv,
    MusicTitleDiv,
    MusicTitleSpan,
    MusicSingerSpan,
    FooterPlayerOptionsDiv,
    FooterSoundAndMaximizeDiv
} from './style';

import {
    Heart,
    Repeat,
    CaretLeft,
    CaretRight,
    Play,
    ArrowClockwise,
    SpeakerHigh,
    ArrowsOutSimple
} from 'phosphor-react';

const Footer: React.FC = () => {
    return (
        <>
            <FooterContainerDiv>
                <ProgressBar />
                <FooterBoxDiv>
                    <FooterLikeAndTitleDiv>
                        <Heart size={30} />
                        <MusicTitleDiv>
                            <MusicTitleSpan>Warriors</MusicTitleSpan>
                            <MusicSingerSpan>Riot games ft. Imagine Dragons</MusicSingerSpan>
                        </MusicTitleDiv>
                    </FooterLikeAndTitleDiv>
                    <FooterPlayerOptionsDiv>
                        <Repeat size={30} />
                        <CaretLeft size={25} />
                        <Play size={30} />
                        <CaretRight size={25} />
                        <ArrowClockwise size={30} />
                    </FooterPlayerOptionsDiv>
                    <FooterSoundAndMaximizeDiv>
                        <SpeakerHigh size={30} />
                        <ArrowsOutSimple size={30} />
                    </FooterSoundAndMaximizeDiv>
                </FooterBoxDiv>
            </FooterContainerDiv>
        </>
    );
}

export default Footer;