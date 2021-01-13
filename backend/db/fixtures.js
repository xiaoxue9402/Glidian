/**
 * This file contains the data that the database will be initialized with.
 * During the interview, we'll provide a replacement copy with a larger dataset.
 */

const All = {
  id: 1,
  name: 'All',
}

const Crew = {
  id: 2,
  name: 'Crew',
};

const Passengers = {
  id: 3,
  name: 'Passengers',
};

const Veterans = {
  id: 4,
  name: 'Veterans',
};

exports.Groups = [All, Crew, Passengers, Veterans];
exports.Users = [
  { id: 1, name: "Malcolm Reynolds", nickname: "Mal", Groups: [All, Crew, Veterans] },
  { id: 2, name: "Zoe Alleyne Washburne", nickname: "Zoe", Groups: [All, Crew, Veterans] },
  { id: 3, name: "Hoban Washburne", nickname: "Wash", Groups: [All, Crew] },
  { id: 4, name: "Kaywinnet Lee Frye", nickname: "Kaylee", Groups: [All, Crew] },
  { id: 5, name: "Inara Serra", nickname: "Inara", Groups: [All, Crew] },
  { id: 6, name: "Jayne Cobb", nickname: "Jayne", Groups: [All, Crew] },
  { id: 7, name: "Derrial Book", nickname: "Shepherd", Groups: [All, Passengers, Veterans] },
  { id: 8, name: "Simon Tam", nickname: "Doc", Groups: [All, Passengers] },
  { id: 9, name: "River Tam", nickname: "River", Groups: [All, Passengers] },
]
