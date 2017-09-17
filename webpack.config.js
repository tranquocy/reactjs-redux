module.exports = {
  entry: './app/app.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      reducer: 'app/reducer/reducer.js',
      store: 'app/storeConf.js',
      List: 'app/components/List.js',
      action: 'app/action.js',
      Note: 'app/components/Note.js',
      NoteForm: 'app/components/NoteForm.js'
    },
    extensions: ['*','.js','.jsx']
  },

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
