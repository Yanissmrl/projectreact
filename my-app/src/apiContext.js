import { createContext } from 'react';
import { data } from './assets/data.json';

export const ApiContext = createContext();

export default function ApiProvider({ children }) {
  return (
    <ApiContext.Provider value={{
    }}>

      {children}
    </ApiContext.Provider>

  );

  // const API = {
  //   getPhoto: async () => {
  //     const response = await fetch(`${baseUrl}curated?page=2&per_page=20`, {
  //       method: 'GET',
  //       headers: {
  //         Authorization: "563492ad6f91700001000001c1e3e6a37d0e452a8bbb2dff86ca63d0"
  //       }
  //     })
  //     const data = await response.json()
  //     return data
  //   },

  function Data(props) {
    const { tag, name, trophies } = props
    console.log("log des names...", name, tag, trophies);

    return (
      <div
        key={tag}
      >
        <h1>{tag}</h1>
        <h3>{name}</h3>
        <p>{trophies}</p>
        <div>

        </div>
      </div >

    );
  }
}