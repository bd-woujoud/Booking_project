import React, { useEffect } from 'react'
import SideBarPrincipal from '../../layouts/SiderBarPrincipal'
import { BiCheckDouble } from 'react-icons/bi'
import { GrSend } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { GetReservation, selectGetReservation } from '../../features/reservation/reservationSlice'
import axios from 'axios'


function ContentReservation() {

    const reservation = useSelector(selectGetReservation)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(GetReservation())

    }, [])

    const updateReservation = () => {
    
        axios.put('http://localhost:4000/reservation/updatereservation/'+localStorage.getItem('reservationid'), { isvalid: true })
            .then(res => {

            })
    }

    return (
        <div>

            <SideBarPrincipal />
            <div id="content">
                <div class='main ml-2 ' style={{ marginTop: '100px' }}>
                    <div class='container-fluid'>
                        <div className="row column1 ">

                            <div class="col-md-8 col-lg-12">
                                <h2>Tableau des reservations</h2>
                                <div class="table-responsive-sm mt-5">
                                    <table class="table table-bordered">
                                        <thead class="thead-dark">
                                            <tr>
                                                <th>#</th>
                                                <th>départ</th>
                                                <th>destination</th>
                                                <th>Nom_voyageur</th>
                                                <th>N° Passport</th>
                                                <th>N° Tel</th>
                                                <th>Email</th>
                                                <th>prix</th>
                                                <th>statut</th>
                                                <th>etat</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {
                                                reservation.map((r, i) => {
                                                    console.log(reservation, 'iiiiiiiiiiiiiiii');
                                                    return (
                                                        <tr>
                                                            <td>{i}</td>
                                                            <td>{r.voyage.ville_depart}</td>
                                                            <td>{r.voyage.ville_arrive}</td>
                                                            <td>{r.voyageur.nom} {r.voyageur.prenom}</td>

                                                            <td>{r.voyageur.Num_passport}</td>
                                                            <td>{r.voyageur.tel}</td>
                                                            <td>{r.voyageur.email}</td>
                                                            <td>{r.voyage.prix} $</td>
                                                            <td>

                                                                {
                                                                    r.isvalid
                                                                        ?
                                                                        <BiCheckDouble style={{ fontSize: '25px', color: 'green' }} />
                                                                        :
                                                                        <span onClick={updateReservation} ><GrSend  onClick={() => { localStorage.setItem('reservationid', r._id) }} style={{ cursor: 'pointer', fontSize: '20px' }} /></span>
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    r.isvalid && r.isvalid
                                                                        ?
                                                                        <button type="button" class="btn btn-secondary " style={{ backgroundColor: 'green', color: 'white', cursor: 'default', width: '100px' }} >confirmer</button>
                                                                        :

                                                                        <button type="button" class="btn btn-secondary " style={{ fontSize: '15px', cursor: 'default', width: '100px' }}>en cours</button>
                                                                }

                                                            </td>
                                                        </tr>
                                                    )
                                                })

                                            }

                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div></div>

    )
}

export default ContentReservation