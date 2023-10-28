

const songs = () => {
  try {
    const rawData = readFileSync('songs-example.json');
    const jsonData = JSON.parse(rawData);
    return jsonData;
  } catch (error) {
    console.error('Error exporting data:', error);
    return null;
  }
};

export default {
    songs
}