import { FaMinus, FaPlus } from 'react-icons/fa';
import '../App.css';

function ExtendComponent({ extend, setExtend }) {
  function updateExtend() {
    setExtend(!extend);
  }

  return (
    <div className="ExtendComponent">
      {extend ? (
        <FaMinus className="icon" onClick={updateExtend} />
      ) : (
        <FaPlus className="icon" onClick={updateExtend} />
      )}
    </div>
  );
}

export default ExtendComponent;
