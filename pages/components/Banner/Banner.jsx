import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel, Thumbs } from "react-responsive-carousel";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative banner" style={{ marginTop: "5rem" }}>
      <div className="banner_container bg-gradient-to-t from-gray-100 to-white-0"></div>
      <Carousel
        autoPlay={true}
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/GW/Event_hero_Teaser_PC_1500X600_eng._CB664069228_.jpg"
            objectFit="cover"
            height={600}
            width={1500}
            alt=""
          />
        </div>
        <div>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Gateway_JWELSSH/BBDJuly/Men/bob/GW_PC_BUNK_1500x600._CB663450808_.jpg"
            objectFit="cover"
            height={400}
            width={1500}
            alt=""
          />
        </div>
        <div>
          <Image
            src="https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/SBD20-December/DesktopHero_Template_1500x600_1._CB664430073_.jpg"
            objectFit="cover"
            height={400}
            width={1500}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
