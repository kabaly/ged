class CourrielService {
    static addInCourriel(data, token) {
        let formData = new FormData()
        for(let key in data) {
            formData.append(key, data[key])
        }
        return new ApiService().axiosInstance()
           .post('/courrierarrive/crud/', formData, {
            params: {
                id: token
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    static courrierEnvoye(token) {
        return new ApiService().axiosInstance()
        .get('/courrierarrive/envoye/', {
            params: { id: token }
        })
    }
    static listCourrielEntrant(token) {
        return new ApiService()
        .axiosInstance().get('/courrierarrive/crud/', {
            params: {
                id: token
            }
        })
    }
    static ajoutTrafic(token, data) {
        console.log(token)
        data['id'] = token
        return new ApiService()
        .add('/traffic/crud/', data)
    }
    static updateTraffic(data, id) {
        return new ApiService().update('/traffic/crud/', {
            destinataire: data.destinataire
        }, id)
    }
    // renvoi tous les apparts non associés
    static lienApparts(id_appart) {
        return new ApiService().findOne('/lien/getappart/', id_appart)
    }
    // renvoi tous les apparts associés
    static appartsAssocies(token) {
        return new ApiService().findOne('/lien/getappartassocie/', token)
    }
    static ajouterLien(data) {
        return new ApiService().add('/lien/crud/', data)
    }
    /**
     * Gestion des courriers reçus
     */
    static listeCourriersRecus(token) {
        return new ApiService().findOne('/courrierarrive/recu/', token)
    }
    static consulteCourrier(traffic_id) {
        return new ApiService().axiosInstance()
        .put('/courrierarrive/consultation/', { id: traffic_id })
    }
    /**
     * Gestion des courriers sortants
     */
    static ajoutCourrierSortant(data, token) {
        let formData = new FormData()
        for(let key in data) {
            formData.append(key, data[key])
        }
        return new ApiService().axiosInstance()
           .post('/courriersortant/add/', formData, {
            params: {
                id: token
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
    static listeCourrierSortant(token) {
        return new ApiService()
        .axiosInstance().get('/courriersortant/add/', {
            params: {
                id: token
            }
        })
    }
    /**
    * Gestion des annotations
    */
   static ajoutAnnotation(token, data) {
    let formData = new FormData()
    for(let key in data) {
        formData.append(key, data[key])
    }
    return new ApiService().axiosInstance()
    .post('/annotation/crud/', formData, {
        params: { id: token }
    })
   }
   static listeAnnotation(c_id) {
    return new ApiService().axiosInstance()
    .get('/annotation/crud/', {
        params: { id: c_id }
    })
   }
}