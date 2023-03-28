import DetailsText from '../DetailsText'
import DetailsTitle from '../DetailsTitle'
import { Boxes } from './styles'

const Details = () => {
    return (
        <Boxes>
            <div>
                <DetailsTitle>address</DetailsTitle>
                <DetailsText>
                    NiggyNoggy Restaurant <br /> Lolecas BCB
                </DetailsText>
            </div>
            <div>
                <DetailsTitle>reservation</DetailsTitle>
                <DetailsText>
                    9177-tiratira-metemete <br /> bcb@ohyeah.com
                </DetailsText>
            </div>
            <div>
                <DetailsTitle>open hours</DetailsTitle>
                <DetailsText>
                    Monday - Friday: 10 AM - 11 PM <br /> Saturday - Sunday: 9
                    AM - 1 PM
                </DetailsText>
            </div>
        </Boxes>
    )
}

export default Details
