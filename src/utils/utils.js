import {
    HTTP_STATUS_CONFLICT,
    HTTP_STATUS_INTERNAL_SERVER_ERROR,
    HTTP_STATUS_UNAUTHORIZED,
    INTERNAL_SERVER_ERROR
  } from "./constants";
  
  export const getErrorMessage = (status, defaultText) => {
    switch (status) {
      case HTTP_STATUS_CONFLICT:
        return "Пользователь с таким email уже существует.";
      case HTTP_STATUS_UNAUTHORIZED:
        return "Вы ввели неправильный логин или пароль.";
      case HTTP_STATUS_INTERNAL_SERVER_ERROR:
        return INTERNAL_SERVER_ERROR;
      default:
        return defaultText;
    }
  };
  
  export function calculateDuration(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = Math.floor(duration % 60);
    return `${hours > 0 ? hours + '\xa0ч ' : ''}${minutes}\xa0м`;
  }