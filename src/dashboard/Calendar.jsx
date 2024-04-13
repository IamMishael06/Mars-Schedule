import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
; // Import custom styles

const Calendar = () => {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
       
        aspectRatio={1.5} // Set aspect ratio to maintain a square shape
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        dayMaxEventRows={true} // Enable multi-line event display
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          omitZeroMinute: true,
          meridiem: 'short'
        }}
      />
    </div>
  );
};

export default Calendar;
