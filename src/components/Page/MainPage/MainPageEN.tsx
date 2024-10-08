import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Ticket from '../../../assets/Ticket.webp'
import BytecoinLogo from '../../../assets/BytecoinLogo.webp'
import LoadingGif from '../../../assets/Loading.gif'
import CompleteLogo from '../../../assets/Complete.webp'
import Teacher from '../../../assets/Teacher.webp'
import Speacker from '../../../assets/Speacker.webp'
import Megaphone from '../../../assets/Megaphone.webp'
import Twitter from '../../../assets/X.webp'
import Diamond from '../../../assets/Diamond.png'
import Copy from '../../../assets/Copy.png'
import { useUser } from '../../../store/useUsers';
import { CompleteTask } from '../../../api/user';
import { BOT } from '../../../const';
import { LinksToPage } from '../Footer/LinksToPage';

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 85px;
`

const HeaderBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 20px;
`

const HeaderMainText = styled.a`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
`

const HeaderDescriptionText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin-top: 10px;
    display: flex;
    align-items: center;
`

const TicketLogo = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 5px;
`

const IntroBlock = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid #353537;
    border-radius: 12px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    background: transparent;
    transition: all .2s ease-in-out;
    &:hover {
        background: #222;
    }
`

const Logoblock = styled.div`
    width: 40px;
    height: 40px;
    background: #252525;
    border-radius: 10px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IntroLogoGradient = styled.div`
    width: 26px;
    height: 26px;
    background: linear-gradient(to right, #7ac0fd, #3098fe);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const IntroLogo = styled.img`
    width: 24px;
    height: 24px;
`

const TextinsideBlock = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    margin-left: 15px;
`

const SectionText = styled.a`
    font-size: 18px;
    font-weight: 500;
    color: #fff;
`

const TasksBlock = styled.div`
    width: 100%;
    height: 60px;
    border: 1px solid #353537;
    border-radius: 12px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    background: transparent;
    transition: all .2s ease-in-out;
    &:hover {
        background: #222;
    }
`

const TasksDescription = styled.a`
    font-size: 10px;
    font-weight: 500;
    color: #9da09f;
    margin-left: 15px;
`

const ReferalBlock = styled.div`
    width: 100%;
    height: 50px;
    background: #000;
    border-radius: 15px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`

const CopiedBlock = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    transition: transform .1s ease-in-out;
    &:active {
         transform: scale(0.85);
    }
`

const ReferalText = styled.a`
    width: 70%;
    color: #ababab;
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 15px;
    white-space: nowrap;
`

const ShareButton = styled.button`
    width: 100%;
    height: 50px;
    background: #4ab6ed;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
`

const Text = styled.a`
    font-size: 12px;
    font-weight: 500;
    color: #9da09f;
    margin-top: 10px;
    display: flex;
    align-items: center;
`

const ContainerLoading = styled.div`
    width: 100%;
    height: 100vh;
    background: #151314;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const LogoLoading = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 50px;
`


export const MainPageEN = () => {

    const [referal, setReferal] = useState()
    const [geoposition, setGeoposition] = useState("")
    const [user, setUser] = useUser()

    const referalText = `${BOT}?startapp=ref_${user.user_id}`


    useEffect(() => {
        window.Telegram.WebApp.BackButton.hide()
        window.Telegram.WebApp.MainButton.hide()
        window.Telegram.WebApp.MainButton.onClick(() => { })
    }, [])

    const copyTextToClipboard = async (referalLink: string) => {
        try {
            await navigator.clipboard.writeText(referalLink);
            window.navigator.vibrate(200); // Вибрация на 200 миллисекунд
        } catch (err) {
            console.error(err);
        }
    };

    const openAnotherBot = () => {
        const tg = window.Telegram.WebApp;
        tg.openTelegramLink('https://t.me/bytecoindev_bot/app');
        CompleteTask(user.user_id, "task6")
    };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2200);
    }, []);


    return (
        <>
            {isLoading ? (
                <ContainerLoading>
                    <LogoLoading loading="lazy" src={LoadingGif} />
                </ContainerLoading>
            ) : (
                <Container>
                    <HeaderBlock>
                        <HeaderMainText>Bytecoin Onboarding</HeaderMainText>
                        <HeaderDescriptionText>Learn about Bytecoin & earn 10 <TicketLogo src={Ticket} /></HeaderDescriptionText>
                    </HeaderBlock>

                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <SectionText>Intro</SectionText>
                    </div>
                    <Link to="/StoriesEN"
                        style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                        <IntroBlock>
                            <Logoblock>

                                <IntroLogo src={user.task.task1 ? CompleteLogo : BytecoinLogo} />

                            </Logoblock>
                            <TextinsideBlock>Whats is Bytecoin?</TextinsideBlock>
                        </IntroBlock>
                    </Link>

                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <SectionText>Tasks</SectionText>
                    </div>
                    <Link to="/testtime"
                        style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                        <TasksBlock>
                            <Logoblock>
                                <IntroLogo src={user.task.task2 ? CompleteLogo : Teacher} />
                            </Logoblock>
                            <TextinsideBlock>Test Time</TextinsideBlock>
                        </TasksBlock>
                    </Link>

                    <Link to="https://t.me/bytecoin_news"
                        style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                        <TasksBlock>
                            <Logoblock>
                                <IntroLogo src={user.task.task3 ? CompleteLogo : Megaphone} />
                            </Logoblock>
                            <TextinsideBlock>Subscribe to channel</TextinsideBlock>
                        </TasksBlock>
                    </Link>

                    <Link to="https://t.me/bytecoin_forum"
                        style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                        <TasksBlock>
                            <Logoblock>
                                <IntroLogo src={user.task.task4 ? CompleteLogo : Speacker} />
                            </Logoblock>
                            <TextinsideBlock>Join forum</TextinsideBlock>
                        </TasksBlock>
                    </Link>

                    <Link to="https://x.com/bytecoin_ton" onClick={() => { CompleteTask(user.user_id, "task5") }} style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                        <TasksBlock>
                            <Logoblock>
                                <IntroLogo src={user.task.task5 ? CompleteLogo : Twitter} />
                            </Logoblock>
                            <TextinsideBlock>Follow our X</TextinsideBlock>
                        </TasksBlock>
                    </Link>

                    <TasksBlock style={{ marginTop: "20px" }} onClick={openAnotherBot}>
                        <Logoblock>
                            <IntroLogo src={user.task.task6 ? CompleteLogo : Diamond} />
                        </Logoblock>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <TextinsideBlock>Try demo</TextinsideBlock>
                            <TasksDescription>Mine Bytecoin in TON testnet</TasksDescription>
                        </div>
                    </TasksBlock>

                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <SectionText>Your referral link</SectionText>
                    </div>
                    <ReferalBlock>
                        <ReferalText>{referalText}</ReferalText>
                        <CopiedBlock onClick={() => copyTextToClipboard(referalText)}>
                            <IntroLogo src={Copy} />
                        </CopiedBlock>
                    </ReferalBlock>
                    <a href={`https://t.me/share/url?url=${referalText}`} target="_blank" style={{ width: "100%", marginTop: "20px" }}>
                        <ShareButton >Share</ShareButton>
                    </a>
                    <div style={{ width: "100%" }}>
                        <Text>You will earn 5<TicketLogo style={{ margin: "0px 3px" }} src={Ticket} /> for a premium user.</Text>
                    </div>
                    <LinksToPage />
                </Container>
            )}
        </>
    )
}