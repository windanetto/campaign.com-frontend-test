export const SearchField = ({ term, searchKeyword }) => {
  const getSearchTerm = (event) => {
    searchKeyword(event.target.value)
  }
  return (
    <div className="row">
      <div className="col-8">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search" 
          value={term}
          onChange={getSearchTerm}
        />
      </div>
      <div className="col-4" style={styles.profileName}>
        Winda Agusthia
      </div>
    </div>
  );
}

export default SearchField;

const styles = {
  profileName: {
    fontSize: '18px',
    alignSelf: 'center',
    fontWeight: 'bold'
  }
}