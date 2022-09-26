// import logo from './logo.svg';
// import './App.css';
import Navbar from './componenet/NavBar'
import TextForm from './componenet/TextForm'

function App() {
  return (
   <>
<Navbar title = "TextUt" />
<div className="container my-3">
<TextForm heading="Enter The Text To Analyze Below" />



</div>
   </>
  );
}

export default App;
