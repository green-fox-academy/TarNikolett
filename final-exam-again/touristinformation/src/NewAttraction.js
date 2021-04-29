import {useState} from 'react';

import InputItem from './InputField.js';
import db from './Firebase/db.js';

let textForErrorMessages = {
  emptyField: 'Hiányzó érték',
  moreThanThousand: 'nem lehet több, mint 1000 karakter',
  lessThanZero:'nem lehet kisebb, mint 0'
};

export default function NewAttractionForm (){
  let [isValid, setIsValid] = useState(false);
  let [errorMessage, setErrorMessage] = useState({
    address: '',
    category: '',
    name: '',
    note: '',
    price: '',
    settlement: ''
  });
  let [alert, setAlert] = useState('');
  let [data, setData] = useState({
    address: '',
    category: '',
    name: '',
    note: '',
    price: '',
    settlement: ''
  });

  function handleSubmit (e){  
    e.preventDefault();
    if(isValid){
      db.collection('attractions')
      .add({
          address:data.address,
          category:data.category,
          name:data.name,
          note:data.note,
          price:data.price,
          settlement:data.settlement
      });
      setAlert('Sikeres mentés');
      setData({
        address: '',
        category: '',
        name: '',
        note: '',
        price: '',
        settlement: ''
      });
    }
  };
  function checkAllData(){
    for (let fieldName of Object.keys(errorMessage)) {
      if(fieldName!== 'note' && !validateField(fieldName, data[fieldName])){
        setIsValid(false);
        setAlert('Üres formot nem küldhetsz!')
      }
      else {
        setIsValid(true);
      }
    }
  };

  function validateField (fieldName, value){
      if(value.length < 1 && fieldName !== 'note'){
        setErrorMessage({
          ...errorMessage,
          [fieldName] : textForErrorMessages.emptyField
        });
        return false
      }
      else if(fieldName === "price" && value < 0){
        setErrorMessage({
          ...errorMessage,
          [fieldName] : textForErrorMessages.lessThanZero
        })
        return false
      }
      else if(value.length >= 1 && fieldName !== 'note'){
        setErrorMessage({
          ...errorMessage,
          [fieldName] : ''
        });
        return true
      }
      else if(fieldName === "note" && value.length > 1000){
        setErrorMessage({
          ...errorMessage,
          [fieldName] : textForErrorMessages.moreThanThousand
        });
        return false
      }
  };

  function handleInputData(e){
    setData({
      ...data,
      [e.target.name] : e.target.value
    });
  };

  return(
    <>
      <h1>Új látványosság felvitele</h1>
      <form onSubmit={handleSubmit}>
        <InputItem 
          className={errorMessage.name && errorMessage.name !== '' ? "form-control is-invalid" : "form-control"}
          id="name"
          name="name"
          label="Megnevezés"
          type="text"
          value={data.name}
          onBlur={e => validateField(e.target.name, e.target.value)}
          onChange={handleInputData}
        />
      {errorMessage.name && <div className={errorMessage.name ? "text-danger" : ""}>{errorMessage.name}</div>}

        <InputItem 
          className={errorMessage.settlement && errorMessage.settlement !== '' ? "form-control is-invalid" : "form-control"}
          id="settlement"
          name="settlement"
          label="Település"
          value={data.settlement}
          type="text"
          onBlur={e => validateField(e.target.name, e.target.value)}
          onChange={handleInputData}
        />
      {errorMessage.settlement && <div className={errorMessage.settlement ? "text-danger" : ""}>{errorMessage.settlement}</div>}

        <InputItem 
          className={errorMessage.address && errorMessage.address !== '' ? "form-control is-invalid" : "form-control"}
          id="address"
          name="address"
          label="Cím"
          type="text"
          value={data.address}
          onBlur={e => validateField(e.target.name, e.target.value)}
          onChange={handleInputData}
        />
      {errorMessage.address && <div className={errorMessage.address ? "text-danger" : ""}>{errorMessage.address}</div>}

        <label htmlFor="category">Kategória</label>
        <select
          className={errorMessage.category && errorMessage.category !== ''? "form-select is-invalid" : "form-select"}
          name="category"
          id="category"
          value={data.category}
          onBlur={e => validateField(e.target.name, e.target.value)}
          onChange={handleInputData}>
            <option value="">Válassz!</option>
            <option value="múzeum">múzeum</option>
            <option value="étterem">étterem</option>
            <option value="építmény">építmény</option>
        </select>
      {errorMessage.category && <div className={errorMessage.category ? "text-danger" : ""}>{errorMessage.category}</div>}
      
        <InputItem 
          className={errorMessage.price && errorMessage.price !== '' ? "form-control is-invalid" : "form-control"}
          id="price"
          name="price"
          label="Ár"
          type="number"
          value={data.price}
          onBlur={e => validateField(e.target.name, e.target.value)}
          onChange={handleInputData}
        />
      {errorMessage.price && <div className={errorMessage.price ? "text-danger" : ""}>{errorMessage.price}</div>}

        <label htmlFor="note">Megjegyzés</label>
        <textarea
          className={errorMessage.note && errorMessage.note !== '' ? "form-control is-invalid" : "form-control"}
          id="note"
          name="note"
          value={data.note}
          onBlur={e => validateField(e.target.name, e.target.value)}
          onChange={handleInputData}>
        </textarea>
      {errorMessage.note && <div className={errorMessage.note ? "text-danger" : ""}>{errorMessage.note}</div>}

        <button
          type="submit"
          className="btn btn-primary mt-3" 
          onClick={checkAllData}
        >Mentés</button>

      {alert && alert !== "Üres formot nem küldhetsz!" && <div className="alert alert-success mt-3">{alert}</div>}
      {alert && alert === "Üres formot nem küldhetsz!" && <div className="alert alert-danger mt-3">{alert}</div>}

    </form>
  </>
  )
};