import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CoverageService } from '../src/coverage/coverage';
import * as request from 'supertest';
import { person } from './fixtures/person';
import { AppModule } from '../src/app.module';
import { CreateCoverageDto } from '../src/coverage/coverage.dto';;
import { plainToClass } from 'class-transformer';


describe('CoverageController (e2e)', () => {
    let app: INestApplication;
    let coverageService: CoverageService;

    beforeEach(async()=>{
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
          }).compile();
      
        app = moduleFixture.createNestApplication();
        await app.init();
        coverageService = moduleFixture.get<CoverageService>(CoverageService);
    })

    afterAll(async () => {
        await app.close();
      });

    describe('/check_vob (POST)',  ()=>{
      const coverageDto = plainToClass(CreateCoverageDto, person);
      it('should return { is_valid: true } for valid coverage', async () => {
        const testReturn = true
          jest.spyOn(coverageService, 'request').mockImplementation(() => Promise.resolve(testReturn));
          const res = await request(app.getHttpServer()).post('/check_vob').send(coverageDto);
            expect(res.status).toBe(201);
            expect(res.body).toEqual({ is_valid: true });
        })

      it('should return an error message if sent no info', async()=>{
        const emptyDto = new CreateCoverageDto();
        const res = await request(app.getHttpServer()).post('/check_vob').send(emptyDto);
        expect(res.status).toBe(400)
      } )
    } )
    
})