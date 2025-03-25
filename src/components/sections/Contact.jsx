import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaMedium,
  FaEnvelope,
} from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="connect"
      className="min-h-screen flex items-center justify-center py-20 bg-pattern"
    >
      <RevealOnScroll>
        <div
          className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6 text-center"
          style={{
            maxWidth: "600px", 
            margin: "0 auto", 
          }}
        >
          <h2
            className="font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 3.5rem)", 
            }}
          >
            Connect with Me
          </h2>

         
          <div
            className="flex justify-center gap-6"
            style={{
              flexWrap: "wrap",  
            }}
          > 
            <a
              href="https://github.com/sing2408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 p-3 rounded-full hover:text-blue-500 hover:scale-110 transition-all"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",  
              }}
            >
              <FaGithub />
            </a>
  
            <a
              href="https://www.linkedin.com/in/singgih-tulus-makmud/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 p-3 rounded-full hover:text-blue-500 hover:scale-110 transition-all"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",  
              }}
            >
              <FaLinkedin />
            </a>

            
            <a
              href="https://instagram.com/singgihtulus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 p-3 rounded-full hover:text-blue-500 hover:scale-110 transition-all"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)", 
              }}
            >
              <FaInstagram />
            </a>

         
            <a
              href="https://medium.com/@singgihtulus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 p-3 rounded-full hover:text-blue-500 hover:scale-110 transition-all"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",  
              }}
            >
              <FaMedium />
            </a>

         
            <a
              href="mailto:singgihtulus@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 p-3 rounded-full hover:text-blue-500 hover:scale-110 transition-all"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",  
              }}
            >
              <FaEnvelope />
            </a>
          </div>

     
          <p
            className="mt-6 text-gray-400"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",  
            }}
          >
            Feel free to reach out via any of the platforms above! I'm always
            happy to connect and chat.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
};