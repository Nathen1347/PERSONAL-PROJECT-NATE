import React, { useState } from "react";
import axios from "axios";
import './editSaved.css'

const EditSavingsAmount = ({currentAmount, id, changeGoals}) => {
    const [inputAmount, setAmount] = useState(0);

    const editSavedAmount = () => {

    let body = {
        id,
        amountNow: +currentAmount + +inputAmount
    }

    axios
      .put(`/api/goal`, body)
      .then((response) => {
        changeGoals(response.data);
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
          value={inputAmount}
          onChange={(e) => setAmount(e.target.value)}
          />
          <button className='button-saved'onClick={editSavedAmount}>Add Money</button>
        </form>
      </div>
    </div>
  );
};

export default EditSavingsAmount;
