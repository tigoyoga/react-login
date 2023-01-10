import { createContext, useContext, useReducer } from "react";

// state awal untuk user
const initialUser = {
  authenticated: false,
  user_type: null,
};

// membuat context untuk  menyimpan data user
const userContext = createContext(initialUser);

// membuat context untuk mengubah data user
const dispatchContext = createContext(null);

//membuat fungsu reducer untuk mengubah data sesuai type
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user_type: payload.type,
        authenticated: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user_type: null,
        authenticated: false,
      };

    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

// membuat fungsi untuk membungkus children dalam context.provider
// fungsi ini juga berisi useReducer untuk mengubah data user
export const AuthProvider = ({ children }) => {
  // inisialisasi useReducer
  const [state, defaultDispatch] = useReducer(reducer, initialUser);

  // membuat fungsi untuk mempermudah menjalankan fungsi dispatch useReducer
  const dispatch = (type, payload) => defaultDispatch({ type, payload });

  // return Provider yang membungkus children
  return (
    <userContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        {children}
      </dispatchContext.Provider>
    </userContext.Provider>
  );
};

export const useAuthState = () => useContext(userContext);
export const useAuthDispatch = () => useContext(dispatchContext);
