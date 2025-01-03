'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const CollectionPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedPokemons = JSON.parse(localStorage.getItem('collectedPokemons')) || [];
    setPokemons(storedPokemons);
  }, []);

  const handleRemovePokemon = (indexToRemove) => {
    const updatedPokemons = pokemons.filter((_, index) => index !== indexToRemove);
    setPokemons(updatedPokemons);
    localStorage.setItem('collectedPokemons', JSON.stringify(updatedPokemons));
  };

  const handleDescription = async (pokemon) => {
    setSelectedPokemon(pokemon);
    setShowPopup(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const data = await response.json();

      setPokemonDetails({
        moves: data.moves.map((move) => move.move.name),
        abilities: data.abilities.map((ability) => ability.ability.name),
        types: data.types.map((type) => type.type.name),
        eggGroups: (await fetch(data.species.url).then((res) => res.json())).egg_groups.map((group) => group.name),
      });
    } catch (error) {
      console.error('Failed to fetch Pokémon details:', error);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('/images/space.png')" }}
    >
      <h1 className="text-4xl font-bold mb-6 text-indigo-950 text-center">Your Pokémon Collection</h1>
      {pokemons.length === 0 ? (
        <p className="text-xl text-violet-700 text-center">No Pokémon collected yet. Go back and catch some!</p>
      ) : (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pokemons.map((pokemon, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md shadow-lg p-4 rounded-lg text-center flex flex-col items-center"
            >
              <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mb-4 mx-auto" />
              <span className="text-lg font-semibold text-violet-700">{pokemon.name}</span>
              <div className="flex gap-2 mt-4 justify-center">
                <button
                  onClick={() => handleRemovePokemon(index)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
                <button
                  onClick={() => handleDescription(pokemon)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Description
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showPopup && selectedPokemon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gradient-to-br from-violet-800 to-violet-600 text-gray-100 p-4 sm:p-6 rounded-xl shadow-2xl max-w-sm w-full mx-4">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full text-sm"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">{selectedPokemon.name}</h2>
            {pokemonDetails ? (
              <div className="text-left space-y-4 max-h-80 overflow-y-auto">
                <p><strong>Moves:</strong> {pokemonDetails.moves.join(', ')}</p>
                <p><strong>Abilities:</strong> {pokemonDetails.abilities.join(', ')}</p>
                <p><strong>Types:</strong> {pokemonDetails.types.join(', ')}</p>
                <p><strong>Egg Groups:</strong> {pokemonDetails.eggGroups.join(', ')}</p>
              </div>
            ) : (
              <p>Loading details...</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
