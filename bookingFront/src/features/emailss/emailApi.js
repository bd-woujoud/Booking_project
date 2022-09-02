
import axios from "axios";
import { requests } from "../requests";

export function getemail() {

    return axios.get(requests.emailapi + '/allemail')

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )
    }




    
