import React from 'react';

const EffectApp = () => {
  const [timer, setTimer] = React.useState(0);
  const [stop, setStop] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => !stop && setTimer(timer + 1), 1000);

    return () => clearInterval(interval);
  }, [timer, stop]);

  const handleStop = () => {
    setStop(!stop);
  };

  const handleReset = () => {
    setTimer(0);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={handleStop}>{stop ? 'continue' : 'stop'}</button>
        <button type="button" onClick={handleReset}>reset</button>
      </div>
      <div>
        current time:
        {' '}
        {timer}
      </div>
    </div>
  );
};

export default EffectApp;
