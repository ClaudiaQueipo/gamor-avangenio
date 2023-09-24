import "./platformTitle.css";

function PlatformTitle({ number, title }) {
  return (
    <div className="option-chose-platform">
      <span className="option-platform-number">
        <sup>
          <b>{number}</b>
        </sup>
      </span>
      <h2 className="option-platform-title">{title}</h2>
    </div>
  );
}

export default PlatformTitle;
