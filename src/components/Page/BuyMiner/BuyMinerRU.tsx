import styled from "styled-components";
import TelegamLogo from '../../../assets/TelegramLogo.png'
import Gif from '../../../assets/BuyMinerGif.gif'
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    text-align: center;
    margin-bottom: 110px;
`

const Logo = styled.img`
    width: 150px;
    height: 150px;
`

const MainText = styled.a`
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    margin-top: 20px;
`

const Description = styled.a`
    font-size: 15px;
    font-weight: 500;
    color: #858585;
    margin-top: 10px;
`

const JoinWaitlistButton = styled.button`
    width: 90%;
    height: 40px;
    background: #4bb5ef;
    border-radius: 10px;
    margin-top: 30px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
`

const FollowButton = styled.button`
    width: 90%;
    height: 40px;
    background: #211d1f;
    border-radius: 10px;
    margin-top: 20px;
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

const LogoinButton = styled.img`
    width: 15px;
    height: 15px;
    margin-right: 3px;
`

const InfoBlock = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const InfoText = styled.a`
    font-size: 14px;
    font-weight: 500;
    color: #858585;
    line-height: 1.1rem;
`


export const BuyMinerRU = () => {
    return (
        <Container>
            <MainText>Продажа Bytecoin NFT Miners начнется в ближайшее время.</MainText>
            <Description>Присоединяйтесь к списку ожидания и будьте готовы стать одним из первых майнеров Bitcoin, он же Bitcoin on TON.</Description>
            <JoinWaitlistButton>Присоединиться к списку ожидания</JoinWaitlistButton>
            <Link to="https://t.me/bytecoin_ru"
                style={{ width: "100%", textDecoration: "none", display: "flex", justifyContent: "center" }}>
                <FollowButton><LogoinButton src={TelegamLogo} />Следите за новостями о Bytecoin</FollowButton>
            </Link>
            <InfoBlock>
                <InfoText>Цена за 1 NFT: 48 TON</InfoText>
                <InfoText>Максимальное колличество: 3000 NFT Miner</InfoText>
                <InfoText>Распределение между командой и инсайдерами: 0%</InfoText>
            </InfoBlock>
        </Container>
    )
}