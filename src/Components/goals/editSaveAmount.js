import React, { useState } from "react";
import axios from "axios";
import './editSaved.css'

const EditSavingsAmount = (props) => {
  const editSavedAmount = (id, amountNow) => {
    axios
      .put(`/api/goal/${id}/${amountNow}`)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div>
        <form className='form-add-saving'>
          <label className='label-saved'>Add to your Saving's Goal</label>
          <input
          className='input-saved'
          />
          <button className='button-saved'onClick={editSavedAmount}>Add Money</button>
        </form>
      </div>
    </div>
  );
};

export default EditSavingsAmount;
