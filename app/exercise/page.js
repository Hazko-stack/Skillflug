"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const ExercisePage = () => {
  const [category, setCategory] = useState('biology'); 
  const [packageId, setPackageId] = useState('1'); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newPokemon, setNewPokemon] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const questionBank = {
    biology: {
      1: [
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"], answer: "Mitochondria" },
        { question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "H2O2"], answer: "H2O" },
      ],
      2: [
        { question: "Which organ is responsible for pumping blood?", options: ["Lungs", "Kidneys", "Heart", "Brain"], answer: "Heart" },
        { question: "Which of these is a type of muscle tissue?", options: ["Epithelial", "Skeletal", "Nervous", "Connective"], answer: "Skeletal" },
      ],
      3: [
        { question: "What is the process by which plants make their own food?", options: ["Respiration", "Photosynthesis", "Digestion", "Excretion"], answer: "Photosynthesis" },
      ],
    },
    geography: {
      1: [
        { question: "Which is the largest continent by area?", options: ["Africa", "Asia", "Europe", "Antarctica"], answer: "Asia" },
        { question: "What is the capital city of France?", options: ["Rome", "Madrid", "Paris", "Berlin"], answer: "Paris" },
      ],
      2: [
        { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
      ],
      3: [
        { question: "Mount Everest is located in which mountain range?", options: ["Andes", "Himalayas", "Rockies", "Alps"], answer: "Himalayas" },
      ],
    },
    history: {
      1: [
        { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], answer: "George Washington" },
      ],
      2: [
        { question: "In what year did World War II end?", options: ["1941", "1945", "1939", "1950"], answer: "1945" },
      ],
      3: [
        { question: "Who discovered America?", options: ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "Vasco da Gama"], answer: "Christopher Columbus" },
      ],
    },
  };

  useEffect(() => {
    if (category && packageId) {
      setLoading(true);
      const selectedQuestions = questionBank[category]?.[packageId];
      setQuestions(selectedQuestions || []);
      setCurrentQuestionIndex(0);
      setIsCorrect(null);
      setLoading(false);
    }
  }, [category, packageId]);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePackageChange = (e) => {
    setPackageId(e.target.value);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setIsCorrect(true);
      if (currentQuestionIndex === questions.length - 1) {
        fetchPokemonFromAPI();
      } else {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    } else {
      setIsCorrect(false);
    }
  };

  const fetchPokemonFromAPI = async () => {
    setLoading(true);
    try {
      const randomId = Math.floor(Math.random() * 386) + 1;
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

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center p-4" style={{ backgroundImage: "url('/images/space.png')" }}>
      <h1 className="text-3xl font-bold mb-4 text-indigo-950">Pokémon Exercise</h1>

      <div className="mb-4">
        <label htmlFor="category" className="mr-2 font-bold text-indigo-950">Choose Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange} className="border rounded p-2">
          <option value="biology">Biology</option>
          <option value="geography">Geography</option>
          <option value="history">History</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="package" className="mr-2 font-bold text-indigo-950">Choose Package:</label>
        <select id="package" value={packageId} onChange={handlePackageChange} className="border rounded p-2">
          <option value="1">Package 1</option>
          <option value="2">Package 2</option>
          <option value="3">Package 3</option>
        </select>
      </div>

      {loading ? (
        <p className="text-lg text-gray-700">Loading questions...</p>
      ) : questions.length === 0 ? (
        <p className="text-lg text-red-500">No questions available. Please try again later.</p>
      ) : (
        <div className="bg-white/80 backdrop-blur-md shadow-md rounded p-6 w-full max-w-md">
          <p className="text-lg mb-4 font-semibold text-gray-800">{questions[currentQuestionIndex]?.question}</p>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestionIndex]?.options.map((option, index) => (
              <button key={index} onClick={() => handleAnswer(option)} className="bg-violet-700 text-white p-2 rounded hover:bg-violet-800">
                {option}
              </button>
            ))}
          </div>
          {isCorrect !== null && (
            <p className={`mt-4 text-lg ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
              {isCorrect ? 'Correct!' : 'Wrong answer. Try again!'}
            </p>
          )}
          <button className="mt-6 bg-violet-700 text-white p-2 rounded hover:bg-violet-800">
            <Link href="/collection">Go to Collection</Link>
          </button>
        </div>
      )}

      {showPopup && newPokemon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-violet-700">Congrats!</h2>
            <img src={newPokemon.image} alt={newPokemon.name} className="w-24 h-24 mx-auto mb-4" />
            <p className="text-violet-700">You caught {newPokemon.name}!</p>
            <button onClick={() => setShowPopup(false)} className="mt-4 bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-800">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExercisePage;
