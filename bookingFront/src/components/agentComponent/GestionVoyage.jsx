import React, { useEffect, useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import { TiDeleteOutline } from 'react-icons/ti'
import moment from 'moment'
import { Modal } from 'antd'
import CreateVoyage from './CreateVoyage';
import { Deletevoyage, Getvoyage, selectDeleteVoyages, selectGetVoyages, selectUpdateVoyages, Updatevoyage } from '../../features/voyage/voyageSlice';
import { useDispatch, useSelector } from 'react-redux';



function GestionVoyage() {


    const update = useSelector(selectUpdateVoyages)
    const deletes = useSelector(selectDeleteVoyages)
    const voyages = useSelector(selectGetVoyages)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [voyageUpdate, setVoyageUpdate] = useState(null)

    const dispatch = useDispatch()

    const showModal = (id) => {
        setIsModalVisible(true);
        setVoyageUpdate(voyages.find(v => v._id === id)) //bech tjibli les input m3abin selon id
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    useEffect(() => {

        dispatch(Getvoyage())

    }, [update, deletes])


    const handleUpdate = () => {

        let data = {

            ville_depart: voyageUpdate.ville_depart,
            ville_arrive: voyageUpdate.ville_arrive,
            date_depart: voyageUpdate.date_depart,
            date_arrive: voyageUpdate.date_arrive,//ijibli le9dima
            prix: voyageUpdate.prix,
            id: voyageUpdate._id   //bech y3adi el update
        }

        dispatch(Updatevoyage(data))
        handleOk()
    };

    const handlechange = e => {
        const { value, name } = e.target
        setVoyageUpdate(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (

        <div>
            <div class="dash_blog" style={{ fontSize: '16px' }}>
                <div class="dash_blog_inner">
                    <div class="dash_head">
                        <h3 style={{ color: 'black' }}><span><i class="fa fa-reorder"></i> liste des Voyages</span><CreateVoyage /></h3> {/*boutton + create*/}
                    </div>
                    <div class="list_cont">
                        <p>Tableau des Voyages</p> {/*tableau fih liste des voyage et deux bouttons delete et update*/}
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
                                    <th>Action</th>
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

                                                <td><BsPencilSquare onClick={() => showModal(v._id)} style={{ color: 'blue', fontSize: '20px', marginRight: '30px', cursor: 'pointer' }} />
                                                    <TiDeleteOutline onClick={() => { dispatch(Deletevoyage(v._id)) }} style={{ color: 'red', fontSize: '25px', cursor: 'pointer' }} /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <Modal title="update" footer={null} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {/* form for update */}

                <br />
                <form >



                    <form >

                        <div class="form-group" style={{ height: '50px' }}>

                            <input name='ville_depart' value={voyageUpdate ? voyageUpdate.ville_depart : ''} onChange={handlechange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder='ville de départ' />

                        </div>

                        <div class="form-group" style={{ height: '50px' }}>

                            <input name='ville_arrive' value={voyageUpdate ? voyageUpdate.ville_arrive : ''} onChange={handlechange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="ville d'arrivée" />

                        </div>
                        <div class="form-group" style={{ height: '50px' }}>

                            <input name='date_depart' value={voyageUpdate ? voyageUpdate.date_depart : ''} onChange={handlechange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="date de départ" />

                        </div>
                        <div class="form-group" style={{ height: '50px' }}>

                            <input name='date_arrive' value={voyageUpdate ? voyageUpdate.date_arrive : ''} onChange={handlechange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="date d'arrivée" />

                        </div>
                        <div class="form-group" style={{ height: '50px' }}>

                            <input name='prix' value={voyageUpdate ? voyageUpdate.prix : ''} onChange={handlechange} style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="prix" />

                        </div>


                    </form>

                </form>
                <div class="modal-footer" >
                    <button type="button" class="btn btn-primary" onClick={handleUpdate} >Modifier</button>
                </div>

            </Modal>






        </div>
    )
}

export default GestionVoyage
