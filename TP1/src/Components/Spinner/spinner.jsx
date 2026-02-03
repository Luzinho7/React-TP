
import "./Spinner.scss";

import bulbi from '../../assets/Bulbasaur.gif'; 

function Spinner() {
  return <img src={bulbi} alt="Chargement..." style={{ width: '100px', height: '100px', margin: 'auto',  display: 'block' }} />;
}

export default Spinner;