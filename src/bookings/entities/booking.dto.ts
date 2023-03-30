export class BookingDto {
    id?: number
    name: string
    numberOfPeople: number;
    date: Date
    phone: string;
    email: string;
    comment: string;

    constructor(name: string, numberOfPeople: number, date: Date, 
        phone: string, email: string, comment: string, id?: number) {
            this.name = name;
            this.numberOfPeople = numberOfPeople;
            this.date = date;
            this.phone = phone;
            this.email = email;
            this.comment = comment;
            this.id = id;
    }
}