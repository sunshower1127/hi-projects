/**
 * DTO(Data Transfer Object) -> 전송하거나 받는 데이터의 형식을 정의하는 객체
 */
import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true }) // 배열에 쓰려면 써야하는듯
  readonly genres: string[];
}
