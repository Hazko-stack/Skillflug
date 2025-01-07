"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const ExercisePage = () => {
  const [category, setCategory] = useState('22'); 
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [newPokemon, setNewPokemon] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const difficulty = 'easy'; 

  const fetchQuestionsFromAPI = async (selectedCategory) => {
    setLoading(true); 
    setQuestions([]); 
    setCurrentQuestionIndex(0); 
    try {
      console.log(`Fetching questions for category: ${selectedCategory}`);
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10${selectedCategory ? `&category=${selectedCategory}` : ''}&difficulty=${difficulty}&type=multiple`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }

      const data = await response.json();
      console.log('API Response:', data); 

      if (!data.results || data.results.length === 0) {
        console.warn('No questions available for the selected category and difficulty.');
        setQuestions([]);
        return;
      }

      const formattedQuestions = data.results.map((question) => {
        const allOptions = [...question.incorrect_answers, question.correct_answer];
        return {
          question: question.question,
          options: allOptions.sort(() => Math.random() - 0.5), 
          answer: question.correct_answer,
        };
      });

      setQuestions(formattedQuestions);
      setIsCorrect(null); 
    } catch (error) {
      console.error('Error fetching questions:', error);
      setQuestions([]);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    if (category) {
      fetchQuestionsFromAPI(category);
    }
  }, [category]);

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
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-4"
      style={{ backgroundImage: "url('/images/space.png')" }}
    >
      <h1 className="text-3xl font-bold mb-4 text-indigo-950">Pokémon Exercise</h1>

      <div className="mb-4">
        <label htmlFor="category" className="mr-2 font-bold text-indigo-950">
          Choose Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="border rounded p-2"
        >
          <option value="22">Geography</option>
        </select>
      </div>

      {loading ? (
        <p className="text-lg text-gray-700">Loading questions...</p>
      ) : questions.length === 0 ? (
        <p className="text-lg text-red-500">No questions available. Please try again later.</p>
      ) : (
        <div className="bg-white/80 backdrop-blur-md shadow-md rounded p-6 w-full max-w-md">
          <p className="text-lg mb-4 font-semibold text-gray-800">
            {questions[currentQuestionIndex]?.question}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {questions[currentQuestionIndex]?.options.map((option, index) => (
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
            <p className='text-violet-700'>You caught {newPokemon.name}!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-violet-700 text-white px-4 py-2 rounded hover:bg-violet-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExercisePage;
