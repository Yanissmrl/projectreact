import { createContext } from 'react';

export const ApiContext = createContext();

export default function ApiProvider({ children }) {
  return (
    <ApiContext.Provider value={{
      getPhoto: API.getPhoto
    }}>
      {children}
    </ApiContext.Provider>

  );
}
const serverProtocol = 'https'
const serverHost = 'api.pexels.com/v1/'
const baseUrl = `${serverProtocol}://${serverHost}`

const API = {
  getPhoto: async () => {
    const response = await fetch(`${baseUrl}curated?page=2&per_page=20`, {
      method: 'GET',
      headers: {
        Authorization: "563492ad6f91700001000001c1e3e6a37d0e452a8bbb2dff86ca63d0"
      }
    })
    const data = await response.json()
    return data
  },

}