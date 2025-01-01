import Link from "next/link"; // Import Link from Next.js

export default function KimPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-4 px-4 sm:px-8 space-y-4 bg-wave bg-cover bg-center">

      {/* Horizontal Scrollable Cards Section */}
      <div className="flex overflow-x-auto space-x-4 w-full">

        {/* Card 1 - Kimia1 */}
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Kimia1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kimia 1</h2>
            <p>Pelajari dasar-dasar kimia dan konsep-konsep pentingnya.</p>
            <div className="card-actions justify-end">
              <Link href="/kimia/kim1">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 - Kimia2 */}
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Kimia2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kimia 2</h2>
            <p>Pelajari konsep-konsep kimia lanjutan dan aplikasinya dalam kehidupan.</p>
            <div className="card-actions justify-end">
              <Link href="/kimia/kim2">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 - Kimia3 */}
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Kimia3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kimia 3</h2>
            <p>Pelajari konsep-konsep kimia tingkat lanjut untuk memahami dunia kimia.</p>
            <div className="card-actions justify-end">
              <Link href="/kimia/kim3">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 - Kimia4 */}
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Kimia4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Kimia 4</h2>
            <p>Pelajari topik-topik kimia yang lebih mendalam dan eksperimen.</p>
            <div className="card-actions justify-end">
              <Link href="/kimia/kim4">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
