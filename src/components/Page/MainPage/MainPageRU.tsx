import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Ticket from '../../../assets/Ticket.webp'
import BytecoinLogo from '../../../assets/BytecoinLogo.webp'
import CompleteLogo from '../../../assets/Complete.webp'
import Teaher from '../../../assets/Teacher.webp'
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
    margin-bottom: 115px;
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
    cursor: pointer;
    background: transparent;
    transition: all .2s ease-in-out;
    &:hover {
        background: #333;
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
    width: 75px;
    height: 75px;
    border-radius: 50%;
    @keyframes glowing {
      0% { background-color: rgb(7, 150, 214); box-shadow: 0 0 10px rgb(7, 150, 214); }
      50% { background-color: rgb(7, 150, 234); box-shadow: 0 0 25px rgb(7, 150, 234); }
      100% { background-color: rgb(7, 150, 214); box-shadow: 0 0 10px rgb(7, 150, 214) }
      }
      animation: glowing 2000ms infinite;
      margin-bottom: 40px;
`


export const MainPageRU = () => {

    const [referal, setReferal] = useState()
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
        }, 3000);
    }, []);



    return (
        <>
            {isLoading ? (
                <ContainerLoading>
                    <LogoLoading loading="lazy" src={BytecoinLogo} />
                </ContainerLoading>
            ) : (
                <Container>
                    <HeaderBlock>
                        <HeaderMainText>Bytecoin Onboarding</HeaderMainText>
                        <HeaderDescriptionText>Узнайте о Bytecoin и заработайте 10 <TicketLogo src={Ticket} /></HeaderDescriptionText>
                    </HeaderBlock>

                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <SectionText>Введение</SectionText>
                    </div>
                    <Link to="/StoriesRU" style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                        <IntroBlock>
                            <Logoblock>
                                <IntroLogo src={user.task.task1 ? CompleteLogo : BytecoinLogo} />
                            </Logoblock>
                            <TextinsideBlock>Что такое Bytecoin?</TextinsideBlock>
                        </IntroBlock>
                    </Link>

                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <SectionText>Задания</SectionText>
                    </div>
                    <TasksBlock>
                        <Logoblock>
                            <IntroLogo src={user.task.task2 ? CompleteLogo : Teaher} />
                        </Logoblock>
                        <TextinsideBlock>Время теста</TextinsideBlock>
                    </TasksBlock>

                    <Link to="https://t.me/bytecoin_ru" style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                        <TasksBlock>
                            <Logoblock>
                                <IntroLogo src={user.task.task3 ? CompleteLogo : Megaphone} />
                            </Logoblock>
                            <TextinsideBlock>Подписаться на канал</TextinsideBlock>
                        </TasksBlock>
                    </Link>

                    <Link to="https://t.me/bytecoin_forum" style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                        <TasksBlock>
                            <Logoblock>
                                <IntroLogo src={user.task.task4 ? CompleteLogo : Speacker} />
                            </Logoblock>
                            <TextinsideBlock>Подписаться на форум</TextinsideBlock>
                        </TasksBlock>
                    </Link>

                    <Link to="https://x.com/bytecoin_ton" onClick={() => { CompleteTask(user.user_id, "task5") }} style={{ width: "100%", textDecoration: "none", marginTop: "10px" }}>
                        <TasksBlock>
                            <Logoblock>
                                <IntroLogo src={user.task.task5 ? CompleteLogo : Twitter} />
                            </Logoblock>
                            <TextinsideBlock>Подписаться на X</TextinsideBlock>
                        </TasksBlock>
                    </Link>

                    <TasksBlock style={{ marginTop: "20px" }} onClick={openAnotherBot}>
                        <Logoblock>
                            <IntroLogo src={user.task.task6 ? CompleteLogo : Diamond} />
                        </Logoblock>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            <TextinsideBlock>Попробуйте демо-версию</TextinsideBlock>
                            <TasksDescription>Майнинг Bytecoin в тестовой сети TON</TasksDescription>
                        </div>
                    </TasksBlock>

                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <SectionText>Ваша реферальная ссылка</SectionText>
                    </div>
                    <ReferalBlock>
                        <ReferalText>{referalText}</ReferalText>
                        <CopiedBlock onClick={() => copyTextToClipboard(referalText)}>
                            <IntroLogo src={Copy} />
                        </CopiedBlock>
                    </ReferalBlock>
                    <a href={`https://t.me/share/url?url=${referalText}`} target="_blank" style={{ width: "100%", marginTop: "20px" }}>
                        <ShareButton>Поделиться</ShareButton>
                    </a>
                    <div style={{ width: "100%" }}>
                        <Text>Вы заработаете 5<TicketLogo style={{ marginLeft: "0px" }} src={Ticket} /> за премиум-пользователя.</Text>
                    </div>
                    <LinksToPage />
                </Container>
            )}
        </>
    )
}