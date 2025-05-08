import React from "react";

const teams = [
  {
    name: "Vikram Singh",
    position: "Founder & CEO",
    description: "Former automotive engineer with a passion for sustainable car care solutions.",
    image: "/images/user1.jpg",
  },
  {
    name: "Ananya Sharma",
    position: "Operations Manager",
    description: "Logistics expert ensuring our service is always on time and exceeds expectations.",
    image: "/images/user2.jpg",
  },
  {
    name: "Rajesh Kumar",
    position: "Head of Training",
    description: "With 15+ years in professional detailing, he trains our team to deliver excellence.",
    image: "/images/user3.jpg",
  },
 
];

export default function OurTeam() {
  return (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 team-grid">
          {teams.map((team, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="mb-4 w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-secondary">
              <img src={team.image} alt={team.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-primary member-name">{team.name}</h3>
              <p className="text-secondary font-medium mb-2 member-position">{team.position}</p>
              <p className="text-gray-600 member-description">{team.description}</p>
            </div>
          ))}
        </div>
  );
}
