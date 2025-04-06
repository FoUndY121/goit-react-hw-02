

function Feedback({ good, neutral, bad , positivePercentage }) {
  
    return (
      <>
        <p>Goot:{good} </p>
        <p> Neutral: {neutral}</p>
        <p> Bad: {bad}</p>
        <p> Total: {good + neutral + bad}</p>
        <p>Positive: {positivePercentage}%</p>
      </>
    );
  }
  
//   return (
//    <>
//    <p>Goot:{option.good} </p>
//    <p> Neutral: {option.neutral}</p>
//    <p> Bad: {option.bad}</p>
//     <p> Total: {option.good + option.neutral + option.bad}</p>
//    </>
//   )


export default Feedback