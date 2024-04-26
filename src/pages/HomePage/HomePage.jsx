import { InfoWrapper, InfoImg, InfoImages, ListItem, ItemsLink } from './HomePage.module';

import camper1 from '../../images/Van-gif-1.gif';
import camper2 from '../../images/Van-gif-2.gif';
import camper3 from '../../images/Van-gif-3.gif';

const HomePage = () => {
  return (
    <InfoWrapper>
      <InfoImages>
        <InfoImg src={camper1} alt="camper" />
        <InfoImg src={camper2} alt="camper" />
        <InfoImg src={camper3} alt="camper" />
      </InfoImages>
      <ListItem>
        <ItemsLink to="/catalog">Hit the road in style: Rent your dream campervan today!</ItemsLink>
      </ListItem>
    </InfoWrapper>
  );
};

export default HomePage;
