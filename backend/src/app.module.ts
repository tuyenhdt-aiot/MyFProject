import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/user/entities/user.entity';
import { AuthModule } from './domain/auth/auth.module';
import { dataSourceOptions } from '../database/data-source';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './domain/user/user.module';
import { TasksModule } from './domain/tasks/tasks.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path';
@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		TypeOrmModule.forRoot(dataSourceOptions),
		AuthModule,
		UserModule,
		TasksModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','uploads'),
      serveRoot: '/uploads',
    })
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
