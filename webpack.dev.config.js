module.exports = {
  entry:{
    index:'./src/index.js'
  },
  output:{
    path:__dirname,
    filename: './release/bundle.js'
  },
  mode:'development'
}