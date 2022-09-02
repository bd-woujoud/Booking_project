import React, { useEffect }  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { DeleteVoyageur, GetVoyageur, SelectAllVoyageur, SelectdeleteVoyageur } from '../../features/voyageurs/voyageurSlice';


function GetUsers() {

const allvoyageur =useSelector(SelectAllVoyageur )
const deleteVoyageur = useSelector(SelectdeleteVoyageur)
const dispatch=useDispatch()

useEffect(()=>{

dispatch(GetVoyageur())

},[deleteVoyageur])

    return (

        <div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="table-responsive pt-3" >
                            <table class="table table-striped project-orders-table" >
                                <thead >
                                    <tr>
                                        <th >Nom</th>
                                        <th>Prenom</th>
                                        <th>Email</th>
                                        <th>N°Passport</th>
                                        <th>téléphone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                   {
                                   allvoyageur.map((e,i)=>{
                                       return(
                                                <tr  >
                                                    <td>{e.nom}</td>
                                                    <td>{e.prenom}</td>
                                                    <td>{e.email}</td>
                                                    <td>{e.Num_passport}</td>
                                                    <td>{e.tel}</td>
                                                  

                                                    <td class="d-flex align-items-center">
                                                        <button  onClick= {()=>dispatch(DeleteVoyageur(e._id))}     type="button" class="btn btn-danger btn-sm btn-icon-text">
                                                            Supprimé
                                                            <i class="typcn typcn-delete-outline btn-icon-append"></i>
                                                        </button>

                                                    </td>
                                                </tr>
                                   ) })
                                       }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetUsers
