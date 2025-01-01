import Link from "next/link"; // Import Link from Next.js

export default function LessonPage() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4 sm:px-0 bg-cover bg-center bg-[url('/images/space.png')]">
      <div className="flex flex-col justify-between w-full max-w-7xl h-full shadow-lg overflow-hidden mt-2 items-center sm:w-full lg:w-full bg-transparent text-white rounded-lg">
        {/* Horizontal Scrollable Cards Section */}
        <div className="flex overflow-x-auto space-x-4 w-full bg-transparent">
          {/* Card 1 - Biologi */}
          <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-gray-900 ml-4 group">
            <figure>
              <img
                src="/images/Booklesson.png" // Local image path
                alt="Biologi"
              />
            </figure>
            <div className="card-body bg-opacity-0 group-hover:bg-violet-700 transition-colors duration-300">
              <h2 className="card-title">Biologi</h2>
              <p>Pelajari keajaiban dunia kehidupan dan organisme.</p>
              <div className="card-actions justify-end">
                <Link href="/biologi">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 - Fisika */}
          <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-gray-900 ml-4 group">
            <figure>
              <img
                src="/images/Booklesson.png" // Local image path
                alt="Fisika"
              />
            </figure>
            <div className="card-body bg-opacity-0 group-hover:bg-violet-700 transition-colors duration-300">
              <h2 className="card-title">Fisika</h2>
              <p>Gali lebih dalam tentang hukum alam dan fenomena fisik.</p>
              <div className="card-actions justify-end">
                <Link href="/fisika">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 - Kimia */}
          <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-gray-900 ml-4 group">
            <figure>
              <img
                src="/images/Booklesson.png" // Local image path
                alt="Kimia"
              />
            </figure>
            <div className="card-body bg-opacity-0 group-hover:bg-violet-700 transition-colors duration-300">
              <h2 className="card-title">Kimia</h2>
              <p>Jelajahi unsur, senyawa, dan reaksi kimia.</p>
              <div className="card-actions justify-end">
                <Link href="/kimia">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 - Matematika */}
          <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-gray-900 ml-4 group">
            <figure>
              <img
                src="/images/Booklesson.png" // Local image path
                alt="Matematika"
              />
            </figure>
            <div className="card-body bg-opacity-0 group-hover:bg-violet-700 transition-colors duration-300">
              <h2 className="card-title">Matematika</h2>
              <p>Temukan pola dan logika dalam dunia angka.</p>
              <div className="card-actions justify-end">
                <Link href="/matematika">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5 - Geografi */}
          <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-gray-900 ml-4 group">
            <figure>
              <img
                src="/images/Booklesson.png" // Local image path
                alt="Geografi"
              />
            </figure>
            <div className="card-body bg-opacity-0 group-hover:bg-violet-700 transition-colors duration-300">
              <h2 className="card-title">Geografi</h2>
              <p>Pelajari bumi, iklim, dan ekosistemnya.</p>
              <div className="card-actions justify-end">
                <Link href="/geografi">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 6 - Sejarah */}
          <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-gray-900 ml-4 group">
            <figure>
              <img
                src="/images/Booklesson.png" // Local image path
                alt="Sejarah"
              />
            </figure>
            <div className="card-body bg-opacity-0 group-hover:bg-violet-700 transition-colors duration-300">
              <h2 className="card-title">Sejarah</h2>
              <p>Jelajahi kisah masa lalu yang membentuk dunia kita.</p>
              <div className="card-actions justify-end">
                <Link href="/sejarah">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>

          {/* Card 7 - Ekonomi */}
          <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-80 hover:bg-gray-900 ml-4 group">
            <figure>
              <img
                src="/images/Booklesson.png" // Local image path
                alt="Ekonomi"
              />
            </figure>
            <div className="card-body bg-opacity-0 group-hover:bg-violet-700 transition-colors duration-300">
              <h2 className="card-title">Ekonomi</h2>
              <p>Pahami dinamika pasar dan teori ekonomi modern.</p>
              <div className="card-actions justify-end">
                <Link href="/ekonomi">
                  <button className="btn btn-primary">Explore</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
