const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
  {
    title: "Threat Intelligence",
    description:
      "Leverage our threat intelligence to stay ahead of new and emerging threats. Our database is continually updated with the latest threat information.",
  }
];

export const Features = () => {
  return (
    <section className="bg-gradient-to-r from-black via-black-900 to-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-8 bg-zinc-800 rounded-lg hover:bg-zinc-600 transition-colors duration-300 shadow-lg"
            >
              {/* <div className="mb-6">{feature.icon}</div> */}
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
