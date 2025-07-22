import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './common/interceptors/transform-response.interceptor';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const config = new DocumentBuilder()
		.setTitle('NestJS Application APIs')
		.setDescription('List APIs for simple NestJS Application')
		.setVersion('1.0')
		.addTag('Auth')
		.addTag('User')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalInterceptors(new TransformInterceptor());
	app.useGlobalInterceptors(new LoggerInterceptor());
	// cors // rate limit
  app.use(cookieParser());
  app.enableCors({
		origin: 'http://localhost:3000',
    credentials: true,
	});
	await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
