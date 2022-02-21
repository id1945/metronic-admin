import React, {Dispatch, SetStateAction, useState, useEffect} from 'react'
import {Modal} from 'react-bootstrap-v5'
import {KTSVG} from '../../../../../_metronic/helpers'

type Props = {
  data: {location: string; setLocation: Dispatch<SetStateAction<string>>}
  show: boolean
  handleClose: () => void
}

const SelectLocationModal: React.FC<Props> = ({show, handleClose, data}) => {
  useEffect(() => {
    initMap()
  }, [])

  const [location, setLocation] = useState(data.location)
  const dissmissLocation = () => {
    setLocation(data.location)
    handleClose()
  }
  const applyLocation = () => {
    data.setLocation(location)
    handleClose()
  }
  const initMap = () => {}

  return (
    <Modal
      className='modal fade'
      id='kt_modal_select_location'
      data-backdrop='static'
      tabIndex={-1}
      role='dialog'
      show={show}
      dialogClassName='modal-xl'
      aria-hidden='true'
      onHide={dissmissLocation}
    >
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>Select Location</h5>

          <div
            className='btn btn-icon btn-sm btn-active-light-primary ms-2'
            onClick={dissmissLocation}
          >
            <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2x' />
          </div>
        </div>
        <div className='modal-body'>
          <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} />
          <div id='kt_modal_select_location_map' className='map h-450px'></div>
        </div>
        <div className='modal-footer'>
          <button type='button' className='btn btn-light-primary' onClick={dissmissLocation}>
            Cancel
          </button>
          <button id='submit' type='button' className='btn btn-primary' onClick={applyLocation}>
            Apply
          </button>
        </div>
      </div>
    </Modal>
  )
}

export {SelectLocationModal}
