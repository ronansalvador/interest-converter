/* eslint-disable react/prop-types */
import { useMemo, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const savedUser = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(savedUser);

  // useEffect(() => {

  // }, []);

  const value = useMemo(
    () => ({
      user,

      setUser,
    }),
    [user, setUser],
  );

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default Provider;
