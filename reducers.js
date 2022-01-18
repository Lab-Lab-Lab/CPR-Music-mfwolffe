import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import * as types from './types';

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
};

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      };
    default:
      return state;
  }
};

const mockAssignments = {
  loaded: false,
  items: [],
};

const assignmentsReducer = (state = mockAssignments, { type, payload }) => {
  switch (type) {
    case types.Action.GotAssignments:
      console.log('got assignments', payload);
      return state;
  }
  return state;
};

const initialActivities = {
  loaded: false,
  items: [],
};

const activitiesReducer = (state = initialActivities, { type, payload }) => {
  switch (type) {
    case types.Action.GotActivities:
      console.log('got activities', payload);
  }
  return state;
};

const mockActivityTypes = [
  {
    id: 1,
    name: 'Melody',
    category: 'perform',
  },
  {
    id: 2,
    name: 'Bass Line',
    category: 'perform',
  },
  {
    id: 3,
    name: 'Creativity',
    category: 'create',
  },
  {
    id: 4,
    name: 'Reflection',
    category: 'reflect',
  },
];

const activityTypesReducer = (state = mockActivityTypes, { type, payload }) => {
  return state;
};

const Level = {
  Primary: 'Primary',
  Secondary: 'Secondary',
};

const initialPieces = { loaded: false, items: [] };
// {
//   id: 0,
//   slug: "piece-with-id-0",
//   name: "Piece with id 0",
//   composerId: 0,
//   videoS3Key: "video/0",
//   audioS3Key: "audio/0",
//   notationS3Key: "notation/0",
//   date: "timestamp0",
//   level: Level.Primary,
// },
// {
//   id: 1,
//   slug: "celebration-for-a-new-day",
//   name: "Celebration for a New Day",
//   composerId: 0,
//   videoS3Key: "video/1",
//   audioS3Key: "audio/1",
//   notationS3Key: "notation/1",
//   date: "timestamp1",
//   level: Level.Primary,
// },
// {
//   id: 2,
//   slug: "air-for-band",
//   name: "Air for Band",
//   composerId: 0,
//   videoS3Key: "video/2",
//   audioS3Key: "audio/2",
//   notationS3Key: "notation/2",
//   date: "timestamp2",
//   level: Level.Primary,
// },
// {
//   id: 3,
//   slug: "america-the-beautiful",
//   name: "America the Beautiful",
//   composerId: 0,
//   videoS3Key: "video/3",
//   audioS3Key: "audio/3",
//   notationS3Key: "notation/3",
//   date: "timestamp3",
//   level: Level.Primary,
// },
// {
//   id: 4,
//   slug: "chant",
//   name: "Chant",
//   composerId: 1,
//   videoS3Key: "video/4",
//   audioS3Key: "audio/4",
//   notationS3Key: "notation/4",
//   date: "timestamp4",
//   level: Level.Primary,
// },
// {
//   id: 5,
//   slug: "danny-boy",
//   name: "Danny Boy",
//   composerId: 1,
//   videoS3Key: "video/5",
//   audioS3Key: "audio/5",
//   notationS3Key: "notation/5",
//   date: "timestamp5",
//   level: Level.Primary,
// },
// {
//   id: 7,
//   slug: "portamento",
//   name: "Portamento",
//   composerId: 1,
//   videoS3Key: "video/7",
//   audioS3Key: "audio/7",
//   notationS3Key: "notation/7",
//   date: "timestamp7",
//   level: Level.Secondary,
// },
// ];

const piecesReducer = (state = initialPieces, { type, payload }) => {
  switch (type) {
    case types.Action.GotPieces:
      console.log('got pieces', payload);
      return { loaded: true, items: payload };
  }
  return state;
};

const mockComposers = [
  {
    id: 0,
    name: 'name0',
  },
  {
    id: 1,
    name: 'name1',
  },
];

const composersReducer = (state = mockComposers, { type, payload }) => {
  return state;
};

const mockUsers = [
  {
    id: 0,
    name: 'name0',
    grade: 'grade0',
  },
  {
    id: 1,
    name: 'name1',
    grade: 'grade1',
  },
];

const usersReducer = (state = mockUsers, { type, payload }) => {
  // switch (type) {
  //   case types.LOGGED_IN:
  //     console.log(types.LOGGED_IN, payload);
  // }
  return state;
};

const mockCourses = {
  courses: [
    // {
    //   id: 0,
    //   name: "7th Grade Band",
    //   ownerId: 0,
    //   level: Level.Secondary,
    // },
    // {
    //   id: 1,
    //   name: "8th Grade Orchestra",
    //   ownerId: 1,
    //   level: Level.Primary,
    // },
  ],
};

const coursesReducer = (state = mockCourses, { type, payload }) => {
  // switch (type) {
  //   // case HYDRATE:
  //   //   console.log("got HYDRATE");
  //   //   console.log(payload);
  //   //   return { ...state, courses: payload.courses };
  //   case types.Action.GotCourses:
  //     console.log("gotCourses", payload);
  //     return payload;
  //   case types.ADDED_COURSE:
  //     console.log("payload", payload);
  //     return [...state, { id: state.length, name: payload.name }];
  // }
  return state;
};

const Role = {
  student: 'Student',
  teacher: 'Teacher',
};
const mockEnrollments = { loaded: false, items: [] };

const enrollmentsReducer = (state = mockEnrollments, { type, payload }) => {
  switch (type) {
    case types.Action.AddedRoster:
      console.log('addedRoster', payload);
      return state;
    case types.Action.GotEnrollments:
      console.log('GotEnrollments', payload);
      return { loaded: true, items: payload };
  }
  return state;
};

const mockRoster = { loaded: false, items: [] };

const rosterReducer = (state = mockRoster, { type, payload }) => {
  switch (type) {
    case types.Action.GotRoster:
      console.log('GotRoster', payload);
      return { loaded: true, items: payload };
    case types.Action.UpdatedEnrollmentInstrument:
      console.log('UpdatedEnrollmentInstrument', payload);
      const items = state.items;
      items.filter(
        (enrollment) => enrollment.id === payload.enrollment.id
      )[0].instrument = {
        id: payload.enrollment.id,
      };
      return { ...state, items };
  }
  return state;
};

const initialCurrentUser = { loaded: false, items: [] };

const currentUserReducer = (state = initialCurrentUser, { type, payload }) => {
  switch (type) {
    case types.Action.LoggedOut:
      console.log('LoggedOut', payload);
      return { loaded: true, items: payload };
  }
  return state;
};

const mockInstruments = { loaded: false, items: [] };

const instrumentsReducer = (state = mockInstruments, { type, payload }) => {
  switch (type) {
    case types.Action.GotInstruments:
      console.log('GotInstruments', payload);
      return { loaded: true, items: payload };
  }
  return state;
};

const mockSubmissions = [];

const submissionsReducer = (state = mockSubmissions, { type, payload }) => {
  return state;
};

const mockSubmissionAttachments = [
  {
    userId: 0,
    contentS3Key: 'content/0',
  },
  {
    userId: 1,
    contentS3Key: 'content/1',
  },
];

const submissionAttachmentsReducer = (
  state = mockSubmissionAttachments,
  { type, payload }
) => {
  return state;
};

const loginStatus = {
  isStudent: false,
  isTeacher: false,
  isLoggedOut: true,
};

const loginReducer = (state = loginStatus, { type, payload }) => {
  switch (type) {
    case types.REMEMBER_LOGIN:
      return payload;
  }
  return state;
};

// stubbing out pages
// ✅ Login user
// ✅ Logout user
// ✅ Teacher creates course
// ✅ Teacher uploads csv to bulk create students for given course (just an option on the add/edit course)
// ✅ Teacher List all “pieces”
// ✅ Teacher list all Activities for a piece
// ✅ Teacher un/assign piece to course
// ✅ Teacher view submissions (incl non-submissions?) for an activity
// ✅ Teacher grade/mark submission
// ✅ Teacher export grades for all students in a course for all assignments in that course
// ✅ Student list all pieces assigned to their course
// ✅ Student list all activities for a piece (assigned in their course)
// ✅ Student view/show activity
// ✅ Student submit assignment (create submission?)
// ✅ Student re-submit assignment (just create another submission? Edit existing?)

const selectedCourseInfo = {};

const selectedCourseReducer = (
  state = selectedCourseInfo,
  { type, payload }
) => {
  switch (type) {
    case types.SELECT_COURSE:
      // console.log(types.LOGGED_IN, payload);
      return {
        ...selectedCourseInfo,
        selectedCourseId: payload,
      };
  }
  return state;
};

// COMBINED REDUCERS
const reducers = {
  // counter: counterReducer,
  // timer: timerReducer,
  assignments: assignmentsReducer,
  activities: activitiesReducer,
  // activityTypes: activityTypesReducer,
  pieces: piecesReducer,
  // composers: composersReducer,
  // users: usersReducer,
  // courses: coursesReducer,
  enrollments: enrollmentsReducer,
  instruments: instrumentsReducer,
  roster: rosterReducer,
  currentUser: currentUserReducer,
  // submissions: submissionsReducer,
  // submissionAttachments: submissionAttachmentsReducer,
  // loginStatus: loginReducer,
  // selectedCourse: selectedCourseReducer,
};

export default combineReducers(reducers);
