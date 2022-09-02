
import React, { useEffect, useState }  from 'react'
import { Modal ,message ,Alert} from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { Createvoyage, Getvoyage, selectCreateVoyages} from '../../features/voyage/voyageSlice';


function CreateVoyage () {

    const [villedepart , setvilledepart] = useState('')
    const [villearrive, setvillearrive] = useState('')
    const [datedepart, setDatedepart] = useState('')
    const [datearrive, setDatearriv] = useState('')
    const [prix, setPrix] = useState('')
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch =useDispatch()
    const errors = useSelector(state => state.voyages.errors)
    
    const showModal = () => {

      setIsModalVisible(true);

    };
  
    const handleOk = () => {

      setIsModalVisible(false);

    };
  
    const handleCancel = () => {

      setIsModalVisible(false);

    };
     
    const addvoyage = (e) => {
        e.preventDefault()
        let data = {
            ville_depart: villedepart,
            ville_arrive: villearrive,
            date_depart: datedepart,
            date_arrive: datearrive,
            prix: prix,
        }
     
        dispatch(Createvoyage(data))
        handleOk()  

    }

    const created=useSelector(selectCreateVoyages)

    useEffect(() => {

        if (created === 'success') {

                setvilledepart('')
                setvillearrive('')
                setDatedepart('')
                setDatearriv('')
                setPrix('')
                success()
                setTimeout(() => {
              setIsModalVisible(false);

            }, 3000);       
        }

        dispatch(Getvoyage())

    }, [created])

    
    const success = () => {
        message.success('vol creer avec succes');
    };

    return (

      <>
      <span class="plus_green_bt" onClick={showModal} style={{ cursor: 'pointer' }}>+</span>

      <Modal footer={null} title="Ajouter un nouveau vol" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
 
          <div class="modal-body" >
            
        
              <form >
                 
                  <div class="form-group" style={{ height: '50px' }}>

                      <input onChange={(e) => setvilledepart(e.target.value)}  style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder='ville de départ' />

                  </div>

                  <div class="form-group" style={{ height: '50px' }}>

                      <input onChange={(e) => setvillearrive(e.target.value)}  style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="ville d'arrivée" />

                  </div>
                  <div class="form-group" style={{ height: '50px' }}>

                      <input  onChange={(e) => setDatedepart(e.target.value)}  style={{ height: '50px', color: 'black', fontSize: '15px' }} type="date" class="form-control" placeholder="date de départ" />

                  </div>

                  
                  <div class="form-group" style={{ height: '50px' }}>

                      <input onChange={(e) => setDatearriv(e.target.value)}  style={{ height: '50px', color: 'black', fontSize: '15px' }} type="date" class="form-control" placeholder="date d'arrivée" />

                  </div>
                  <div class="form-group" style={{ height: '50px' }}>
                      <input onChange={(e) => setPrix(e.target.value)}  style={{ height: '50px', color: 'black', fontSize: '15px' }} type="text" class="form-control" placeholder="prix" />
                  </div>
              </form>
          </div>

          <div class="modal-footer" >
              <button type="button" class="btn btn-primary"   onClick={addvoyage} >Créer</button>
          </div>
      </Modal>

  </>
    )
}

export default CreateVoyage
