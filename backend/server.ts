import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as path from 'path';

import bodyParser = require('koa-bodyparser');
import hbs = require('koa-hbs');

const PORT = process.env.PORT || 8020;
const VIEWS_PATH = path.resolve(__dirname, 'views');
const LAYOUTS_PATH = path.resolve(VIEWS_PATH, 'layouts');
const DEFAULT_LAYOUT = 'default';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
    // ctx.state = { title: 'title from state'};
    await ctx.render('pages/home', { title: 'Home Page' });
});

app
    .use(bodyParser())
    .use(hbs.middleware({
        defaultLayout: DEFAULT_LAYOUT,
        layoutsPath: LAYOUTS_PATH,
        viewPath: VIEWS_PATH
    }))
    .use(router.routes())
    .listen(PORT);

process.stdout.write(`Contacts App listening on port ${PORT}`);
