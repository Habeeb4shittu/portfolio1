import Image from "next/image";
import Link from "next/link";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="details">
          <h3>Hey, {"I'm"} Habeeb 👋🏻</h3>
          <h1>
            <span>Full</span>stack <br />
            Developer
          </h1>
          <p>I{"'"}m a <span>full</span>stack developer based in Nigeria, I{"'"}ll help you build beautiful websites your users will love.</p>
          <div className="in-touch-actions">
            <Link href={'/contact'}>Get in Touch</Link>
            <Link href={'/projects'}>Browse Projects</Link>
          </div>
        </div>
        <div className="image-container">
          <div className="my-image">
            <img src={'/images/me.jpg'} alt="my image" />
          </div>
        </div>
      </section>
      <Skills />
    </>
  );
}
