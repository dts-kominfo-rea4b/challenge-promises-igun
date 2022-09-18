const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emotion) => {
 let movieList = [].concat(await promiseTheaterIXX(), await promiseTheaterVGC());
 
 return movieList.filter((movie) => movie.hasil === emotion).length;
};

module.exports = {
  promiseOutput,
};
