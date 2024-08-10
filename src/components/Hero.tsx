import Background from '@/assets/images/background.jpg';

export const Hero = () => {
  return (
    <section className="relative bg-cover bg-center text-white py-16"
    style={{
      backgroundImage: `url("${Background.src}"), linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))`,
      backgroundBlendMode: 'overlay',
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
        Welcome to <span className="text-red-500">CyberAI</span>
      </h1>
      <p className="text-md md:text-lg mb-6 max-w-xl">
        Discover the best solutions for your code. Fast, secure, and reliable.
      </p>
      <div className="flex space-x-4">
        <a
          href="#"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold text-md shadow-lg transition-transform transform hover:-translate-y-1"
        >
          Get Started
        </a>
        <a
          href="#"
          className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-lg font-semibold text-md shadow-lg transition-transform transform hover:-translate-y-1"
        >
          Learn More
        </a>
      </div>
    </div>
  </section>

  );
};
