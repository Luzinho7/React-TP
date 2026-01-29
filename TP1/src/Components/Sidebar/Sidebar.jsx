import pokeball from '../../assets/pokeball.png';
import { useState } from 'react';
import './Sidebar.scss';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-toggle-button" onClick={toggleSidebar}>
        X
      </button>
      <h2>
        <img src={pokeball} alt="pokeball" />
        <p>Pokédex</p>
      </h2>
      <div>Votre Pokédex est vide</div>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button className="lmj-cart-toggle-button" onClick={toggleSidebar}>
        <img src={pokeball} alt="pokeball" />
        <p>Pokédex</p>
      </button>
    </div>
  )
}

export default Sidebar
