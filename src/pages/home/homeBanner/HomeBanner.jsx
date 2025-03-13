import "./style.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HomeBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");
  const { url } = useSelector((state) => state.home);
  const [disable , setDisabled] = useState(false)
  console.log(data);

  useEffect(() => {
    const bg =
      url.poster +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    console.log(query)  
     if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  const handleNavigate = () => {
    console.log(query)
    if (query.length < 1) {
      setDisabled(true)
      setTimeout(() => {
        setDisabled(false)
      }, 1500);
    }else{
      setDisabled(false)
      navigate(`/search/${query}`);
    }
  };

  return (
    <ContentWrapper>
      <div className="heroBanner">
        {!loading && (
          <div className="backdrop-img">
            <Img src={background} />
          </div>
        )}
        <div className="opacity-layer"></div>
        <div className="wrapper">
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Million of Movies , TV shows and people to discover.Explore Now.
            </span>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <button disabled={disable} onClick={handleNavigate}>Search</button>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default HomeBanner;
