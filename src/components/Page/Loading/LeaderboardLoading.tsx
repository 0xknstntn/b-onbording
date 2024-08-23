import styled from "styled-components";
import LeaderBoardGif from '../../../assets/LoadingLeaderboard.gif'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #151314;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Logo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`


export const LeadeboardLoadingPage = () => {
    return (
        <>
            <Container>
                <Logo loading="lazy" src={LeaderBoardGif} />
            </Container>
        </>
    )
}