/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import React from 'react';

const RefApp = () => {
  const hasClickedButton = React.useRef(false);
  // const ref = React.useRef();
  const [text, setText] = React.useState('Some text ...');
  const [count, setCount] = React.useState(0);

  const ref = React.useCallback((node) => {
    if (!node) return;

    const { width } = node.getBoundingClientRect();

    // eslint-disable-next-line no-undef
    document.title = `Width:${width}`;

    if (width >= 150) {
      node.style.color = 'red';
    } else {
      node.style.color = 'blue';
    }
  }, [text]);

  function handleOnChange(event) {
    setText(event.target.value);
  }

  function onClick() {
    const newCount = count + 1;

    setCount(newCount);
    hasClickedButton.current = true;
  }

  console.log(`Has clicked button? ${hasClickedButton.current}`);

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={onClick}>
        Increase
      </button>

      <div>
        <input type="text" value={text} onChange={handleOnChange} />
        <span ref={ref}>{text}</span>
      </div>
    </div>
  );
};

export default RefApp;
