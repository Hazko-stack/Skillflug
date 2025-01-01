import Link from "next/link"; // Import Link from Next.js

export default function BioPage() {
  return (
    <div className="flex flex-col lg:mt-20 items-center justify-between min-h-screen py-4 px-4 sm:px-8 space-y-4 bg-wave bg-cover bg-center">

      {/* Horizontal Scrollable Cards Section */}
      <div className="flex overflow-x-auto space-x-4 w-full">

        {/* Card 1 - Biologi1 */}
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Biologi1"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Biologi 1</h2>
            <p>Pelajari keajaiban dunia kehidupan dan organisme.</p>
            <div className="card-actions justify-end">
              <Link href="/biologi/bio1">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 - Biologi2 */}
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Biologi2"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Biologi 2</h2>
            <p>Pelajari keajaiban dunia kehidupan dan organisme.</p>
            <div className="card-actions justify-end">
              <Link href="/biologi/bio2">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 - Biologi3 */}
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Biologi3"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Biologi 3</h2>
            <p>Pelajari keajaiban dunia kehidupan dan organisme.</p>
            <div className="card-actions justify-end">
              <Link href="/biologi/bio3">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 4 - Biologi */}
        <div className="card bg-base-100 w-80 shadow-xl flex-shrink-0">
          <figure>
            <img
              src="/images/Booklesson.png" // Local image path
              alt="Biologi4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Biologi 4</h2>
            <p>Pelajari keajaiban dunia kehidupan dan organisme.</p>
            <div className="card-actions justify-end">
              <Link href="/biologi/bio4">
                <button className="btn btn-primary">Explore</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
