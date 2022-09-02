import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import SideBarPrincipal from '../../layouts/SiderBarPrincipal';
import { DeleteReservation, GetReservationByUser, selectdelete, selectGetbyUser } from '../../features/reservation/reservationSlice';
import { AuthContext } from '../../context/AuthContext';
import { message } from 'antd'
function MesReservation() {

    const mesreservation = useSelector(selectGetbyUser)
    const deletereservation = useSelector(selectdelete)
    const dispatch = useDispatch()
    const {user}=useContext(AuthContext)

    useEffect(() => {

        dispatch(GetReservationByUser(user._id))

    }, [deletereservation])


    const success = () => {

        message.success('reservation annulée avec succees');
    };

    return (

        <div>

            <SideBarPrincipal />
            <div id="content">
                <div class='main ml-5 ' style={{ width: "100%" }}>
                    <div class='container-fluid'>
                        <div className="row column1 " style={{ marginTop: "100px" }}>

                            <div class="col-md-8 col-lg-12">
                                <div class="dash_blog" style={{ fontSize: '16px' }}>
                                    <div class="dash_blog_inner">

                                        <div class="list_cont">
                                            <p>Mes reservations enregistrées</p>
                                        </div>
                                        <div class="table-responsive-sm">
                                            <table class="table table-striped projects">
                                                <thead class="thead-dark">
                                                    <tr>
                                                        <th>ville de départ</th>
                                                        <th>ville d'arrivée</th>
                                                        <th>date de départ</th>
                                                        <th>date d'arrivée</th>
                                                        <th>prix</th>
                                                        <th>Date de publication</th>
                                                        <th>Etat</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody >

                                                    {

                                                        mesreservation.map((r, i) => {
                                                            return (
                                                                <tr  >
                                                                    <td>{r.voyage.ville_depart}</td>
                                                                    <td>{r.voyage.ville_arrive}</td>
                                                                    <td>{r.voyage.date_depart}</td>
                                                                    <td>{r.voyage.date_arrive}</td>
                                                                    <td>{r.voyage.prix}</td>
                                                                    <td>{moment(r.createdAt).format('DD-MM-YYYY')}</td>
                                                                    <td>     {
                                                                    r.isvalid && r.isvalid
                                                                        ?
                                                                        <button type="button" class="btn btn-secondary " style={{ backgroundColor: 'green', color: 'white', cursor: 'default', width: '100px' }} >confirmer</button>
                                                                        :

                                                                        <button type="button" class="btn btn-secondary " style={{ fontSize: '15px', cursor: 'default', width: '100px' }}>en cours</button>
                                                                }</td>
                                                                    <td>
                                                                    <button type="button" class="btn btn-danger" onClick={() => { dispatch(DeleteReservation(r._id)); success() }}>Annuler</button></td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div></div></div></div></div>

        </div>
    )
}

export default MesReservation
