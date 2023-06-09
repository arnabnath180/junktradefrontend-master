import axios from "axios";

const BASE_URL = "https://junktrade-backend.azurewebsites.net/admin";


class AdminService {

loginAdmin(data) {
    return axios.post(BASE_URL+"/login", data);
}

scrapList(config) {
    return axios.get(BASE_URL+"/getScrapList",config);
}

scrapListItem(scrapId,config) {
   return axios.get(BASE_URL+"/getScrapItemList/" + scrapId,config);
}

scrapListDelete (scrapId,config) {
    return axios.delete(`${BASE_URL}/deleteScrapList/${scrapId}`,config);
}

}

export default new AdminService();