import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import { StaticImageData } from 'next/image';


const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black py-6">
      <div className="container mx-auto overflow-hidden">
        <div className="flex animate-marquee space-x-8">
          {images.map((image, index) => (
            <div key={index} className="flex-none">
              <img src={image.src.toString()} alt={`Logo ${index + 1}`} className="h-12 md:h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
