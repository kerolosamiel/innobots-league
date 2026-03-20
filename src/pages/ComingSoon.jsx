import Loader from "../components/Loader/Loader";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import "../css/comming-soon/comming-soon.css";

function ComingSoon() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="title">
          <h3>page under development</h3>
          <h1>Are you ready?</h1>
        </div>

        <Loader />
      </div>

      <SocialMedia />
    </section>
  );
}

export default ComingSoon;
