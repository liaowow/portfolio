import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="text-center max-w-3xl mx-auto">
      <h1 className="text-6xl font-extrabold mb-6">Annie Liao</h1>
      <p className="text-xl text-gray-700 mb-8">
        Front-End Engineer & Product Owner passionate about building clean and
        scalable web experiences.
      </p>

      <div className="space-x-6 text-lg font-semibold">
        <Link
          to="/about"
          className="text-blue-600 hover:underline focus:underline"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="text-blue-600 hover:underline focus:underline"
        >
          Projects
        </Link>
      </div>
    </section>
  );
}
