import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../Redux/action'
export default function AddContact() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        status: "active"
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSave = () => {
        dispatch(addContact(formData))
        console.log(formData)
    }
    return (
        <>
            <div className='row'>
                <div className='col-4'></div>
                <div className='col-4'>
                    <div className='card mt-1'>
                        <div className='card-header bg-secondary'>
                            <h4>Add Contact Detail</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className='row'>
                                    <div className='col'>
                                        <label>First Name</label>
                                    </div>
                                    <div className='col'>
                                        <input type='text' name='firstName' className='form-control' value={formData.firstName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col'>
                                        <label>Last Name</label>
                                    </div>
                                    <div className='col'>
                                        <input type='text' name='lastName' className='form-control' value={formData.lastName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col'>
                                        <label>Status</label>
                                    </div>
                                    <div className='col'>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="status" value={'active'} onChange={handleChange} />
                                            <label className="form-check-label">Active</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="status" value={'inactive'} onChange={handleChange} />
                                            <label className="form-check-label">Inactive</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className='card-footer bg-light'>
                            <button className='btn btn-success' onClick={handleSave}> send </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
