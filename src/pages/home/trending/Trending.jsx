import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "../style.scss";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs.jsx";
import useFetch from '../../../hooks/useFetch'
import { useState } from 'react';
import Carousel from "../../../components/carousel/Carousel.jsx";


const Trending = () => {
  const [endpoint , setEndpoint] = useState('day')

  const { data , loading } = useFetch(`/trending/movie/${endpoint}`)
  const onTabChange = (tab) => {
    setEndpoint(tab === 'Day' ? 'day' : 'week');
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle trending">Trending</span>
        <SwitchTabs className='switch' data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
