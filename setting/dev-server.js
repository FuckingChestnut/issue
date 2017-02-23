import webpack from 'webpack'
import DevServer from 'webpack-dev-server'
const config = {
  entry: {
    app: ["./src/Entry.js"]
  },
  output: {
    filename: "bundle.js",
    path: "/bin",
    publicPath: "/bin"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ["babel-loader"],
      exclude: "node_modules"
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "source-map",
  devServer: {
    inline: true
  }
};
config.entry.app.unshift(
  "webpack/hot/dev-server",
  "webpack-dev-server/client?http://localhost:8080"
);
const compiler = webpack(config);
const server = new DevServer(compiler, {
  hot: true
});

server.listen(8080);