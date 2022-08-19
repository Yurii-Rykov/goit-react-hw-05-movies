  const axios = require('axios').default;

    async function axiosRequest() {
        try{
            const response = await axios({
                method: 'get',
                url: `https:api.themoviedb.org/3/movie/550?api_key=7e27a31a64f35e2d3f45ab72b99097a8`,
            })
            return response;
        }catch(error) {
           console.log(error); 
        }
    }

export default axiosRequest;