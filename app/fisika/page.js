import Link from "next/link"; // Import Link from Next.js

export default function FisPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-4 px-4 sm:px-8 space-y-4 bg-wave bg-cover bg-center">
      {/* Horizontal Scrollable Cards Section */}
      <div className="flex overflow-x-auto space-x-4 w-full">
        {/* Card 1 - Fisika1 */}
        <div className="card bg-base-100 shadow-xl flex-shrink-0 w-80">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Fisika1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fisika 1</h2>
            <p>Pelajari dasar-dasar fisika dan konsep-konsep pentingnya.</p>
            <div className="card-actions justify-end">
              <Link href="/fisika/fis1">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 - Fisika2 */}
        <div className="card bg-base-100 shadow-xl flex-shrink-0 w-80">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Fisika2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fisika 2</h2>
            <p>Pelajari konsep fisika lanjutan dan aplikasinya dalam kehidupan.</p>
            <div className="card-actions justify-end">
              <Link href="/fisika/fis2">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 - Fisika3 */}
        <div className="card bg-base-100 shadow-xl flex-shrink-0 w-80">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Fisika3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fisika 3</h2>
            <p>Pelajari konsep fisika tingkat lanjut untuk memahami dunia fisik.</p>
            <div className="card-actions justify-end">
              <Link href="/fisika/fis3">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 - Fisika4 */}
        <div className="card bg-base-100 shadow-xl flex-shrink-0 w-80">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Fisika4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Fisika 4</h2>
            <p>Pelajari topik-topik fisika yang lebih mendalam dan eksperimen.</p>
            <div className="card-actions justify-end">
              <Link href="/fisika/fis4">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
