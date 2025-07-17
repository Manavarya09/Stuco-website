import React from 'react';

const teamMembers = [
  {
    name: 'Aarav Mehta',
    role: 'President',
    image: '/placeholder.svg',
  },
  {
    name: 'Sara Khan',
    role: 'Vice President',
    image: '/placeholder.svg',
  },
  {
    name: 'Rohan Patel',
    role: 'Events Head',
    image: '/placeholder.svg',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Lead',
    image: '/placeholder.svg',
  },
];

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4 font-sans">
      {/* Description and Image */}
      <div className="flex flex-col md:flex-row items-center mb-16 gap-10">
        <img src="/placeholder.svg" alt="Student Council" className="w-48 h-48 rounded-xl object-cover shadow-lg border-4 border-accent" />
        <div className="bg-white rounded-xl shadow p-8 flex-1">
          <h1 className="text-4xl font-bold text-primary mb-2">About the Student Council</h1>
          <h3 className="text-lg text-accent mb-4 font-semibold">Empowering Students, Building Community</h3>
          <p className="text-base text-secondary leading-relaxed">
            The BITS Pilani Dubai Student Council is dedicated to fostering a vibrant, inclusive, and supportive campus environment. We organize events, represent student interests, and work to make every student's experience memorable and impactful. Our mission is to empower students, encourage leadership, and create opportunities for growth and connection.
          </p>
        </div>
      </div>

      {/* Our Team Section */}
      <h2 className="text-3xl font-bold text-primary mb-2 text-center">Our Team</h2>
      <p className="text-accent text-center mb-10">Meet the passionate students leading the way at BITS Pilani Dubai.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center bg-white rounded-lg shadow p-6 border border-accent/30">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-accent" />
            <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
            <p className="text-secondary font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 