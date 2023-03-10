import styled from 'styled-components'
import {} from '../styles/globalStyles'
import Image from 'next/image'

type Props = {
    categories: Array<any>
}

const TopBar = ({ categories }: Props) => {
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
            <MenuWrapper>
                <Menu>
                    {categories
                        .filter((category) => category.parent === 0)
                        .map((category) => {
                            return (
                                <MenuItem key={category}>
                                    {category.name}
                                </MenuItem>
                            )
                        })}
                </Menu>
            </MenuWrapper>
        </div>
    )
}

export default TopBar

const MenuWrapper = styled.div``

const Menu = styled.ul`
    text-align: center;
    list-style-type: none;
    padding-inline-start: 0;
    padding: 0px 20px 20px;
`

const MenuItem = styled.li`
    display: inline-block;
    color: white;
    font-family: 'Khand-Bold';
    margin: 8px 12px;
    padding: 4px 0px;
    cursor: pointer;
    letter-spacing: 1.5px;
    border-bottom: 1px solid ${(props) => props.theme.bg};

    &:hover {
        color: ${(props) => props.theme.fg};
        border-bottom: 1px solid ${(props) => props.theme.fg};

        /* Apply to all changed properties */
        transition: color 0.2s linear, border 0.2s linear;
    }
`

const Title = styled.div`
    height: 180px;
    padding: 20px 0px 0px;
    background-color: ${(props) => props.theme.bg};
    color: ${(props) => props.theme.fg};
    display: flex;
    justify-content: center;
    align-items: center;
`

/* const Info = styled.div`
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
` */
