
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  image: string;
  category: string;
  description: string;
}

const HeroSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "PEER-PEER Mentorship",
      date: "2024-09-01",
      time: "16:00",
      location: "Student Lounge",
      attendees: 120,
      image: "/placeholder.svg",
      category: "Mentorship",
      description: "Connect with experienced seniors and receive guidance on academics, campus life, and career planning. A welcoming space for all new and continuing students!"
    },
    {
      id: 2,
      title: "Volunteer for EMC",
      date: "2024-09-05",
      time: "14:00",
      location: "Main Auditorium",
      attendees: 80,
      image: "/placeholder.svg",
      category: "Volunteering",
      description: "Join the organizing team for the Engineering Management Conference. Gain leadership experience and contribute to a flagship BITS event."
    },
    {
      id: 3,
      title: "Marketing and Sponsorship",
      date: "2024-09-10",
      time: "17:00",
      location: "Conference Room B",
      attendees: 60,
      image: "/placeholder.svg",
      category: "Professional",
      description: "Learn the art of marketing and sponsorship for college events. Network with industry professionals and help elevate BITS Pilani Dubai's presence."
    },
    {
      id: 4,
      title: "Orientation Week",
      date: "2024-09-15",
      time: "10:00",
      location: "Campus Grounds",
      attendees: 200,
      image: "/placeholder.svg",
      category: "Orientation",
      description: "A week-long series of activities to welcome new students. Includes campus tours, icebreakers, and info sessions to kickstart your BITS journey."
    },
    {
      id: 5,
      title: "Sparks",
      date: "2024-09-20",
      time: "18:00",
      location: "Open Air Theatre",
      attendees: 150,
      image: "/placeholder.svg",
      category: "Cultural",
      description: "An evening of performances, creativity, and celebration. Showcasing the diverse talents of BITS Pilani Dubai students."
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.event-card');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
          el.classList.add('animate-fade-in-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-16 px-4">
      {/* Hero Content */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary">
          BITS PILANI,
          <span className="text-accent"> Dubai</span>
        </h1>
        <p className="text-xl md:text-2xl text-secondary font-matrix max-w-3xl mx-auto mb-8">
          Powered by Student Council
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="cyber-button interactive">
            EXPLORE EVENTS
          </button>
          <button className="cyber-button cyber-button-pink interactive">
            SHOP MERCH
          </button>
        </div>
      </div>

      {/* Events Showcase */}
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-cyber font-bold text-primary">
            UPCOMING_EVENTS.EXE
          </h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="interactive p-3 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="interactive p-3 border border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Events */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto cyber-scrollbar pb-4"
          style={{ scrollbarWidth: 'thin' }}
        >
          {events.map((event, index) => (
            <div
              key={event.id}
              className="event-card cyber-card min-w-[300px] cursor-pointer interactive group"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedEvent(event)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-cyber-pink text-cyber-dark px-3 py-1 rounded font-cyber text-sm font-bold">
                  {event.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-cyber font-bold text-primary group-hover:text-accent transition-colors">
                  {event.title}
                </h3>
                
                <div className="space-y-2 text-sm text-cyber-blue/70 font-matrix">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date} at {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} attending</span>
                  </div>
                </div>
                
                <button className="mt-4 w-full cyber-button text-sm py-2 interactive">
                  VIEW DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-cyber-dark/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="cyber-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-cyber-dark/80 text-cyber-blue hover:text-cyber-pink p-2 rounded interactive"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-cyber-pink text-cyber-dark px-3 py-1 rounded font-cyber text-sm font-bold">
                  {selectedEvent.category}
                </span>
                <span className="text-cyber-blue/70 font-matrix">
                  {selectedEvent.attendees} attending
                </span>
              </div>
              
              <h2 className="text-3xl font-cyber font-bold text-primary mb-4">
                {selectedEvent.title}
              </h2>
              
              <p className="text-cyber-blue/80 font-matrix mb-6">
                {selectedEvent.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2 text-cyber-blue/70 font-matrix">
                  <Calendar className="w-5 h-5" />
                  <span>{selectedEvent.date} at {selectedEvent.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-cyber-blue/70 font-matrix">
                  <MapPin className="w-5 h-5" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="cyber-button flex-1 interactive">
                  REGISTER NOW
                </button>
                <button className="cyber-button cyber-button-pink flex-1 interactive">
                  ADD TO CALENDAR
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
