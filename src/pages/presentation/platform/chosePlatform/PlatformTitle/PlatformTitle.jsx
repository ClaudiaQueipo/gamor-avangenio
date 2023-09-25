import "./platformTitle.css";

function PlatformTitle({ number, title1, title2 }) {
  return (
    <div className="option-chose-platform">
      <span className="option-platform-number">
        <sup>
          <b>{number}</b>
        </sup>
      </span>
      <h2 className="option-platform-title">
        <strong className="bolder-text">{title1}</strong> {title2}
      </h2>
    </div>
  );
}

export default PlatformTitle;
