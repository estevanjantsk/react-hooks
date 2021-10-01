import React from 'react';

const EffectApp = () => {
  const [toggle, setToggle] = React.useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return <Toggler toggle={toggle} onToggle={handleToggle} />;
};

const Toggler = ({ toggle, onToggle }) => {
  const [title, setTitle] = React.useState('Hello React');

  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('I run only on the first render: mount.');
  }, []);
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('I run only if toggle/title changes (and on mount).');
  }, [toggle, title]);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <input type="text" value={title} onChange={handleChange} />

      <div>
        <button type="button" onClick={onToggle}>
          Toggle
        </button>
      </div>

      {toggle && <div>{title}</div>}
    </div>
  );
};

export default EffectApp;
