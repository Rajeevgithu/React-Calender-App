import { useState } from 'react';

const EventForm = ({ selectedDate, onSave, onClose }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#3B82F6");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ 
      title, 
      date: selectedDate, 
      time: time ? new Date(selectedDate.toDateString() + ' ' + time) : null,
      description,
      color
    });
    setTitle("");
    setTime("");
    setDescription("");
    setColor("#3B82F6");
    onClose();
  };

  const colorOptions = [
    { value: "#3B82F6", label: "Blue", bg: "bg-blue-500" },
    { value: "#10B981", label: "Green", bg: "bg-green-500" },
    { value: "#F59E0B", label: "Orange", bg: "bg-orange-500" },
    { value: "#EF4444", label: "Red", bg: "bg-red-500" },
    { value: "#8B5CF6", label: "Purple", bg: "bg-purple-500" },
    { value: "#EC4899", label: "Pink", bg: "bg-pink-500" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-[#1F2937] rounded-xl shadow-2xl w-full max-w-md mx-4 border border-[#E5E7EB] dark:border-[#374151] max-h-[90vh] overflow-y-auto">
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#111827] dark:text-[#F3F4F6]">
              Create Event
            </h3>
            <button 
              onClick={onClose}
              className="text-[#6B7280] dark:text-[#9CA3AF] hover:text-[#111827] dark:hover:text-[#F3F4F6] transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Date Display */}
            <div className="p-3 bg-[#F9FAFB] dark:bg-[#374151] rounded-lg">
              <label className="block text-sm font-medium text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                Date
              </label>
              <p className="text-[#111827] dark:text-[#F3F4F6] font-medium text-sm sm:text-base">
                {selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>

            {/* Event Title */}
            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-[#F3F4F6] mb-2">
                Event Title *
              </label>
              <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter event title" 
                required 
                className="w-full p-3 border border-[#E5E7EB] dark:border-[#374151] rounded-lg bg-white dark:bg-[#374151] text-[#111827] dark:text-[#F3F4F6] placeholder-[#6B7280] dark:placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent transition-all text-sm sm:text-base"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-[#F3F4F6] mb-2">
                Time (Optional)
              </label>
              <input 
                type="time"
                value={time} 
                onChange={(e) => setTime(e.target.value)} 
                className="w-full p-3 border border-[#E5E7EB] dark:border-[#374151] rounded-lg bg-white dark:bg-[#374151] text-[#111827] dark:text-[#F3F4F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-[#F3F4F6] mb-2">
                Description (Optional)
              </label>
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Add event details..."
                rows="3"
                className="w-full p-3 border border-[#E5E7EB] dark:border-[#374151] rounded-lg bg-white dark:bg-[#374151] text-[#111827] dark:text-[#F3F4F6] placeholder-[#6B7280] dark:placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent transition-all resize-none text-sm sm:text-base"
              />
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium text-[#111827] dark:text-[#F3F4F6] mb-2">
                Event Color
              </label>
              <div className="flex flex-wrap gap-2">
                {colorOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setColor(option.value)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${option.bg} border-2 transition-all ${
                      color === option.value 
                        ? 'border-[#111827] dark:border-[#F3F4F6] scale-110' 
                        : 'border-transparent hover:scale-105'
                    }`}
                    title={option.label}
                  />
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button 
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 border border-[#E5E7EB] dark:border-[#374151] text-[#111827] dark:text-[#F3F4F6] rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#374151] transition-colors font-medium text-sm sm:text-base"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="flex-1 py-3 px-4 bg-[#3B82F6] hover:bg-[#2563EB] dark:bg-[#60A5FA] dark:hover:bg-[#3B82F6] text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
              >
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
