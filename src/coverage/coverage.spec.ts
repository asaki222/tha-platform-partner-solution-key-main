import { Test, TestingModule } from '@nestjs/testing';
import { CoverageService } from './coverage';
import { CoverageController } from './coverage.controller';

describe('Coverage', () => {
  let provider: CoverageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoverageService],
      controllers: [CoverageController]
    }).compile();

    provider = module.get<CoverageService>(CoverageService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
