import "./loader.css";

function Loader({ percentage = 70 }) {
  return (
    <div className="loader">
      <div className="outer">
        <div className="inner" style={{ width: `${percentage}%` }}></div>
      </div>

      <p>{percentage}%</p>
    </div>
  );
}

export default Loader;
