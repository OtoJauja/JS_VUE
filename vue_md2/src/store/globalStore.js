export const state = {
    all_songs: require('./songs-example.json'),
    user: {
      first_name: 'user',
      last_name: 'surname',
      student_code: 'CODE1234',
      logged_at: [],
      logged_in: false,
    },
  };
  
  export const mutations = {
    login(state) {
      state.user.logged_in = true;
      const timestamp = new Date().toLocaleString('fi-FI');
      state.user.logged_at.push(timestamp);
    },
    logout(state) {
      state.user.logged_in = false;
      state.user.logged_at = [];
    },
  };