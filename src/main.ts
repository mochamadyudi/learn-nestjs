import {NestFactory} from '@nestjs/core';
import {NestExpressApplication} from '@nestjs/platform-express';
import {join} from 'path';
import {AppModule} from './app.module';

import * as hbs from 'hbs';

async function bootstrap() {

    /**
     * FOR VIEW ENGINE
     */

    const app = await NestFactory.create<NestExpressApplication>(AppModule)

    /**
     * FOR REST API
     */
    // const app = await NestFactory.create(AppModule);

    app.useStaticAssets(join(__dirname, "..", "public"))

    app.setBaseViewsDir(join(__dirname, "..", "views"))
    hbs.registerPartials(join(__dirname, '..', 'views',"partials"));
    app.setViewEngine('hbs')
    app.set('view options', {layout: 'index'});

    // app.setViewEngine({
    //     engine: {
    //         handlebars: import 'hbs',
    //     },
    //     templates: join(__dirname, '..', 'views'),
    // });

    await app.listen(process.env.APP_PORT || 5002);
}

bootstrap();
