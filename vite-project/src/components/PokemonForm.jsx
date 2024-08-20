// const PokemonForm = () => {
//     return (
//         <div>
//             <h3>Add a Pokemon!</h3>
//             <form className="ui form">
//                 <div className="four fields" widths="equal">
//                     <div className="field ui fluid">
//                         <label>Name</label>
//                         <input type="text" name="name" placeholder="Name" />
//                     </div>
//                     <div className="field ui fluid">
//                         <label>HP</label>
//                         <input type="text" name="hp" placeholder="HP" />
//                     </div>
//                     <div className="field ui fluid">
//                         <label>Front Image URL</label>
//                         <input type="text" name="front" placeholder="url" />
//                     </div>
//                     <div className="field ui fluid">
//                         <label>Back Image URL</label>
//                         <input type="text" name="back" placeholder="url" />
//                     </div>
//                 </div>
//                 <button className="ui button" type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default PokemonForm
import React, { useState, useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const PokemonForm = () => {
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const { setAllPokemon } = useContext(PokemonContext);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a new Pokémon object
        const newPokemon = {
            id: Date.now(), // Use current timestamp as a simple unique ID
            name,
            hp: parseInt(hp, 10),
            front,
            back
        };

        try {
            // POST new Pokémon to the local JSON server
            const response = await fetch('http://localhost:4000/pokemon', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPokemon)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Optionally: Update context with the new Pokémon if needed
            const result = await response.json();
            setAllPokemon(prevPokemon => [...prevPokemon, result]);
        } catch (error) {
            console.error('Error adding Pokémon:', error);
        }

        // Clear form fields
        setName('');
        setHp('');
        setFront('');
        setBack('');
    };

    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input 
                            type="text" 
                            name="hp" 
                            placeholder="HP" 
                            value={hp} 
                            onChange={(e) => setHp(e.target.value)} 
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input 
                            type="text" 
                            name="front" 
                            placeholder="url" 
                            value={front} 
                            onChange={(e) => setFront(e.target.value)} 
                        />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input 
                            type="text" 
                            name="back" 
                            placeholder="url" 
                            value={back} 
                            onChange={(e) => setBack(e.target.value)} 
                        />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PokemonForm;
