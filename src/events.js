import parse from "date-fns/parse";

const events = [
  {
    title: "Lou & Gav Wedding Anniversary 💍",
    allDay: true,
    start: parse("2024-01-01", "yyyy-M-dd", new Date()),
    end: parse("2024-01-01", "yyyy-M-dd", new Date()),
    recurring: true
    // 'end': parse('2021-7-13T12:30:00.000Z', "yyyy-M-dd'T'HH:mm:ss.SSSX", new Date())
  },
  {
    title: "Mam lanzo trip 🌞",
    allDay: true,
    start: parse("2024-01-05", "yyyy-M-dd", new Date()),
    end: parse("2024-02-29", "yyyy-M-dd", new Date()),
    recurring: true
    // 'end': parse('2021-7-13T12:30:00.000Z', "yyyy-M-dd'T'HH:mm:ss.SSSX", new Date())
  },
  {
    title: "Lou’s Birthday 🎉",
    allDay: true,
    start: parse("2024-07-23", "yyyy-M-dd", new Date()),
    end: parse("2024-07-23", "yyyy-M-dd", new Date()),
    recurring: true
    // 'end': parse('2021-7-13T12:30:00.000Z', "yyyy-M-dd'T'HH:mm:ss.SSSX", new Date())
  },
  {
    title: "Niamh’s Birthday 🎂",
    allDay: true,
    start: parse("2024-02-18", "yyyy-M-dd", new Date()),
    end: parse("2024-02-18", "yyyy-M-dd", new Date()),
    recurring: true
    // 'end': parse('2021-7-13T12:30:00.000Z', "yyyy-M-dd'T'HH:mm:ss.SSSX", new Date())
  },
  {
    title: "Gary’s Birthday 🎂",
    allDay: true,
    start: parse("2024-09-19", "yyyy-M-dd", new Date()),
    end: parse("2024-09-19", "yyyy-M-dd", new Date()),
    recurring: true
    // 'end': parse('2021-7-13T12:30:00.000Z', "yyyy-M-dd'T'HH:mm:ss.SSSX", new Date())
  },
  {
    title: "Dad’s Birthday 🎉",
    allDay: true,
    start: parse("2024-04-14", "yyyy-M-dd", new Date()),
    end: parse("2024-04-14", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Mams’s Birthday 🎂",
    allDay: true,
    start: parse("2024-05-31", "yyyy-M-dd", new Date()),
    end: parse("2024-04-31", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Siofra's Birthday",
    allDay: true,
    start: parse("2024-12-06", "yyyy-M-dd", new Date()),
    end: parse("2024-12-06", "yyyy-M-dd", new Date()),
    recurring: true
  },
  {
    title: "Marie's Birthday 🎂",
    allDay: true,
    start: parse("2024-07-22", "yyyy-M-dd", new Date()),
    end: parse("2024-07-22", "yyyy-M-dd", new Date()),
    recurring: true
  }

  // {
  //   id: 0,
  //   title: "All Day Event very long title",
  //   allDay: true,
  //   start: new Date(2024, 2, 0),
  //   end: new Date(2024, 2, 1),
  //   recurring: false
  // }
  // {
  //   // id: 1,
  //   title: "Louises Birthday",
  //   // start: new Date(2022, 6, 23),
  //   // end: new Date(2022, 6, 23),
  //   start: parse(new Date(2022, 6, 23), "MM/dd/yyyy"),
  //   end: parse(new Date(2022, 6, 23), "MM/dd/yyyy"),
  //   // start: format(parseISO(new Date(2022, 6, 23)), "dd MMM yy"),
  //   // end: format(parseISO(new Date(2022, 6, 23)), "dd MMM yy"),
  //   recurring: true
  // },
  // {
  //   id: 0,
  //   title: "All Day Event very long title",
  //   allDay: true,
  //   start: new Date(2015, 3, 0),
  //   end: new Date(2015, 3, 1)
  // }
];
export default events;
// export default [
// {
//   id: 0,
//   title: "My Birthday",
//   allDay: true,
//   start: new Date(2022, 1, 18),
//   end: new Date(2022, 1, 18),
//   recurring: true,
// },
// {
//   id: 1,
//   title: "Louises Birthday",
//   start: new Date(2022, 6, 23),
//   end: new Date(2022, 6, 23),
//   recurring: true,
// },
// {
//   id: 2,
//   title: "Garys Birthday",
//   start: new Date(2022, 8, 19),
//   end: new Date(2022, 8, 19),
//   recurring: true,
// },
//   {
//     id: 2,
//     title: "Alternate Birthday",
//     allDay: true,
//     start: new Date(2022, 18, 2),
//     end: new Date(2022, 18, 2),
//     recurring: true,
//   },

//   {
//     id: 3,
//     title: "DTS ENDS",
//     start: new Date(2016, 10, 6, 0, 0, 0),
//     end: new Date(2016, 10, 13, 0, 0, 0),
//   },

//   {
//     id: 4,
//     title: "Some Event",
//     start: new Date(2015, 3, 9, 0, 0, 0),
//     end: new Date(2015, 3, 10, 0, 0, 0),
//   },
//   {
//     id: 5,
//     title: "Conference",
//     start: new Date(2015, 3, 11),
//     end: new Date(2015, 3, 13),
//     desc: "Big conference for important people",
//   },
//   {
//     id: 6,
//     title: "Meeting",
//     start: new Date(2015, 3, 12, 10, 30, 0, 0),
//     end: new Date(2015, 3, 12, 12, 30, 0, 0),
//     desc: "Pre-meeting meeting, to prepare for the meeting",
//   },
//   {
//     id: 7,
//     title: "Lunch",
//     start: new Date(2015, 3, 12, 12, 0, 0, 0),
//     end: new Date(2015, 3, 12, 13, 0, 0, 0),
//     desc: "Power lunch",
//   },
//   {
//     id: 8,
//     title: "Meeting",
//     start: new Date(2015, 3, 12, 14, 0, 0, 0),
//     end: new Date(2015, 3, 12, 15, 0, 0, 0),
//   },
//   {
//     id: 9,
//     title: "Happy Hour",
//     start: new Date(2015, 3, 12, 17, 0, 0, 0),
//     end: new Date(2015, 3, 12, 17, 30, 0, 0),
//     desc: "Most important meal of the day",
//   },
//   {
//     id: 10,
//     title: "Dinner",
//     start: new Date(2015, 3, 12, 20, 0, 0, 0),
//     end: new Date(2015, 3, 12, 21, 0, 0, 0),
//   },
//   {
//     id: 11,
//     title: "Planning Meeting with Paige",
//     start: new Date(2015, 3, 13, 8, 0, 0),
//     end: new Date(2015, 3, 13, 10, 30, 0),
//   },
//   {
//     id: 11.1,
//     title: "Inconvenient multi-day Conference Call",
//     start: new Date(2015, 3, 13, 9, 30, 0),
//     end: new Date(2015, 3, 14, 1, 0, 0),
//   },
//   {
//     id: 11.2,
//     title: "Project Kickoff - Lou's Shoes",
//     start: new Date(2015, 3, 13, 11, 30, 0),
//     end: new Date(2015, 3, 13, 14, 0, 0),
//   },
//   {
//     id: 11.3,
//     title: "Quote Follow-up - Tea by Tina",
//     start: new Date(2015, 3, 13, 15, 30, 0),
//     end: new Date(2015, 3, 13, 16, 0, 0),
//   },
//   {
//     id: 12,
//     title: "Late Night Event",
//     start: new Date(2015, 3, 17, 19, 30, 0),
//     end: new Date(2015, 3, 18, 2, 0, 0),
//   },
//   {
//     id: 12.5,
//     title: "Late Same Night Event",
//     start: new Date(2015, 3, 17, 19, 30, 0),
//     end: new Date(2015, 3, 17, 23, 30, 0),
//   },
//   {
//     id: 13,
//     title: "Multi-day Event",
//     start: new Date(2015, 3, 20, 19, 30, 0),
//     end: new Date(2015, 3, 22, 2, 0, 0),
//   },
//   {
//     id: 14,
//     title: "Today",
//     start: new Date(new Date().setHours(new Date().getHours() - 3)),
//     end: new Date(new Date().setHours(new Date().getHours() + 3)),
//   },
//   {
//     id: 15,
//     title: "Point in Time Event",
//     start: now,
//     end: now,
//   },
//   {
//     id: 16,
//     title: "Video Record",
//     start: new Date(2015, 3, 14, 15, 30, 0),
//     end: new Date(2015, 3, 14, 19, 0, 0),
//   },
//   {
//     id: 17,
//     title: "Dutch Song Producing",
//     start: new Date(2015, 3, 14, 16, 30, 0),
//     end: new Date(2015, 3, 14, 20, 0, 0),
//   },
//   {
//     id: 18,
//     title: "Itaewon Halloween Meeting",
//     start: new Date(2015, 3, 14, 16, 30, 0),
//     end: new Date(2015, 3, 14, 17, 30, 0),
//   },
//   {
//     id: 19,
//     title: "Online Coding Test",
//     start: new Date(2015, 3, 14, 17, 30, 0),
//     end: new Date(2015, 3, 14, 20, 30, 0),
//   },
//   {
//     id: 20,
//     title: "An overlapped Event",
//     start: new Date(2015, 3, 14, 17, 0, 0),
//     end: new Date(2015, 3, 14, 18, 30, 0),
//   },
//   {
//     id: 21,
//     title: "Phone Interview",
//     start: new Date(2015, 3, 14, 17, 0, 0),
//     end: new Date(2015, 3, 14, 18, 30, 0),
//   },
//   {
//     id: 22,
//     title: "Cooking Class",
//     start: new Date(2015, 3, 14, 17, 30, 0),
//     end: new Date(2015, 3, 14, 19, 0, 0),
//   },
//   {
//     id: 23,
//     title: "Go to the gym",
//     start: new Date(2015, 3, 14, 18, 30, 0),
//     end: new Date(2015, 3, 14, 20, 0, 0),
//   },
// ];