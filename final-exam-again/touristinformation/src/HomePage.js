import {useState, useEffect} from 'react';
import { Redirect } from "react-router-dom";

import db from './Firebase/db.js';

export default function HomePage (){
  const [attractions, setAttractions] = useState([]);
  const [addClicked, setAddClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [specificEditID, setspecificEditID] = useState(null);
  const

  let getData = querySnapshot => {
    let attractions =[];
    querySnapshot.forEach(doc => {
      const row = {
        ...doc.data(),
        id:doc.id
      };
      attractions.push(row);
    });
    setAttractions(attractions);
  };

  useEffect(() => {
    db.collection('attractions')
    .get()
    .then(getData);
  }, []);

  function orderTable (e){
    let orderBy = e.target.dataset.name;
    db.collection('attractions').orderBy(orderBy)
    .get()
    .then(getData);
  };

  function handleOnClick (){
    setAddClicked(true)
  };


  function handleEditOnClick (e){
    setspecificEditID(e.target.dataset.id);
    setEditClicked(true);
  };

  if (editClicked){
    return <Redirect to={{
      pathname: `/attraction/edit/${specificEditID}`
    }}
    />
  };

  function filterData(e){
    let filterTerm = e.target.value;
    if(filterTerm === ''){
      db.collection('attractions')
        .get()
        .then(getData);
    }
    else{
      db.collection('attractions').where('settlement', "==", filterTerm)
      .get()
      .then(getData);
    }
  };

  function handleDeleteOnClick (e){
    let specificID = e.target.dataset.id;
    db.collection('attractions').doc(specificID).delete();
    const afterDeleteAttractions = attractions.filter(
        attraction => attraction.id !== specificID
    );
    setAttractions(afterDeleteAttractions);
  };

  if (addClicked){
    return <Redirect to="/attraction/new" />
  };
  
  return (
    <>
      <h1>Látványosságok</h1>
      
      <button
      className="btn btn-primary mt-3 mb-3"
      onClick={handleOnClick}
      >Felvitel</button>

      <div className="mt-3 mb-3">
        <label htmlFor="cities">Város</label>
        <select className="form-select" name="cities" id="cities" onChange={filterData}>
          <option value="">Mindegyik</option>
          <option value="Budapest">Budapest</option>
          <option value="Esztergom">Esztergom</option>
        </select>
      </div>
    
    <table className="table table-striped table-bordered">
      <thead>
      <tr>
        <th onClick={orderTable} data-name="name">
          Megnevezés
        </th>
        <th>
          Település
        </th>
        <th>
          Cím
        </th>
        <th>
          Kategória
        </th>
        <th>
          Ár
        </th>
        <th>
          Megjegyzés
        </th>
        <th>
          Műveletek
        </th>
      </tr>
      </thead>
      <tbody>
        {attractions.map((attraction) => 
          <tr key={attraction.id}>
            <td>{attraction.name}</td>
            <td>{attraction.settlement}</td>
            <td>{attraction.address}</td>
            <td>{attraction.category}</td>
            <td>{attraction.price}</td>
            <td>{attraction.note}</td>
            <td>
              <button className="btn btn-primary" onClick={handleEditOnClick} data-id={attraction.id}>Módosítás</button>
              <button className="btn btn-danger" data-id={attraction.id} onClick={handleDeleteOnClick}>Törlés</button>
            </td>
            </tr>
        )}
      </tbody>
    </table>
  </>
  )
};