
import axios from "axios";

import { requests } from "../requests";

export function createreservation(data) {

    return axios.post(requests.reservationapi + '/createreservation')

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }

export function getreservation() {

    return axios.get(requests.reservationapi + '/allreservation')

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }
export function getReservationbyUser(id) {

    return axios.get(requests.reservationapi +'/getbyuser/'+id)

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }
export function deleteReservation(id) {

    return axios.delete(requests.reservationapi +'/deletereservation/'+id)

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }
export function updateReservation(id) {

    return axios.delete(requests.reservationapi +'/updatereservation/'+id)

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }



    
