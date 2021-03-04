import { createContext, useState, useEffect, useContext } from 'react';

const Context = createContext('');

export const ProjectProvider = ({ children }) => {
  const [expandedTaskId, setExpandedTaskId] = useState('');
  const [expandedColumnIndex, setExpandedColumnIndex] = useState('');

  const value = {
    expandedTaskId,
    setExpandedTaskId,
    expandedColumnIndex,
    setExpandedColumnIndex,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useProject = () => {
  return useContext(Context);
};
