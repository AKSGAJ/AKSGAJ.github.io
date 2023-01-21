const now = new Date();

$(document).ready(function () {
  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,basicWeek,basicDay",
    },
    defaultDate: now,
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: "Speech",
        start: "2023-01-30",
      },
      {
        title: "Long Event",
        start: "2023-01-07",
        end: "2023-01-10",
      },
      {
        id: 999,
        title: "Repeating Event",
        start: "2023-01-09T16:00:00",
      },
      {
        id: 999,
        title: "Repeating Event",
        start: "2023-01-16T16:00:00",
      },

      {
        title: "Meeting",
        start: "2023-01-12T10:30:00",
        end: "2023-01-12T12:30:00",
      },
      {
        title: "Lunch",
        start: "2023-01-12T12:00:00",
      },
      {
        title: "Click for Google",
        url: "https://google.com/",
        start: "2023-01-28",
      },
    ],
  });
});
