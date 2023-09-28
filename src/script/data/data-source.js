class DataSource {
    static searchKodePos(keyword) {
      return fetch(`https://nbc.vanmason.web.id/service/kodepos/${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.kodepos) {
            return Promise.resolve(responseJson.kodepos);
          } else {
            return Promise.reject(`${keyword} is not found`);
          }
        })
    }
  }
  
  export default DataSource;
  