import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarView = ({ onDateClick }) => {
  const handleClick = (date) => onDateClick(date);

  return (
    <div>
      <Calendar onClickDay={handleClick} />
    </div>
  );
};

export default CalendarView;
