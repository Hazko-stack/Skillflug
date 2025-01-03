'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Link for navigation

const ExercisePage = () => {
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [difficulty, setDifficulty] = useState('easy');
  const [isCorrect, setIsCorrect] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newPokemon, setNewPokemon] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const generateQuestion = (difficulty) => {
    const questions = {
      easy: {
        question: 'What is 2 + 2?',
        options: ["3", "4", "5", "6"],
        answer: "4",
      },
      medium: {
        question: 'What is 12 * 12?',
        options: ["124", "144", "132", "120"],
        answer: "144",
      },
      hard: {
        question: 'What is the square root of 289?',
        options: ["16", "18", "17", "19"],
        answer: "17",
      },
    };

    return questions[difficulty];
  };

  const fetchPokemonFromAPI = async (difficulty) => {
    setLoading(true);
    try {
      const pokemonRanges = {
        easy: { start: 1, end: 151 },
        medium: { start: 152, end: 251 },
        hard: { start: 252, end: 386 },
      };

      const { start, end } = pokemonRanges[difficulty];
      const randomId = Math.floor(Math.random() * (end - start + 1)) + start;

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();

      const pokemon = { name: data.name, image: data.sprites.front_default };
      setNewPokemon(pokemon);
      saveToLocalStorage(pokemon);
      setShowPopup(true);
    } catch (error) {
      console.error('Failed to fetch Pokémon:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveToLocalStorage = (pokemon) => {
    const storedPokemons = JSON.parse(localStorage.getItem('collectedPokemons')) || [];
    const updatedPokemons = [...storedPokemons, pokemon];
    localStorage.setItem('collectedPokemons', JSON.stringify(updatedPokemons));
  };

  useEffect(() => {
    const newQuestion = generateQuestion(difficulty);
    setQuestion(newQuestion.question);
    setOptions(newQuestion.options);
  }, [difficulty]);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = generateQuestion(difficulty).answer;
    if (selectedOption === correctAnswer) {
      setIsCorrect(true);
      fetchPokemonFromAPI(difficulty);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('/images/space.png')" }}
    >
      <h1 className="text-3xl font-bold mb-4 text-indigo-950">Pokémon Exercise</h1>
      <div className="bg-white/80 backdrop-blur-md shadow-md rounded p-6 w-full max-w-md">
        <p className="text-lg mb-4 font-semibold text-gray-800">{question}</p>
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="bg-violet-700 text-white p-2 rounded hover:bg-violet-800"
            >
              {option}
            </button>
          ))}
        </div>
        {isCorrect !== null && (
          <p className={`mt-4 text-lg ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? 'Correct!' : 'Wrong answer. Try again!'}
          </p>
        )}
        {loading && <p className="mt-4 text-blue-500">Fetching Pokémon...</p>}
        <button className="mt-6 bg-violet-700 text-white p-2 rounded hover:bg-violet-800">
          <Link href="/collection">Go to Collection</Link>
        </button>
      </div>

      {showPopup && newPokemon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Congrats!</h2>
            <img src={newPokemon.image} alt={newPokemon.name} className="w-24 h-24 mx-auto mb-4" />
            <p>You caught {newPokemon.name}!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="mt-8">
        <label htmlFor="difficulty" className="mr-2 font-bold text-indigo-950">Choose Difficulty:</label>
        <select
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="border rounded p-2"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
    </div>
  );
};

export default ExercisePage;
