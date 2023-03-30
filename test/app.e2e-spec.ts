import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { UsersService } from 'src/users/users.service';
import { BoardMember } from 'src/authentication/entities/boardmember';
import { UserEntity } from 'src/authentication/entities/user';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    usersService = moduleFixture.get(UsersService);
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('Auth', () => {
    it('creating board member', async () => {
      //Arrange - setup
      const user = new UserEntity(
        'Henrik',
        'huehue'
      );

      const boardMember = new BoardMember(
        user,
        '12345678'
      );

      // Act
      const signup = await request(app.getHttpServer())
        .post('/auth/signup-boardmember')
        .send(boardMember)
        .expect(201);
      //Assert
    })
  })

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  afterAll(() => {
    app.close();
  });
});
