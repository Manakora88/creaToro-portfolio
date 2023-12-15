import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaBehanceSquare } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="bg-rose-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <p className="mt-4 text-2xl text-slate-700 capitalize tracking-wide">
            Jestem
          </p>
          <h1 className="text-7xl font-bold tracking-wider">Marzena</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer / Grafik
          </p>
          <p className="mt-2 text-lg text-slate-700 tracking-wide">
            Dobre pomysły wcielam w interaktywną rzeczywistość
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/Manakora88" target="_blank">
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/marzenawloczyk"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://www.behance.net/mkwloczyk" target="_blank">
              <FaBehanceSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" />
        </article>
      </div>
    </section>
  )
}
export default Hero
