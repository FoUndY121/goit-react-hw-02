function Option({ handleGood, handleNeutral, handleBad, handleReset, totalFeedback }) {
  return (
    <>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </>
  );
}

export default Option;