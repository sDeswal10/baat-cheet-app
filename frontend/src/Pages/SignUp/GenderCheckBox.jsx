import React from 'react'

const GenderCheckBox = ({onCheckBoxChange, selectedGender}) => {
  return (
    <div className='flex mt-2'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}>
                <span className='label-text'>Male</span>
                <input type='checkbox' className='checkbox checkbox-accent border-blue-600'
                  checked={selectedGender === "male"}
                  onChange={()=>onCheckBoxChange("male")}
                />
            </label>
        </div>
        <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}>
                <span className='label-text'>Female</span>
                <input type='checkbox' className='checkbox border-pink-600 checkbox-secondary'
                  checked={selectedGender === "female"}
                  onChange={()=>onCheckBoxChange("female")}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox