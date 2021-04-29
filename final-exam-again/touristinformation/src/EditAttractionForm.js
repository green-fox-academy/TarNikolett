import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

import InputItem from './InputField.js';
import db from './Firebase/db.js';

export default function EditAttractionForm (){
  const { id } = useParams();

  let [attraction, setAttraction] = useState({});
  let [alert, setAlert] = useState('');

  useEffect(() => {
    db.collection('attractions')
    .doc(id)
    .get()
    .then((doc) => setAttraction(doc.data()));
  },[id]);

  function handleChange (e) {
    e.preventDefault();
    setAttraction({...attraction,
      [e.target.name]: e.target.value
    });
  };
  
  function handleEditSaveOnClick (e){
    e.preventDefault();
    db.collection("attractions")
    .doc(id)
    .update({
      address: attraction.address,
      category: attraction.category,
      name: attraction.name,
      note: attraction.note,
      price: attraction.price,
      settlement: attraction.settlement
    })
    .then(() => setAlert('Sikeres mentés'));

    setAttraction({
      address: '',
      category: '',
      name: '',
      note: '',
      price: '',
      settlement: ''
    });
  };
  
  return(
    <>
    <h1>Látványosság modósítása</h1>
      {attraction && 
      <form>
        <InputItem 
          className="form-control"
          id="name"
          name="name"
          label="Megnevezés"
          type="text"
          value={attraction.name || ''}
          onChange={handleChange}
        />

        <InputItem 
          className="form-control"
          id="settlement"
          name="settlement"
          label="Település"
          value={attraction.settlement || ''}
          type="text"
          onChange={handleChange}
        />

        <InputItem 
          className="form-control"
          id="address"
          name="address"
          label="Cím"
          type="text"
          value={attraction.address || ''}
          onChange={handleChange}
        />

        <label htmlFor="category">Kategória</label>
        <select
          className="form-control"
          name="category"
          id="category"
          onChange={handleChange}
          value={attraction.category || ''}>
            <option value="">Válassz!</option>
            <option value="múzeum">múzeum</option>
            <option value="étterem">étterem</option>
            <option value="építmény">építmény</option>
        </select>
      
        <InputItem 
          className="form-control"
          id="price"
          name="price"
          label="Ár"
          type="number"
          value={attraction.price || ''}
          onChange={handleChange}
        />

        <label htmlFor="note">Megjegyzés</label>
        <textarea
          className="form-control"
          id="note"
          name="note"
          value={attraction.note || ''} 
          onChange={handleChange}>
        </textarea>

        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleEditSaveOnClick}
        >Mentés</button>

        {alert && <div className="alert alert-success mb-3">{alert}</div>}
      </form>}
  </>
  )
};