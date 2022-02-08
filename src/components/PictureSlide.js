export const PictureSlide = ({ data }) => {
  // console.log('data in slide', data)
  if (!data) {
    return ( 
      <div className="row">
        <div className="col">
          kosong
        </div>
      </div>  
    );
  } else {
    return (
      <div>
        {
          data?.show?.image ? 
          <div className="row">
            <div className="col-12" style={styles.center}>
              <a href={data?.show?.url}>
                <img src={data?.show?.image?.medium} style={styles.img} alt=""/>
              </a>
            </div>
          </div> :
          <div className="row" style={styles.rowCenter, styles.cardEmpty}>
            <div className="col-12" style={styles.center}>
              <i className="bi bi-film" style={styles.iconSize}></i>
            </div>
            <div className="col-12" style={styles.center}>
              <a href={data?.show?.url}>
                {data?.show?.name} 
              </a>
            </div>  
          </div>
        }
       
        <div className="row">
          <div className="col-12 pt-2" style={styles.center}>
            <b>{data?.show?.name}</b>
          </div>
        </div>
      </div>
    )
  }
}

export default PictureSlide;

const styles = {
  h100: {
    height: '100%'
  },
  
  img: {
    height: '185px',
    width: '132px'
  },

  cardEmpty: {
    height: '185px',
    width: '100%',
    margin: 0
  },

  center: {
    // textAlign: 'center',
    textAlign: '-webkit-center'
  },

  rowCenter: {
    height: '100%',
    alignContent: 'center'
  },

  iconSize: {
    fontSize: '75px'
  }
}