import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import mapLoadingAnimation from "../../assets/contact_images/map-loading.json";
import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [mapHasLoaded, setMapHasLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const lottieRef = useRef<LottieRefCurrentProps>(null); 

  // Define a velocidade da animação
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.5); 
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimePassed(true), 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (mapHasLoaded && minTimePassed) {
      setShowLoader(false);
    }
  }, [mapHasLoaded, minTimePassed]);

  return (
    <section className="flex justify-center px-4 pt-4 pb-8 bg-transparent">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-6xl flex flex-col md:flex-row items-start gap-2">
        {/* Left: Contact Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-raleway-100 text-light-purple-300 mb-4">Contact Me</h2>
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-mint-300" />
            <span className="text-lg text-dark-purple-900">+55 (83) 99123-0473</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-mint-300" />
            <a
              href="mailto:caioh_m@outlook.com?subject=Solicitação de Serviço&body=Olá, gostaria de solicitar mais informações sobre seus serviços. Por favor, me envie detalhes sobre como podemos trabalhar juntos."
              className="text-lg hover:underline text-dark-purple-900"
            >
              caioh_m@outlook.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaGithub className="text-mint-300" />
            <a
              href="https://github.com/caiohrgm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline text-dark-purple-900"
            >
              @caiohrgm
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="text-mint-300" />
            <a
              href="https://www.linkedin.com/in/caiohmedeiros/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:underline text-dark-purple-900"
            >
              @caiohmedeiros
            </a>
          </div>
          <footer className="mt-22 text-sm text-gray-400 border-t pt-4">
            © 2025 Caio Medeiros. All rights reserved.
          </footer>
        </div>

        {/* Right: Google Maps */}
        <div className="flex-1 relative">
          {showLoader && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg border border-light-purple-300 z-10">
              <Lottie
                lottieRef={lottieRef}
                animationData={mapLoadingAnimation}
                loop
                className="h-20 w-20"
              />
            </div>
          )}
          <iframe
            title="Minha Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63327.731154608926!2d-35.94276400588414!3d-7.242750649646325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e5f43201c85%3A0xc9656aec3aa6af51!2sCampina%20Grande%2C%20PB!5e0!3m2!1spt-BR!2sbr!4v1746491354142!5m2!1spt-BR!2sbr"
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            onLoad={() => setMapHasLoaded(true)}
            className="rounded-lg shadow-md border border-light-purple-300"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
