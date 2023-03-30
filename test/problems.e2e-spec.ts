import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm'
import { Problem } from './../src/problems/entities/problem.entity';
import { CreateProblemDto } from './../src/problems/dto/create-problem.dto';

describe('ProblemController (e2e)', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  let problemRepository: Repository<Problem>
  let connection: Connection

  beforeEach(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    problemRepository = moduleFixture.get(getRepositoryToken(Problem))

    connection = moduleFixture.get(Connection)
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
        // problemRepository.query("DELETE FROM problem")
        await moduleFixture.close()
    })


    describe('GET Problems', () => {
        it('should retrieve all problems (GET)', async () => {
            
            // Arrange
            await Promise.all([
                await problemRepository.insert(new CreateProblemDto('Broken toilet', 'Cannot flush')),

                await problemRepository.insert(new CreateProblemDto('Broken toilet', 'Water is running constantly'))
            ]);


            // Act
            const {body}: {body: Problem[]} = await request(app.getHttpServer())
                            .get('/problems')
                            .expect(200)

            // Assert (expect)          
            expect(body.length).toEqual(2);
            expect(body[0].description).toEqual('Cannot flush');
        });
    })


    describe('POST problems', () => {
        it('should create a new problem (POST)', async () => {
          const problem = new CreateProblemDto('Broken sink', 'No water');
          
          const {body}: {body: Problem} = await request(app.getHttpServer())
            .post('/problems')
            .send(problem)
            .expect(201)
            
            expect(body.description).toEqual('No water');
        });
    })

  afterAll(() => {
    app.close();
  });
});
