import React, {createContext, useState, useContext, useCallback} from 'react';

const ApplicationContext = createContext({});

export const useApplicationContext = () => useContext(ApplicationContext);

export const ApplicationContextProvider = ({children}) => {
  const [permissions, setPermissions] = useState({
    locationPermission: '',
  });
  const [location, setLocation] = useState(null);

  const addPermission = useCallback((newPermission) => {
    console.log(
      '🚀 ~ file: ApplicationContext.js ~ line 1 ~ ApplicationContextProvider ~ newPermission',
      newPermission,
    );
    setPermissions((value) => ({...value, locationPermission: newPermission}));
  }, []);

  const removePermission = useCallback(
    (newPermission) =>
      setPermissions((value) => ({
        ...value,
        locationPermission: newPermission,
      })),
    [],
  );

  const addLocation = useCallback((deviceLocation) => {
    setLocation(deviceLocation);
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        permissions,
        addPermission,
        removePermission,
        location,
        addLocation,
      }}>
      {children}
    </ApplicationContext.Provider>
  );
};
