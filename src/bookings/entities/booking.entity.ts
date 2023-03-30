import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Booking {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    numberOfPeople: number;

    @Column()
    date: Date

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    comment: string;
}