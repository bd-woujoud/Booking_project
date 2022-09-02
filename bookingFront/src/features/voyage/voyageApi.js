
import axios from "axios";
import { requests } from "../requests";

export function createvoyage(data) {

    return axios.post(requests.voyageapi + '/createvoyage',data) 
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
    }

export function getvoyage() {

    return axios.get(requests.voyageapi + '/allvoyage')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

    }

export function  search(data) {

    return axios.get(`http://localhost:4000/voyage/search?keyword=${data.keyword}`)
        .then(res => {
            return res
        }
        )
        .catch(err => {
            return err
        }
        )
}

export function deletevoyage(id) {

    return axios.delete(requests.voyageapi + '/deletevoyage/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }

export function updatevoyage(data) {

    return axios.put(requests.voyageapi + '/updatevoyage/'+data.id,data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }