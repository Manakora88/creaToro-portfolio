import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about me" className="w-full h-64" />
        <article>
          <SectionTitle text="O mnie" />
          <p className="text-slate-600 mt-8 leading-loose">
          Jestem dziewczyną, która zamienia dobre pomysły na piksele.
          Tworzę strony i aplikacje od podstaw do finishu. Potrafię je zaprojektować, napisać w kodzie lub odwzorować na Wordpressie. Za to jeśli brakuje mi do treści jakichś grafik, mogę je przygotować, bez potrzeby posiłkowania się stackowymi zasobami. <br/>
          Jeśli szukasz kogoś, kto potrafi zrobić strony internetowe i aplikacje, które nie tylko działają, ale też dobrze wyglądają, to trafiłeś w dziesiątkę!
          </p>
        </article>
      </div>
    </section>
  )
}
export default About
