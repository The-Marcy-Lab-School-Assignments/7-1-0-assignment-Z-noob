// TODO: This component should render a single pokemon's stats and image.
import { useState } from 'react';

const PokemonCard = ({ pokemon, removePokemon }) => {
    // State to keep track of the current image source
    const [isFrontImage, setIsFrontImage] = useState(true);

    // Function to handle the click event and toggle the image
    const handleClick = () => {
        setIsFrontImage(!isFrontImage);
    };

    // Function to handle removing the Pokémon
    const handleRemove = () => {
        removePokemon(pokemon.id);
    };

    return (
        <div className="ui card" onClick={handleClick}>
            <div>
                <div className="image">
                    <img alt={pokemon.name} src={isFrontImage ? pokemon.front : pokemon.back} />
                </div>
                <div className="content">
                    <div className="header">{pokemon.name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {pokemon.hp}
                    </span>
                </div>
                <button className="ui button red" onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}

export default PokemonCard