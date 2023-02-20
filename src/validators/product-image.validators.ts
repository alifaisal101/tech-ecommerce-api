import { FileTypeValidator, MaxFileSizeValidator } from '@nestjs/common';

export const validators = [
  new MaxFileSizeValidator({ maxSize: 1000 * 1000 * 5 }),
  new FileTypeValidator({ fileType: 'image' }),
];
