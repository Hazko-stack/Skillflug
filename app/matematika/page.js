import Link from "next/link"; // Import Link from Next.js

export default function MatPage() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen py-4 px-4 sm:px-8 space-y-4 bg-wave bg-cover bg-center">
      {/* Horizontal Scrollable Cards Section */}
      <div className="flex overflow-x-auto space-x-4 w-full">
        {/* Card 1 - Matematika1 */}
        <div className="card bg-base-100 shadow-xl flex-shrink-0 w-80">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Matematika1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Matematika 1</h2>
            <p>Matematika</p>
            <div className="card-actions justify-end">
              <Link href="/matematika/mat1">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 - Matematika2 */}
        <div className="card bg-base-100 shadow-xl flex-shrink-0 w-80">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Matematika2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Matematika 2</h2>
            <p>Matematika</p>
            <div className="card-actions justify-end">
              <Link href="/matematika/mat2">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 - Matematika3 */}
        <div className="card bg-base-100 shadow-xl flex-shrink-0 w-80">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Matematika3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Matematika 3</h2>
            <p>Matematika</p>
            <div className="card-actions justify-end">
              <Link href="/matematika/mat3">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
