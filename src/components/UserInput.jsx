export default function UserInput({ userInput, onChangeClick }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(e) => onChangeClick("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => onChangeClick("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedInvestment}
            onChange={(e) =>
              onChangeClick("expectedInvestment", e.target.value)
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => onChangeClick("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
