import songs from "/src/songs.js";
export const allSongs = songs;

export const user = {
  firstName: "name",
  lastName: "surname",
  studentCode: "CODE1234",
  loggedAtTimestamps: [],
  loggedInStatus: false,
};

export function login() {
  user.loggedInStatus = true;
  const now = new Date();
  const timestamp = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} - ${now.getHours()}:${now.getMinutes()}`;
  user.loggedAtTimestamps.push(timestamp);
}

export function resetUser() {
  user.firstName = "name";
  user.lastName = "surname";
  user.studentCode = "CODE1234";
  user.loggedAtTimestamps = [];
  user.loggedInStatus = false;
}

export function updateUser(user) {
  store.state.user = user;
}
export default {
  allSongs,
  user,
  login,
  resetUser,
  updateUser,
};