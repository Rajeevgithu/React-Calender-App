const ListView = ({ events, onDelete }) => {
  const grouped = events.reduce((acc, ev) => {
    const date = new Date(ev.date).toDateString();
    acc[date] = acc[date] ? [...acc[date], ev] : [ev];
    return acc;
  }, {});

  const sortedDates = Object.keys(grouped).sort((a, b) => new Date(a) - new Date(b));

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-[#111827] dark:text-[#F3F4F6] flex items-center">
          <span className="mr-2 sm:mr-3">📋</span>
          All Events
        </h2>
        <div className="text-sm text-[#6B7280] dark:text-[#9CA3AF]">
          {events.length} event{events.length !== 1 ? 's' : ''} total
        </div>
      </div>
      
      {sortedDates.length === 0 ? (
        <div className="text-center py-12 sm:py-16">
          <div className="text-[#6B7280] dark:text-[#9CA3AF] text-4xl sm:text-6xl mb-4">📅</div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#111827] dark:text-[#F3F4F6] mb-2">
            No events scheduled
          </h3>
          <p className="text-[#6B7280] dark:text-[#9CA3AF] text-sm sm:text-base">
            Start by creating your first event!
          </p>
        </div>
      ) : (
        <div className="space-y-4 sm:space-y-6">
          {sortedDates.map((date) => (
            <div key={date} className="bg-white dark:bg-[#1F2937] rounded-xl shadow-sm border border-[#E5E7EB] dark:border-[#374151] overflow-hidden">
              <div className="bg-[#F9FAFB] dark:bg-[#374151] px-4 sm:px-6 py-3 sm:py-4 border-b border-[#E5E7EB] dark:border-[#374151]">
                <h4 className="text-base sm:text-lg font-semibold text-[#111827] dark:text-[#F3F4F6] flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                  <span className="flex items-center">
                    <span className="mr-2">📅</span>
                    {new Date(date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="text-sm font-normal text-[#6B7280] dark:text-[#9CA3AF]">
                    ({grouped[date].length} event{grouped[date].length !== 1 ? 's' : ''})
                  </span>
                </h4>
              </div>
              
              <div className="p-4 sm:p-6">
                <div className="space-y-3">
                  {grouped[date].map((ev) => (
                    <div 
                      key={ev.id} 
                      className="group relative p-3 sm:p-4 rounded-xl border transition-all hover:shadow-md"
                      style={{
                        backgroundColor: ev.color ? `${ev.color}15` : '#EBF4FF',
                        borderColor: ev.color ? `${ev.color}30` : '#BFDBFE'
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                            <div 
                              className="w-3 h-3 rounded-full flex-shrink-0"
                              style={{ backgroundColor: ev.color || '#3B82F6' }}
                            />
                            <h5 className="font-semibold text-[#111827] dark:text-[#F3F4F6] text-sm sm:text-base truncate">
                              {ev.title}
                            </h5>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF]">
                            {ev.time && (
                              <span className="flex items-center">
                                🕐 {new Date(ev.time).toLocaleTimeString('en-US', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                              </span>
                            )}
                            <span className="flex items-center">
                              📅 {new Date(ev.date).toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric' 
                              })}
                            </span>
                          </div>
                          
                          {ev.description && (
                            <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#9CA3AF] mt-2 line-clamp-2">
                              {ev.description}
                            </p>
                          )}
                        </div>
                        
                        {onDelete && (
                          <button 
                            onClick={() => onDelete(ev.id)}
                            className="opacity-0 group-hover:opacity-100 text-[#DC2626] hover:text-[#B91C1C] dark:text-[#F87171] dark:hover:text-[#EF4444] p-1 sm:p-2 rounded-lg transition-all hover:bg-red-50 dark:hover:bg-red-900/20 flex-shrink-0"
                            title="Delete event"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListView;
