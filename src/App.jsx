import { useState, useEffect } from 'react'
import './App.css'
import CalendarView from './components/CalendarView'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import ListView from './components/ListView'
import { useTheme } from './components/ThemeContext'

function App() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [showEventForm, setShowEventForm] = useState(false)
  const [view, setView] = useState("calendar")
  const [events, setEvents] = useState(() => {
    const stored = localStorage.getItem("events");
    return stored ? JSON.parse(stored) : [];
  });
  const { dark, toggle } = useTheme();

  const handleDateClick = (date) => {
    setSelectedDate(date)
    setShowEventForm(true)
  }

  const saveEvent = (event) => {
    const updated = [...events, { ...event, id: Date.now() }];
    setEvents(updated);
    localStorage.setItem("events", JSON.stringify(updated));
  };

  const deleteEvent = (eventId) => {
    const updated = events.filter(event => event.id !== eventId);
    setEvents(updated);
    localStorage.setItem("events", JSON.stringify(updated));
  };

  const getEventsForDate = (date) => {
    return events.filter(event => 
      new Date(event.date).toDateString() === date.toDateString()
    ).sort((a, b) => new Date(a.time) - new Date(b.time));
  };

  const getTodayEvents = () => {
    const today = new Date();
    return getEventsForDate(today);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    return events
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 5);
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#1F2937] transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-[#1F2937] border-b border-[#E5E7EB] dark:border-[#374151] shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#3B82F6] dark:bg-[#60A5FA] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C</span>
                </div>
                <h1 className="text-xl font-bold text-[#111827] dark:text-[#F3F4F6]">
                  Calendar
                </h1>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Today's Date */}
              <div className="hidden md:block text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              
              {/* Theme Toggle */}
              <button 
                onClick={toggle}
                className="p-2 rounded-lg bg-[#F9FAFB] dark:bg-[#374151] hover:bg-[#E5E7EB] dark:hover:bg-[#4B5563] transition-colors border border-[#E5E7EB] dark:border-[#374151]"
                title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {dark ? "☀️" : "🌙"}
              </button>
              
              {/* View Toggle */}
              <button 
                onClick={() => setView(view === "calendar" ? "list" : "calendar")}
                className="px-3 py-2 sm:px-4 bg-[#3B82F6] hover:bg-[#2563EB] dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6] text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
              >
                <span className="hidden sm:inline">
                  {view === "calendar" ? "📋 List View" : "📅 Calendar View"}
                </span>
                <span className="sm:hidden">
                  {view === "calendar" ? "📋" : "📅"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {view === "calendar" ? (
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Main Calendar */}
            <div className="xl:col-span-3 order-1 xl:order-1">
              <div className="bg-white dark:bg-[#1F2937] rounded-xl shadow-lg border border-[#E5E7EB] dark:border-[#374151] p-4 sm:p-6">
                <CalendarView onDateClick={handleDateClick} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="xl:col-span-1 order-2 xl:order-2 space-y-4 sm:space-y-6">
              {/* Quick Add Event */}
              <div className="bg-white dark:bg-[#1F2937] rounded-xl shadow-lg border border-[#E5E7EB] dark:border-[#374151] p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-[#111827] dark:text-[#F3F4F6] mb-4">
                  Quick Add Event
                </h3>
                <button 
                  onClick={() => {
                    setSelectedDate(new Date());
                    setShowEventForm(true);
                  }}
                  className="w-full bg-[#3B82F6] hover:bg-[#2563EB] dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6] text-white py-3 px-4 rounded-lg transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <span>+</span>
                  <span>Add Event</span>
                </button>
              </div>

              {/* Today's Events */}
              <div className="bg-white dark:bg-[#1F2937] rounded-xl shadow-lg border border-[#E5E7EB] dark:border-[#374151] p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-[#111827] dark:text-[#F3F4F6] mb-4">
                  Today's Events
                </h3>
                {getTodayEvents().length === 0 ? (
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
                    No events scheduled for today
                  </p>
                ) : (
                  <div className="space-y-2">
                    {getTodayEvents().slice(0, 3).map((event) => (
                      <div key={event.id} className="p-3 bg-[#EBF4FF] dark:bg-[#1E3A8A] rounded-lg border border-[#BFDBFE] dark:border-[#1E40AF]">
                        <div className="text-sm font-medium text-[#1E40AF] dark:text-[#93C5FD]">
                          {event.title}
                        </div>
                        {event.time && (
                          <div className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                            {new Date(event.time).toLocaleTimeString('en-US', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Upcoming Events */}
              <div className="bg-white dark:bg-[#1F2937] rounded-xl shadow-lg border border-[#E5E7EB] dark:border-[#374151] p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-[#111827] dark:text-[#F3F4F6] mb-4">
                  Upcoming Events
                </h3>
                {getUpcomingEvents().length === 0 ? (
                  <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm">
                    No upcoming events
                  </p>
                ) : (
                  <div className="space-y-2">
                    {getUpcomingEvents().map((event) => (
                      <div key={event.id} className="p-3 bg-[#F0F9FF] dark:bg-[#0C4A6E] rounded-lg border border-[#BAE6FD] dark:border-[#0EA5E9]">
                        <div className="text-sm font-medium text-[#0C4A6E] dark:text-[#7DD3FC]">
                          {event.title}
                        </div>
                        <div className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mt-1">
                          {new Date(event.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                          {event.time && (
                            <span> • {new Date(event.time).toLocaleTimeString('en-US', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white dark:bg-[#1F2937] rounded-xl shadow-lg border border-[#E5E7EB] dark:border-[#374151] p-4 sm:p-6">
            <ListView events={events} onDelete={deleteEvent} />
          </div>
        )}
      </div>
      
      {/* Event Form Modal */}
      {showEventForm && selectedDate && (
        <EventForm 
          selectedDate={selectedDate}
          onSave={saveEvent}
          onClose={() => setShowEventForm(false)}
        />
      )}
    </div>
  )
}

export default App
