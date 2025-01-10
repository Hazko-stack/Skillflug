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

  //quite a chore to fill T_T
  const questionBank = {
    biology: {
      1: [
        { question: "Berikut merupakan filum dari kingdom Animalia, kecuali", options: ["Athropoda", "Mollusca", "Bryophyta", "Chordata"], answer: "Bryophyta" },
        { question: "Crustacea merupakan subfilum dari filum...", options: ["Chordata", "Athropoda", "Echinodermata", "Mollusca"], answer: "Athropoda" },
        { question: "Asteroidea merupakan anggota dari filum...", options: ["Mollusca", "Athropoda", "Vermes", "Echinodermata"], answer: "Echinodermata" },
      ],
      2: [
        { question: "Apa organella yang disebut dengan 'the powerhouse of the cell'?", options: ["Nukleus", "Mitokondria", "Ribosom", "Kloroplas"], answer: "Mitokondria" },
        { question: "Berikut yang merupakan jenis jaringan otot...", options: ["Epitel", "Skeletal", "Saraf", "Konektif"], answer: "Skeletal" },
        { question: "C6H12O6 merupakan rumus kimia dari...", options: ["Monosakarida", "Protein", "Lemak", "Polisakarida"], answer: "Monosakarida" },
      ],
      3: [
        { question: "Organ mana yang bertanggung jawab untuk memompa darah?", options: ["Paru-paru", "Ginjal", "Jantung", "Otak"], answer: "Jantung" },
        { question: "Apa proses yang membuat tanaman dapat membuat makanannya sendiri?", options: ["Respirasi", "Fotosintesis", "Pencernaan", "Eksresi"], answer: "Fotosintesis" },
        { question: "kelenjar apa yang menghasilkan hormon melatonin?", options: ["Adrenal", "Hipofisis", "Timus", "Pineal"], answer: "Pineal" },
      ],
    },
    geography: {
      1: [
        { question: "Benua apa yang memiliki wilayah paling luas?", options: ["Afrika", "Asia", "Eropa", "Antartika"], answer: "Asia" },
        { question: "Apa ibu kota Perancis?", options: ["Rome", "Madrid", "Paris", "Berlin"], answer: "Paris" },
        { question: "Konsep yang menggambarkan kecenderungan suatu pola untuk mengelompok merupakan prinsip geografi yakni", options: ["Aglomerasi", "Morfologi", "Interaksi", "Keterjangkauan"], answer: "Aglomerasi"},
      ],
      2: [
        { question: "Apa nama sungai terpanjang di dunia?", options: ["Amazon", "Nil", "Yangtze", "Mississippi"], answer: "Nil" },
        { question: "Curah hujan yang mengalir di permukaan tanah juga disebut dengan...", options: ["Danau", "Sungai", "Badai", "Run-off"], answer: "Run-off" },
        { question: "Yang bukan merupakan lapisan atmosfer...", options: ["stratosfer", "Troposfer", "Biosfer", "Mesosfer"], answer: "biosfer" },
      ],
      3: [
        { question: "Gunung Everest terletak di pegunungan...", options: ["Andes", "Himalayas", "Rockies", "Alps"], answer: "Himalayas" },
        { question: "Yang bukan merupakan dasar penggolongan hutan..", options: ["Asal", "Iklim", "Hewan", "Letak"], answer: "Hewan" },
        { question: "Yang bukan merupakan bioma...", options: ["Gurun", "Taiga", "Sabana", "Peninsula"], answer: "Peninsula" },
      ],
    },
    history: {
      1: [
        { question: "Siapa Presiden Amerika Serikat yang pertama?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], answer: "George Washington" },
        { question:"Alat-alat dari zaman batu tua disebut juga sebagai...", options: ["Paleolitikum", "Neolitikum", "Megalitikum", "Mesolitikum"], answer: "Paleolitikum" },
        { question: "Zaman prasejarah diakhiri dengan ditemukannya..", options: ["Api", "Roda", "Pertanian", "Tulisan"], answer: "Tulisan" },
      ],
      2: [
        { question: "Pada tahun berapa perang dunia II berakhir?", options: ["1941", "1945", "1939", "1950"], answer: "1945" },
        { question: "Siapa negara pertama yang menjajah Indonesia?", options: ["Inggris", "Portugis", "Spanyol", "Jepang"], answer: "Portugis" },
        { question: "Selama berapa tahun Belanda menjajah Indonesia?", options: ["150", "250", "300", "350"], answer: "350" },
      ],
      3: [
        { question: "Siapa yang menemukan benua Amerika?", options: ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "Vasco da Gama"], answer: "Christopher Columbus" }, 
        //the vikings actually discovered the americas a couple hundred years before columbus did
        { question: "Aliansi militer yang dibentuk Blok Barat adalah?", options: ["NATO", "COMECON", "SEACO", "PBB"], answer: "NATO" },
        { question: "Krisis Rudal Kuba terjadi pada tahun?", options: ["1989", "1945", "1991", "1962"], answer: "1962" },
      ],
    },
    chem: {
      1: [
        { question: "Apa rumus kimia untuk air?", options: ["H2O", "CO2", "O2", "H2O2"], answer: "H2O" },
        { question: "Partikel terkecil penyusun senyawa adalah...", options: ["Molekul", "Atom", "Proton", "Ion"], answer: "Molekul" },
        { question: "Atom yang memiliki jumlah proton sebanyak 11 adalah atom...", options: ["Pb", "Na", "Ca", "C"], answer: "Na" },
      ],
      2: [
        { question: "Proses yang terjadi pada anoda dalam sel elektrokimia adalah:", options: ["Reduksi", "Oksidasi", "Induksi", "Ionisasi"], answer: "Oksidasi" },
        { question: "Ion yang menuju katoda dalam elektrolisis adalah:", options: ["Anion", "Kation", "Neutron", "Elektron"], answer: "Kation" },
        { question: "Prinsip yang digunakan untuk mengubah posisi kesetimbangan disebut hukum…", options: ["Avogadro", "Dalton", "Boyle", "Le Chatelier"], answer: "Le Chatelier" },
      ],
      3: [
        { question: "Larutan yang bersifat asam memiliki pH...", options: ["0-7", "7", "7-14", "14"], answer: "7" },
        { question: "Zat berikut yang bersifat basa adalah...", options: ["HCL", "NaOH", "H2SO4", "CO2"], answer: "NaOH" },
        { question: "Unsur berikut yang termasuk logam alkali tanah adalah...", options: ["Li", "Ba", "Ca", "Ne"], answer: "Ca" },
      ],
    },
    physic: {
      1: [
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
      2: [
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
      3: [
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
    },
    economy: {
      1: [
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
      2: [
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
      3: [
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
    },
    bahasa: {
      1: [
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
      2: [
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
      3: [
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
        { question: "", options: ["", "", "", ""], answer: "" },
      ],
    },
    math: {
      1: [
        { question: "Jika f(x)=3x-2, maka f(2) adalah", options: ["3", "4", "6", "10"], answer: "4" },
        { question: "Jika f(x)=2x+3, maka f(4) adalah", options: ["10", "13", "11", "16"], answer: "11" },
        { question: "Jika f(x)=4x-8, maka f(5) adalah", options: ["12", "16", "10", ""20], answer: "12" },
      ],
      2: [
        { question: "Jika  segitiga sama kaki memiliki panjang sisi alas 6x dan tinggi 8x, maka luas segitiga adalah", options: ["24x", "18x", "12x", "48x"], answer: "24x" },
        { question: "Nilai dari tan 45 derajat adalah..", options: ["0", "1", "0,5", "infinite"], answer: "1" },
        { question: "Jika sin x adalah 3/5, maka cos x adalah", options: ["4/5", "3/5", "5/3", "5/4"], answer: "4/5" },
      ],
      3: [
        { question: "Panjang jari-jari lingkaran adalah 10 cm. Berapakah panjang diameter?", options: ["5cm", "10cm", "15cm", "20cm"], answer: "20cm" },
        { question: "Luas lingkaran dengan jari-jari 7x", options: ["49x", "154x", "14x", "77x"], answer: "49x" },
        { question: "Jika diketahui Chord 20 cm & jarak ke pusat 6 cm. Berapa panjang jari-jari lingkaran", options: ["12cm", "13cm", "14cm", "15cm"], answer: "13cm" },
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


  //add shit to work
      <div className="mb-4">
        <label htmlFor="category" className="mr-2 font-bold text-indigo-950">Choose Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange} className="border rounded p-2">
          <option value="biology">Biologi</option>
          <option value="chem">Kimia</option>
          <option value="physics">Fisika</option>
          <option value="math">Matematika</option>
          <option value="economy">Ekonomi</option>
          <option value="bahasa">Bahasa</option>
          <option value="geography">Geografi</option>
          <option value="history">Sejarah</option>
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
