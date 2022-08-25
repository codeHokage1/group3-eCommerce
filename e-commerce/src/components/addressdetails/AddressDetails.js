import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../addressdetails/AddressDetails.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddressDetails = ({ regName }) => {
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const notifyAddressUpdate = () => toast.success("New Address Details Saved!");


  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="customerdiv">
              <p className="customername">Name: {regName}</p>
              <p>Address: {address}</p>
              <p>Phone Number: {phone}</p>
              <form onSubmit={(e) => { e.preventDefault(); notifyAddressUpdate() }} className="address-form">
                <input type='text' value={address} onChange={e => setAddress(e.target.value)} placeholder='Set an address' />
                <input type='text' value={phone} onChange={e => setPhone(e.target.value)} placeholder='Set a phone number' />
                <input type='submit' value='Save Changes' />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AddressDetails
