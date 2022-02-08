const apiURL = 'http://api.tvmaze.com/search/shows?q=girls';

export const getData = () => {
  return (dispatch) => {
    fetch(`${apiURL}`, { method: 'GET'})
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw {res}
        }
      })
      .then(res => {
        dispatch({
          type: 'FETCH_DATA',
          payload: res
        })
      })
      .catch(err => {
        console.log('ERROR -->', err)
        alert('There is something wrong!!!')
      })
  }
}