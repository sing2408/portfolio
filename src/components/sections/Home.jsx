import { RevealOnScroll } from "../RevealOnScroll";
import myPhoto from "../../assets/profilepic.webp";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-20 gap-10 bg-pattern"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left max-w-4xl w-full gap-10">

 
        <RevealOnScroll>
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Hello! 👋  
              <br /> I'm <span className="text-blue-400">Singgih</span>
            </h1>

            <p className="text-white text-lg mb-8">
            Passionate about crafting seamless iOS experiences using SwiftUI and Apple's robust frameworks. Deeply immersed in the world of Machine Learning, exploring its potential to elevate app capabilities and create intelligent, user-centric solutions. Continuously learning and pushing the boundaries of mobile technology through the power of intelligent features. 🚀 </p>

            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50"
              >
                View Projects
              </a>
              <a
                href="#connect"
                className="border border-blue-500 text-blue-500 py-3 px-6 rounded font-medium transition-all hover:bg-blue-500 hover:text-white hover:shadow-md"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>

 
        <RevealOnScroll>
          <div className="flex justify-center">
            <img
              src={myPhoto}
              alt="My Profile"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full shadow-lg border-4 border-blue-500 object-cover"
            />
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
