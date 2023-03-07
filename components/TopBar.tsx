import styled from 'styled-components'
import {} from '../styles/globalStyles'
import Image from 'next/image'
//import burgerBrand from '../assets/burger_brand.png'

const TopBar = () => {
    return (
        <div>
            <Title>
                <Image
                    src="/burger_brand_white.png"
                    width={200}
                    height={180}
                    alt="burger"
                />
            </Title>
            <Vertices></Vertices>
            <Info></Info>
        </div>
    )
}

export default TopBar

const Title = styled.div`
    height: 250px;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg};
    display: flex;
    justify-content: center;
    align-items: center;
`

const Info = styled.div`
    height: 250px;
    background-color: ${(props) => props.theme.fg};
    background-image: url(https://demo-storage.com/pm/wp/vincent/wp-content/uploads/2017/02/back_2.png) !important;
`

const Vertices = styled.div`
    height: 10px;
    opacity: 1;
    background-color: ${(props) => props.theme.bg};
    background-image: linear-gradient(
            135deg,
            ${(props) => props.theme.bg} 25%,
            transparent 25%
        ),
        linear-gradient(
            225deg,
            ${(props) => props.theme.bg} 25%,
            transparent 25%
        ),
        linear-gradient(
            45deg,
            ${(props) => props.theme.fg} 25%,
            transparent 25%
        ),
        linear-gradient(
            315deg,
            ${(props) => props.theme.fg} 25%,
            ${(props) => props.theme.fg} 25%
        );
    background-position: 10px 0, 10px 0, 0 0, 0 0;
    background-size: 10px 10px;
    background-repeat: repeat;
`
