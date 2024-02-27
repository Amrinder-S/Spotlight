import React from 'react';

const Highlights = () => {
  const highlightsData = [
    {
      title: 'PassHub: Your Gateway to Effortless Campus Commutes',
      description: "Discover the ultimate solution to simplify your campus life with PassHub! No more tedious paperwork or lengthy queues our innovative bus pass application is designed to make your journey from home to campus seamless and stress-free. Whether youre a new student registering for the first time or a returning one looking to renew your pass, PassHubs user-friendly interface ensures a hassle-free experience.",
    },
    {
      title: 'Transparency in Transit: Stay in the Loop with PassHub Updates',
      description: "PassHub isn't just an app; it's your reliable communication channel. Get real-time updates on the status of your bus pass requests, keeping you in the loop every step of the way. No more guessing games – PassHub empowers you with transparency, making it easier to plan your day and reducing uncertainties related to your transportation needs. Your journey, your information – all at your fingertips.",
    },
    {
      title: 'Digital Passes, Tailored Routes: PassHub Personalizes Your Transit Experience',
      description: "Embrace the future of campus commuting with PassHub's digital bus passes! Say goodbye to physical passes and hello to a secure, digital solution issued directly through the app. Customize your route preferences, ensuring that your transportation aligns perfectly with your schedule. PassHub isn't just a bus pass application; it's your personalized transit companion, adapting to your needs for a convenient and flexible journey.",
    },
    {
      title: "Greener Travel, Brighter Future: PassHub's Eco-Friendly Approach",
      description: "Join us in creating a greener campus! PassHub not only simplifies your transportation but also contributes to a more sustainable environment. By digitizing the bus pass issuance process, we're reducing paperwork, waste, and our carbon footprint. PassHub aligns with modern trends, offering an eco-friendly solution for the forward-thinking student. Choose PassHub - where efficiency meets sustainability for a brighter, eco-conscious campus future!",
    },
  ];

  return (
    <div className=' flex flex-wrap m-5 gap-5 justify-center'>
      {highlightsData.map((highlight) => (
        <div class="card w-80 rounded hover:-translate-y-2">
        
        <div class="card-body">
            <h2 class="card-header">{highlight.title}</h2>
            <p class="text-content2">{highlight.description}</p>
 
        </div>
    </div>
      ))}
    </div>
  );
};

export default Highlights;
