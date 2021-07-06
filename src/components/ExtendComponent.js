import { FaMinus, FaPlus } from 'react-icons/fa';

function ExtendComponent({ extend, setExtend }) {
  function updateExtend() {
    setExtend(!extend);
  }

  return (
    <div className="ExtendComponent">
      {extend ? (
        <FaMinus onClick={updateExtend} />
      ) : (
        <FaPlus onClick={updateExtend} />
      )}
    </div>
  );
}

export default ExtendComponent;
