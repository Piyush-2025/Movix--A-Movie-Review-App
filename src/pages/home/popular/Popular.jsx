import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../style.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs.jsx";
import useFetch from '../../../hooks/useFetch'
import { useState } from 'react';
import Carousel from "../../../components/carousel/Carousel.jsx";


const Popular = () => {
  const [endpoint , setEndpoint] = useState('movie')

  const { data , loading } = useFetch(`/${endpoint}/popular`)
  const onTabChange = (tab) => {
    setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle trending">Popular</span>
        <SwitchTabs className='switch' data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Popular;
