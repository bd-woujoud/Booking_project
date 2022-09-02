
import React, { useEffect } from 'react'

import 'antd/dist/antd.css'
import SideBarPrincipal from '../../layouts/SiderBarPrincipal'
import moment from 'moment'
import {Getvoyage,selectGetVoyages} from '../../features/voyage/voyageSlice';
import {useSelector, useDispatch } from 'react-redux';

function ContentVol() {


    const voyages=useSelector(selectGetVoyages)
    const dispatch =useDispatch()
    useEffect(() => {

        dispatch(Getvoyage())

    }, [])


    return (

        <div>

            <SideBarPrincipal /><div id="content">

                <div class='main ml-5 ' style={{ width: "100%" , marginTop: "150px"}}>
                    <div class='container-fluid'>
                        <div className="row column1 " style={{ marginTop: "50px" }}> {/*Dashboared*/}

                            {/* getAll voyage */}
                            <div class="col-md-8 col-lg-12">

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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ContentVol
