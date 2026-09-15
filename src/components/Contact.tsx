import { profile } from "../data";
import Reveal from "./Reveal";

export default function Contact() {
  const enquiry = `mailto:${profile.email}?subject=${encodeURIComponent("Let's work on a project")}&body=${encodeURIComponent("Hi Khairina,\n\nI'd love to discuss a project with you.\n\nThe idea:\n\nIdeal timeline:\n\nBudget range (if known):\n\nBest way to reach me:\n")}`;

  return (
    <footer id="contact" className="contact-editorial">
      <div className="contact-editorial__inner">
        <Reveal>
          <p className="contact-editorial__eyebrow">Have something in mind?</p>
          <h2>Let’s make<br /><em>it happen.</em></h2>
        </Reveal>
        <Reveal className="contact-editorial__details" delay={100}>
          <p>A new website, a useful tool, or an idea you’re ready to explore. Tell me what you have in mind, and let’s see what we can build together.</p>
          <div>
            <a className="contact-editorial__cta" href={enquiry}>Tell me about your project <span aria-hidden="true">↗</span></a>
            <a className="contact-editorial__email" href={`mailto:${profile.email}`}>{profile.email}</a>
            <span className="contact-editorial__hint">Opens your email app. A rough idea is a good start.</span>
          </div>
        </Reveal>
        <div className="contact-editorial__footer">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
      </div>
    </footer>
  );
}
