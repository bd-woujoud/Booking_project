import React, { useEffect, useState} from 'react'
import moment from 'moment'
import {Getvoyage,selectGetVoyages} from '../../features/voyage/voyageSlice';
import {useSelector, useDispatch } from 'react-redux';

function GetVoyageA() {
 
    const voyages=useSelector(selectGetVoyages)
    const dispatch =useDispatch()
    useEffect(() => {

        dispatch(Getvoyage())

    }, [])

    return (

        <div>
            <div class="dash_blog" style={{ fontSize: '16px' }}>   {/*onlyyyy list voyage*/}
                <div class="dash_blog_inner">
                  
                    <div class="list_cont">
                        <p>Tableau des Voyages</p>
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
                                   
                                </tr>
                            </thead>
                            <tbody >

                                
                            {

                                   voyages.map((v, i) => {
                                          return (
                                            <tr  >
                                                <td>{v.ville_depart}</td>
                                                <td>{v.ville_arrive}</td>
                                                <td>{v.date_depart}</td>
                                                <td>{v.date_arrive}</td>
                                                <td>{v.prix}</td>
                                                <td>{moment(v.createdAt).format('DD-MM-YYYY')}</td>

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
    )
}

export default GetVoyageA
