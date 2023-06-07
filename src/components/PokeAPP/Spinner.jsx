import './Spinner.css';
import logo from './logoPoke.png';

const Spinner = () => {
  return (
      <div className="loading">
        <img src= {logo} />
      </div>
  );
};

export default Spinner;