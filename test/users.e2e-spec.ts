// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { AppModule } from './../src/app.module';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Connection, Repository } from 'typeorm'
// import { Problem } from './../src/problems/entities/problem.entity';
// import { CreateProblemDto } from './../src/problems/dto/create-problem.dto';
// import { User } from 'src/users/users.service';

// describe('ProblemController (e2e)', () => {
//   let app: INestApplication;
//   let moduleFixture: TestingModule;
//   let connection: Connection

//   beforeEach(async () => {
//     moduleFixture = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();

//     connection = moduleFixture.get(Connection)
//     app = moduleFixture.createNestApplication();
//     await app.init();
//   });

//   afterEach(async () => {
//         // problemRepository.query("DELETE FROM problem")
//         await moduleFixture.close()
//     })

//     describe('Login', () => {
//         it('should login successfully', async () => {
            
//             // Act
//             const {body} = await request(app.getHttpServer())
//                             .get('/auth/login')
//                             .expect(200)

//             console.log(body);
            
                        
//             // Assert (expect)          
//             // expect(body.length).toEqual(2);
//             // expect(body[0].description).toEqual('Cannot flush');
//         });
//     })


    
//   afterAll(() => {
//     app.close();
//   });
// });
