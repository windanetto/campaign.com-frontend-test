import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { getData } from '../store/action/apiAction';
import PictureSlide from './PictureSlide';
import SearchField from './SearchField';

export const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.apiReducer.data);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchResult, setSearchResult] = useState([]);
  const [infinite, setInfinite] = useState(true)

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    infinite: infinite,
    autoplay: false,
    draggable: true,
    arrows: false
  }

  useEffect(() => {
    dispatch(getData())
  }, []);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== null) {
      const newMainPic = data.filter((dt) => {
        return dt.show.name.toLowerCase().includes(searchTerm.toLowerCase())
      });
      setSearchResult(newMainPic)
      newMainPic.length > 6 ? setInfinite(true) : setInfinite(false)
    } else {
      setSearchResult(data)
    }
  }
  return (
    <div className="container-fluid">
      <div className="card" style={styles.h100, styles.home}>
        <div className="card-body">
          <div className="row pb-4">
            <div className="col-6">
              <h3><b>Campflix</b></h3>
            </div>
            <div className="col-6">
              <SearchField term={searchTerm} searchKeyword={searchHandler}/>
            </div>
          </div>
          <div className="row">
            <div className="col-12 pb-4" style={styles.center}>
              <img src={data[0]?.show?.image?.medium} alt="" />
            </div>
            <div className="col">
              <div className="row">
                <div className="col-2" style={styles.att}>
                  <p><b>Name :</b></p>
                </div>
                <div className="col f20">
                  <p>{data[0]?.show?.name}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-2" style={styles.att}>
                  <p><b>URL :</b></p>
                </div>
                <div className="col f20">
                  <a href={data[0]?.show?.url}>{data[0]?.show?.url} </a>
                </div>
              </div>
              <div className="row">
                <div className="col-2" style={styles.att}>
                  <p><b>Genres :</b></p>
                </div>
                <div className="col f20">
                  <p>{data[0]?.show?.genres.join(', ')}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-2" style={styles.att}>
                  <p><b>Summary :</b></p>
                </div>
                <div className="col f20">
                  <p>{data[0]?.show?.summary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="row pt-5">
        <Slider {...settings}>
          { 
            searchTerm.length === 0 ?
            data.map((dt) => (
              <PictureSlide key={dt.show.id} data={dt}/>
            )) : 
            searchResult.map((dt) => (
              <PictureSlide key={dt.show.id} data={dt}/>
            ))
          }
        </Slider>
      </div>  
    </div>
  );
}

export default Home;

const styles = {
  home: {
    backgroundColor: '#edf2fb',
  },

  h100: {
    height: '100%'
  },

  att: {
    textAlignLast: 'justify',
    fontSize: '20px'
  },

  center: {
    // textAlign: 'center',
    textAlign: '-webkit-center'
  },
}