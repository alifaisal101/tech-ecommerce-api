import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { map, Observable } from 'rxjs';

interface Dto {
  new (...args: any[]): { [$key: string]: any };
}

export function Serialize(dto: Dto) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: Dto) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | any {
    return next.handle().pipe(
      map((data: object | object[]) => {
        return plainToClass(this.dto, data, {});
      }),
    );
  }
}
