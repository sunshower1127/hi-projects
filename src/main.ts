import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    // express에서 app.use()로 middleware를 사용하는 것과 비슷

    new ValidationPipe({
      // 이거 쓰려면 class-validator, class-transformer 설치해야함

      whitelist: true, // 쓸데 없는 속성 보내면 그 속성 버림
      forbidNonWhitelisted: true, // whiltelist에서 한단계 더 나아가서, 에러띄움
      transform: true, // url에서 받은 string값을 type에 맞게 변환해줌.
    }),
  );

  await app.listen(3000);
}
bootstrap();
