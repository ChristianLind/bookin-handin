import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { Booking } from './entities/booking.entity';
import { BookingDto } from './entities/booking.dto';

@Controller('bookings')
export class BookingsController {
    constructor(private bookingService: BookingsService) {}

    @Get() 
    getAll(): Promise<Booking[]> {
        return this.bookingService.findAll();
    }
    @Post() 
    create(@Body() bookingDto: BookingDto) : Promise<Booking> {
        return this.bookingService.create(bookingDto);
    }
}
