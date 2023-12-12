import Header from "./components/Header";
import Result from "./components/Result";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const InputIsValid = userInput.duration >= 1;

  function handleChange(e) {
    const { name, value } = e.target;
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [name]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeClick={handleChange} />
      {!InputIsValid && (
        <p className="center">Please Enter a Duration greater than Zero</p>
      )}
      {InputIsValid && <Result input={userInput} />}
    </>
  );
}

export default App;
