// import { Test, TestingModule } from '@nestjs/testing';
// import { INestApplication } from '@nestjs/common';
// import * as request from 'supertest';
// import { AppModule } from './../src/app.module';
// import { BookingDto } from '../src/bookings/entities/booking.dto';
// import { Booking } from './../src/bookings/entities/booking.entity';
// import { getRepositoryToken } from '@nestjs/typeorm';
// import { Connection, Repository } from 'typeorm'

// describe('BookingController (e2e)', () => {
//   let app: INestApplication;
//   let moduleFixture: TestingModule;
//   let bookingRepository: Repository<Booking>
//   let connection: Connection

//   beforeEach(async () => {
//     moduleFixture = await Test.createTestingModule({
//       imports: [AppModule],
//     }).compile();

//     bookingRepository = moduleFixture.get(getRepositoryToken(Booking))

//     connection = moduleFixture.get(Connection)
//     app = moduleFixture.createNestApplication();
//     await app.init();
//   });

//   afterEach(async () => {
//         await connection.dropDatabase()
//         await connection.runMigrations()
//         await moduleFixture.close()
//     })


//     describe('GET Bookings', () => {
//         it('should retrieve all bookings (GET)', async () => {
            
//             // Arrange
//             await Promise.all([
//                 await bookingRepository.insert(new BookingDto('Nikolaj', 2, 
//                     new Date(2023, 0, 15), '12345667', 'nikolaj@nikolaj.dk', 'We eat a lot')),

//                 await bookingRepository.insert(new BookingDto('Olga', 2, 
//                     new Date(2023, 0, 15), '12345667', 'olga@olga.dk', 'Table by the window')),

//                 await bookingRepository.insert(new BookingDto('Emilie', 5, 
//                     new Date(2023, 0, 15), '12345667', 'emilie@emilie.dk', 'One vegetarian')),
//             ]);


//             // Act
//             const {body}: {body: Booking[]} = await request(app.getHttpServer())
//                             .get('/bookings')
//                             .expect(200)

//             // Assert (expect)          
//             expect(body.length).toEqual(3);
//             expect(body[0].comment).toEqual('We eat a lot');
//         });
//     })


//     describe('POST bookings', () => {
//         it('should create a new valid booking (POST)', async () => {
//           const booking = new BookingDto('Christian', 5, new Date(), '12345678', 
//               'kirs@cphbusiness.dk', 'We are alergic to nuts');
          
//           const {body} = await request(app.getHttpServer())
//             .post('/bookings')
//             .send(booking)
//             .expect(201)
            
//             expect(body.name).toEqual('Christian');
//         });
//     })

//   afterAll(() => {
//     app.close();
//   });
// });
