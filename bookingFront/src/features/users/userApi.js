import axios from "axios";
import { requests } from "../requests";


export function getagent() {

    return axios.get(requests.usersapi + '/getbyrole')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }
export function deleteagent(id) {

    return axios.delete(requests.usersapi + '/deleteuser/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }

    export function updateUser(data) {
        return axios.put(requests.usersapi + '/update/'+data.id, data.data)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }
    export function uploadAvatar(data) {
        return axios.put(requests.usersapi + '/avatar/' +data.id, data.data)
            .then(res => {
                return res
            })
            .catch(err => {
                return err
            })
    }