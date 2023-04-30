import { Module } from '@nestjs/common';
import { CoverageController } from './coverage.controller';
import { CoverageService } from './coverage';

@Module({
  controllers: [CoverageController],
  providers: [CoverageService]
})
export class CoverageModule {}
