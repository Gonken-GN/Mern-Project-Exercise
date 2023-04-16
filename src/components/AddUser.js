import React from 'react'

const AddUser = () => {
  return (
    <div className='columns'>
        <div className='column is-half'>
            <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                    <input type='text' className='input' placeholder='Name'></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Email</label>
                <div className='control'>
                    <input type='text' className='input' placeholder='Email'></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                    <input type='text' className='input' placeholder='Email'></input>
                </div>
            </div>
            <div className='field'>
                <label className='label'>Gender</label>
                <div className='control'>
                    <div className='select is-fullwidth'>
                        <select>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddUser;