import { TodoState1 } from "../interfaces/interfaces";

export const AppReducerUsers = (state: TodoState1, action: any): TodoState1 => {
  switch (action.type) {
    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return Array.isArray(action.payload)
        ? {
            loading: false,
            users1: [...state.users1, ...action.payload],
          }
        : {
            ...state,
          };

    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        users1: [...state.users1, ...action.payload], // agrega mas datos al array
      };

    case "LOAD_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        users1: [...state.users1, ...action.payload], // agrega mas datos al array
      };

    case "ADD_USER":
      return Array.isArray(action.payload)
        ? {
            loading: false,
            users1: [...action.payload, ...state.users1],
          }
        : {
            ...state,
          };

    case "REMOVE_USER":
      console.log("PAyload borrar", action.payload);
      console.log("STATE borrar", state);
      return {
        ...state,

        users1: state.users1.filter(
          (bitacora) => bitacora.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
