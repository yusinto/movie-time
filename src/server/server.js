import Express from 'express';
import Webpack from 'webpack';
import WebpackConfig from '../../webpack.config.dev';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebPackHotMiddleware from 'webpack-hot-middleware';
import graphqlHttp from 'express-graphql';
import schema from '../graphql/schema';

const PORT = 3000;
const app = Express();
const webpackCompiler = Webpack(WebpackConfig);
const htmlString = `<!DOCTYPE html>
    <html>
         <head>
            <title>Movie Time!</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
          </head>
          <body>
            <div id="reactDiv" />
            <script src="/dist/bundle.js"></script>
          </body>
    </html>`;

app.use(WebpackDevMiddleware(webpackCompiler, {
    publicPath: WebpackConfig.output.publicPath,
    noInfo: true,
    quiet: false
}));
app.use(WebPackHotMiddleware(webpackCompiler));
app.use(Express.static('public'));
app.use('/graphql', graphqlHttp({schema: schema, pretty: true}));

app.use((req, res) => {
    //TODO: Server side rendering intentionally left out due to time constraints
    res.end(htmlString);
});

app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});