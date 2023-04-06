import Keys from '@/constant/key';
import Cookies from 'js-cookie';

export const getSidebarStatus = () => Cookies.get(Keys.sidebarStatusKey);
export const setSidebarStatus = (sidebarStatus: string) => Cookies.set(Keys.sidebarStatusKey, sidebarStatus);

export const getLanguage = () => Cookies.get(Keys.languageKey);
export const setLanguage = (language: string) => Cookies.set(Keys.languageKey, language);

export const getSize = () => Cookies.get(Keys.sizeKey);
export const setSize = (size: string) => Cookies.set(Keys.sizeKey, size);
