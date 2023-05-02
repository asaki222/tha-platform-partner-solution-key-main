import { Module } from '@nestjs/common';
import {HttpModule} from '@nestjs/axios';
import { CoverageController } from './coverage.controller';
import { CoverageService } from './coverage';

@Module({
  controllers: [CoverageController],
  providers: [CoverageService],
  imports: [HttpModule]
})
export class CoverageModule {}
