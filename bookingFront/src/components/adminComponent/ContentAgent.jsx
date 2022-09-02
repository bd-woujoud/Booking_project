import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteAgent, GetAgent, SelectAllagent, SelectDeleteagent } from '../../features/users/userSlice'
import SideBarPrincipal from '../../layouts/SiderBarPrincipal'

function ContentAgent() {

    const allagent =useSelector(SelectAllagent )
    const deleteagent =useSelector(SelectDeleteagent )

    const dispatch=useDispatch()
    
    useEffect(()=>{
    
    dispatch(GetAgent())
    
    },[deleteagent])
    

  return (
    <div>

    <SideBarPrincipal /><div id="content">

        <div class='main ml-5 ' style={{ width: "80%" }}>
            <div class='container-fluid'>
                <div className="row column1 " style={{ marginTop: "150px"}}>

                    
                <div class="col-md-12">
                    <div class="card">
                        <div class="table-responsive pt-3" >
                            <table class="table table-striped project-orders-table" >
                                <thead >
                                    <tr>

                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Email</th>
                                       
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                   {

                                   allagent.map((e,i)=>{
                                       return(
                                                <tr  >
                                                    <td>{e.nom}</td>
                                                    <td>{e.prenom}</td>
                                                    <td>{e.email}</td>
                                              

                                                    <td class="d-flex align-items-center">
                                                        <button  onClick= {()=>dispatch(DeleteAgent(e._id))}   type="button" class="btn btn-danger btn-sm btn-icon-text">
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
        </div>
    </div>
</div>
  )
}

export default ContentAgent