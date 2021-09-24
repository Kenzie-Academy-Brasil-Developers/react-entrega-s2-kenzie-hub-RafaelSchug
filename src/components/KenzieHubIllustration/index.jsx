import Component from './style';
import illustration from '../../assets/imgs/illustration.svg';

const KenzieHubIllustration = () => {
    return (
        <Component>
            <h2>Kenzie Hub</h2>
            <span>Acompanhe seu desenvolvimento Fullstack</span>
            <img src={illustration} alt="" />
        </Component>
    )
}

export default KenzieHubIllustration;