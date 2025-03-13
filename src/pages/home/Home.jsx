import "./style.scss";

import HomeBanner from "./homeBanner/HomeBanner.jsx";
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import TopRated from './topRated/TopRated'

const Home = () => {
  return (
    <div className="homePage">
      <HomeBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};

export default Home;
