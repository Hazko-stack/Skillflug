import Link from "next/link"; // Import Link from Next.js

export default function LessonPage() {
  return (
    <div className="flex flex-col lg:mt-20 items-center justify-between min-h-screen py-4 px-4 sm:px-8 space-y-4 bg-wave bg-cover bg-center">
      {/* Quote Section */}
      <div className="mockup-code flex-1 w-full lg:max-w-[60%]">
        <pre data-prefix="&gt;">
          <code>
            "Success is not the key to happiness. Happiness is the key to
            success." - Albert Schweitzer
          </code>
        </pre>
        <pre data-prefix="&gt;" className="text-warning">
          <code>
            "The only way to do great work is to love what you do." - Steve Jobs
          </code>
        </pre>
        <pre data-prefix="&gt;" className="text-success">
          <code>
            "Life is what happens when you're busy making other plans." - John
            Lennon
          </code>
        </pre>
      </div>

      {/* Horizontal Scrollable Cards Section */}
      <div className="flex overflow-x-auto space-x-4 w-full">
        {/* Card 1 - Biologi */}
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Biologi"
            />
          </figure>
          <div className="card-body">
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
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Fisika"
            />
          </figure>
          <div className="card-body">
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
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Kimia"
            />
          </figure>
          <div className="card-body">
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
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Matematika"
            />
          </figure>
          <div className="card-body">
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
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Geografi"
            />
          </figure>
          <div className="card-body">
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
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Sejarah"
            />
          </figure>
          <div className="card-body">
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
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Ekonomi"
            />
          </figure>
          <div className="card-body">
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
  );
}
