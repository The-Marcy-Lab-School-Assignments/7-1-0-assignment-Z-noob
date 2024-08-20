import PokemonCard from './PokemonCard';
// TODO: import the PokemonContext and useContext
import React, { useContext, useState } from 'react';
import PokemonContext from '../context/PokemonContext';
import Filter from './Filter';

const PokemonCollection = () => {
    const { allPokemon, setAllPokemon } = useContext(PokemonContext);
    const [filter, setFilter] = useState('');

    const handleFilterChange = (query) => {
        setFilter(query.toLowerCase());
    };

    const filteredPokemon = allPokemon.filter(pokemon =>
        pokemon.name.toLowerCase().includes(filter)
    );

    const removePokemon = (id) => {
        setAllPokemon(prevPokemon => prevPokemon.filter(pokemon => pokemon.id !== id));
    };

    return (
        <div>
            <Filter onFilterChange={handleFilterChange} /> {/* Render Filter once */}
            <div className="ui cards">
                {filteredPokemon.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.id} 
                        pokemon={pokemon} 
                        removePokemon={() => removePokemon(pokemon.id)} 
                    />
                ))}
            </div>
        </div>
    );
    // return (
    //     <div className="ui six cards">
    //         {allPokemon?.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
    //     </div>
    // )
};

export default PokemonCollection