import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { ClassTransformOptions, plainToClass } from 'class-transformer';
import { map, Observable } from 'rxjs';

interface Dto {
  new (...args: any[]): { [$key: string]: any };
}

export function Serialize(dto: Dto, options?: ClassTransformOptions) {
  return UseInterceptors(new SerializeInterceptor(dto, options || {}));
}

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: Dto, private options: ClassTransformOptions) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | any {
    return next.handle().pipe(
      map((data: object | object[]) => {
        return plainToClass(this.dto, data, this.options);
      }),
    );
  }
}
