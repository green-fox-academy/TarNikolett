import './style/app.scss';
import Header from './Components/Header/header';
import Form from './Components/Form/form';
import db from './Firebase/firebaseConfig';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let dbData = [];
  db.collection('links')
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let item = doc.data();
        item = JSON.stringify(item);
        dbData.push(item)
      })
    });

  return (
    <Router>
      <div className="container">
        <Route path="/">
          <Header />
          <Form dbData={dbData} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
