import { createContext, useContext, useReducer } from 'react';



const NameContext = createContext();

export const useName = () => {
  return useContext(NameContext);
};

const initialState = {
  name: '',
};

const nameReducer = (state, action) => {
    console.log(action.name)
  switch (action.type) {
    case 'NAME_REQUEST':
      return { ...state, name: action.name};
   
    default:
      return state;
  }
};

export const NameProvider = ({ children }) => {
  const [nameState, dispatch] = useReducer(nameReducer, initialState);

  const handleName = async (name) => {
    dispatch({ type: 'NAME_REQUEST' , name: name});
    console.log(name);
  };


  
  return (
    <NameContext.Provider
      value={{ nameState, dispatch, handleName }}>
      {children}
    </NameContext.Provider>
  );
};