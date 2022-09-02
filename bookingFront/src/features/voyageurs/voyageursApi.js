import axios from "axios";
import { requests } from "../requests";


export function getvoyageurs() {

    return axios.get(requests.voyageurapi + '/allvoyageur')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }
export function deletevoyageurs(id) {

    return axios.delete(requests.voyageurapi + '/deletevoyageur/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }
