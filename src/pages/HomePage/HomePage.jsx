import { InfoWrapper, InfoImg, InfoImages, InfoTitle } from './HomePage.module';

import camper1 from '../../images/Van-gif.gif';
import camper2 from '../../images/giphy.gif';
import camper3 from '../../images/giphy (1).gif';

const HomePage = () => {
  return (
    <InfoWrapper>
      <InfoImages>
        <InfoImg src={camper1} alt="camper" />
        <InfoImg src={camper2} alt="camper" />
        <InfoImg src={camper3} alt="camper" />
      </InfoImages>
      <InfoTitle>Hit the road in style: Rent your dream campervan today! </InfoTitle>
      <p>
        Subheading Unleash your wanderlust with our fleet of comfortable and adventure-ready campervans. Text Dreaming
        of freedom and exploration? Ditch the hotels and embrace the open road with a campervan rental! We offer a
        variety of stylish and functional campervans, perfect for creating unforgettable memories on your next
        adventure. Escape the ordinary: Travel at your own pace, stopping whenever a scenic spot beckons. Experience the
        joy of self-sufficiency with a campervan equipped for cooking, sleeping, and relaxing in comfort. Explore hidden
        gems and off-the-beaten-path destinations inaccessible to traditional vehicles. Campervans for every adventure:
        Our diverse campervan fleet caters to all travel styles. Choose from compact and maneuverable vans for solo
        trips or couples, or opt for spacious vans with sleeping areas for families or groups. All the comforts of home,
        on wheels: Each campervan comes fully equipped with: Kitchenette with cooking essentials Cozy sleeping area(s)
        Comfortable seating and dining space Storage compartments for your gear Hassle-free rentals: We take the stress
        out of your adventure. Our campervans are meticulously maintained and ready to hit the road. We also offer
        additional services like: Pre-trip orientation Camping gear rentals Airport pickup and drop-off Start your
        adventure today! Explore our website to browse our campervan selection and find the perfect fit for your dream
        trip. Call to action Book your campervan rental now and get ready to explore!
      </p>
    </InfoWrapper>
  );
};

export default HomePage;
