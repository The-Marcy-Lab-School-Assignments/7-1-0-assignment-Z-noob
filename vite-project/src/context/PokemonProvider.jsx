import { useState, useEffect } from "react";
import handleFetch from '../utils/handleFetch';

// TODO: Import the PokemonContext
import PokemonContext from "./PokemonContext";
import PokemonCollection from "../components/PokemonCollection";
import PokemonForm from "../components/PokemonForm";

const starterPokemon = [
    {
        id: 0,
        name: "butterfree 1",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 1,
        name: "butterfree 2",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    },
    {
        id: 2,
        name: "butterfree 3",
        hp: 60,
        front: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
    }
]

const PokemonProvider = ({ children }) => {
    const [allPokemon, setAllPokemon] = useState(starterPokemon);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // TODO: use useEffect to fetch data from the local JSON server (remember to start JSON server!)
    useEffect(() => {
        // Fetch data from the local JSON server
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:4000/pokemon');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setAllPokemon(result);
            // console.log(allPokemon)
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);

      console.log(allPokemon)
    // TODO: Add values to be included in the context here
    let contextValues = {allPokemon, setAllPokemon} // , loading, error

    // TODO: Wrap the {children} in the PokemonContext.Provider and provide the values above
    return (
        <>
          <PokemonContext.Provider value={contextValues}>
            {children}
            {/* <PokemonCard />
            <PokemonCollection />
            <PokemonForm />
            <Filter /> */}
          </PokemonContext.Provider>
        </>
      );
}

export default PokemonProvider;