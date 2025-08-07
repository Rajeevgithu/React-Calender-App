const EventList = ({ events, onDelete }) => (
  <div className="mt-4">
    <h4 className="text-base sm:text-lg font-semibold mb-4 text-[#111827] dark:text-[#F3F4F6] flex items-center">
      <span className="mr-2">📅</span>
      Events ({events.length})
    </h4>
    {events.length === 0 ? (
      <div className="text-center py-6 sm:py-8">
        <div className="text-[#6B7280] dark:text-[#9CA3AF] text-3xl sm:text-4xl mb-2">📝</div>
        <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm sm:text-base">No events for this date</p>
      </div>
    ) : (
      <ul className="space-y-2 sm:space-y-3">
        {events.map((ev) => (
          <li 
            key={ev.id} 
            className="group relative p-3 sm:p-4 rounded-xl border transition-all hover:shadow-md"
            style={{
              backgroundColor: ev.color ? `${ev.color}15` : '#EBF4FF',
              borderColor: ev.color ? `${ev.color}30` : '#BFDBFE'
            }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: ev.color || '#3B82F6' }}
                  />
                  <h5 className="font-medium text-[#111827] dark:text-[#F3F4F6] text-sm sm:text-base truncate">
                    {ev.title}
                  </h5>
                </div>
                
                {ev.time && (
                  <div className="text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                    🕐 {new Date(ev.time).toLocaleTimeString('en-US', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                )}
                
                {ev.description && (
                  <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] line-clamp-2">
                    {ev.description}
                  </p>
                )}
              </div>
              
              {onDelete && (
                <button 
                  onClick={() => onDelete(ev.id)}
                  className="opacity-0 group-hover:opacity-100 text-[#DC2626] hover:text-[#B91C1C] dark:text-[#F87171] dark:hover:text-[#EF4444] p-1 rounded transition-all hover:bg-red-50 dark:hover:bg-red-900/20 flex-shrink-0"
                  title="Delete event"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default EventList;
