import { Test, TestingModule } from '@nestjs/testing';
import { CoverageService } from './coverage';
import { CoverageController } from './coverage.controller';
import { HttpModule } from '@nestjs/axios';


describe('Coverage', () => {
  let provider: CoverageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoverageService],
      controllers: [CoverageController],
      imports:[HttpModule]
    }).compile();

    provider = module.get<CoverageService>(CoverageService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
