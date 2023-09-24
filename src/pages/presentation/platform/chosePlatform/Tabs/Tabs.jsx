import "./tab.css"

function Tabs() {
    return (
        <div className="tabs-container">
            <div className="tabs">
                <input type="radio" id="radio-1" name="tabs" defaultChecked={false} />
                <label className="tab" htmlFor="radio-1">🎉 Party</label>
                <input type="radio" id="radio-2" name="tabs" />
                <label className="tab" htmlFor="radio-2">Matchs</label>
                <input type="radio" id="radio-3" name="tabs" />
                <label className="tab" htmlFor="radio-3">Streams</label>
                <span className="glider"></span>
            </div>
        </div>
    );
}

export default Tabs