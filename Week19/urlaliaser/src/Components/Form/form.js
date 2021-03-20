import React, { useState } from 'react';
import db from '../../Firebase/firebaseConfig';

export default function Form(props) {
  let databaseData = props.dbData;

  const [alert, setAlert] = useState('');
  const [inputFieldName, setInputFieldName] = useState('')
  const [isValid, setIsValid] = useState(false);
  const [errorAlert, setErrorAlert] = useState('');
  const [existingALiasAlert, setExistingAliasAlert] = useState('');

  function secretCodeGenerator() {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
  };

  const [data, setData] = useState({
    url: '',
    alias: '',
    secretCode: secretCodeGenerator(),
    hitCount: databaseData.length + 1
  });

  function submit(e) {
    e.preventDefault();
    if (isValid === true) {
      db.collection('links')
        .add({
          url: data.url,
          alias: data.alias,
          secretCode: data.secretCode
        });
      setAlert(`Sikeres mentés, a törléshez szükséges kód: ${data.secretCode}`);
      setData({
        url: '',
        alias: ''
      });
    }
    else {
      return false
    }
  };

  function handleInputData(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    setData(prevValue => {
      if (inputName === 'url') {
        return ({
          url: inputValue,
          alias: prevValue.alias,
          secretCode: prevValue.secretCode
        })
      }
      else if (inputName === 'alias') {
        return ({
          url: prevValue.url,
          alias: inputValue,
          secretCode: prevValue.secretCode
        })
      }
    })
  };

  function validateURL(e) {
    setInputFieldName('url');
    let value = e.target.value;
    if (value.split('').length > 1 && value.includes('https://')) {
      setIsValid(true);
      setErrorAlert('');
    }
    else if (value.split('').length > 1 && !value.includes('https://')) {
      setIsValid(false);
      setErrorAlert('Nem megfelelő formátum');
    }
    else if (value.split('').length < 1) {
      setIsValid(false);
      setErrorAlert('Hiányzó érték');
    }
    else if (value.split('').length > 1) {
      setErrorAlert('');
      setIsValid(true);
    }
  };

  function validateAlias(e) {
    setExistingAliasAlert('');
    setInputFieldName('alias');
    let value = e.target.value;
    let dataArray = databaseData;
    if (value.split('').length < 1) {
      setErrorAlert('Hiányzó érték');
      setIsValid(false);
    }
    else if (value.split('').length > 1) {
      setErrorAlert('');
      setIsValid(true);
    };
    dataArray.map((data) => {
      data = JSON.parse(data);
      if (data.alias === value) {
        setIsValid(false);
        setExistingAliasAlert(`A "${value}" alias már létezik`);
      }
      else {
        setIsValid(true);
      }
    });
  };

  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="url" className="form-label">URL</label>
          <input
            type="text"
            className={`form-control + ${inputFieldName === 'url' && errorAlert ? "is-invalid" : ""}`}
            id="url"
            name='url'
            value={data.url}
            onChange={handleInputData}
            onBlur={validateURL} ></input>
          {
            inputFieldName === 'url' && (errorAlert === 'Hiányzó érték' || errorAlert === 'Nem megfelelő formátum') &&
            <div className="invalid-feedback" role="alert">{errorAlert}</div>
          }
        </div>
        <div className="mb-3">
          <label htmlFor="alias" className="form-label">Alias</label>
          <input
            type="text"
            className={`form-control + ${inputFieldName === 'alias' && errorAlert ? "is-invalid" : ""}`}
            id="alias" name='alias'
            value={data.alias}
            onChange={handleInputData}
            onBlur={validateAlias}
          ></input>
          {
            inputFieldName === 'alias' && errorAlert === 'Hiányzó érték' &&
            <div className="invalid-feedback" role="alert">{errorAlert}</div>
          }
        </div>

        <button type="submit" className="btn btn-primary" onClick={submit}>Mentés</button>
      </form>
      {
        alert &&
        <div className="alert alert-success mt-5" role="alert">{alert}</div>
      }
      {
        existingALiasAlert &&
        <div className="alert alert-danger mt-5" role="alert">{existingALiasAlert}</div>
      }
    </>
  )
}