
const network = {
    ip: '192.168.82.176',
    ip1: '10.0.180.37',
    port: 8000,
}
class ApiService {
    axiosInstance() {
        return axios.create({
            baseURL: `http://${network.ip}:${network.port}`
        })
    }
    getUrl() {
        return `http://${network.ip}:${network.port}`
    }
   /**
    * Executes post request
    * @param {String} url 
    * @param {object} data 
    * @param {String} token 
    */
   add(url, data, token = null) {
       return this.axiosInstance().post(url, data, {
           headers: {
               Authorization: `token ${token}`
           }
       })
   }
   /**
    * Execute une requete get sur toutes les données disponibles
    * @param {String} url
    * @param {String} token 
    */
   findAll(url, token = null) {
       return this.axiosInstance().get(url, {
           headers: {
               Authorization: `token ${token}`
           }
       })
   }
   /**
    * Exécute une requête de selection par valeur d'id
    * @param {String} url 
    * @param {Integer} id 
    * @param {String} token 
    */
   findOne(url, id , token = null) {
       return this.axiosInstance().get(url, {
           params: { id: id },
           headers: {
               Authorization: `token ${token}`
           }
       })
   }
   /**
    * Requête de mise à jour
    * @param {String} url 
    * @param {Object} data 
    * @param {Integer} id 
    * @param {String} token 
    */
   update(url, data, id, token = null) {
       return this.axiosInstance().put(url, data, {
            params: { id },
            headers: {
                Authorization: `token ${token}`
            }
       })
   }
   /**
    * 
    * @param {String} url 
    * @param {Integer} id 
    * @param {String} token 
    */
   delete(url, id, token = null) {
       return this.axiosInstance().delete(url, {
           params: { id },
           Authorization: `token ${token}`
       })
   }
   

}