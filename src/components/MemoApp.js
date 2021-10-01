// Note: Don't mistake React's useMemo Hook with React's memo API.
// While useMemo is used to memoize values,
// React memo is used to wrap React components to prevent re-renderings.

// Note: Don't mistake React's useMemo Hook with React's useCallback Hook.
// While useMemo is used to memoize values, useCallback is used to memoize functions.

import React from 'react';

const users = [
  { id: 'a', name: 'Robin' },
  { id: 'b', name: 'Dennis' },
];

const MemoApp = () => {
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState('');

  const handleText = (event) => {
    setText(event.target.value);
  };

  const handleSearch = () => {
    setSearch(text);
  };

  const filteredUsers = React.useMemo(
    () => users.filter((user) => {
      // eslint-disable-next-line no-console
      console.log('Filter function is running ...');
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    [search],
  );

  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button type="button" onClick={handleSearch}>
        Search
      </button>

      <List list={filteredUsers} />
    </div>
  );
};

const List = ({ list }) => (
  <ul>
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </ul>
);

const ListItem = ({ item }) => <li>{item.name}</li>;

export default MemoApp;
