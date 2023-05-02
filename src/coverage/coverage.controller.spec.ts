import { Test, TestingModule } from '@nestjs/testing';
import { CoverageController } from './coverage.controller';
import { CoverageService } from './coverage';
import { HttpModule } from '@nestjs/axios';

describe('CoverageController', () => {
  let controller: CoverageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoverageController],
      providers: [CoverageService],
      imports: [HttpModule]
    }).compile();

    controller = module.get<CoverageController>(CoverageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
