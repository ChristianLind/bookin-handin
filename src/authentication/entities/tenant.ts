import { Problem } from 'src/problems/entities/problem.entity';
import { Role } from 'src/users/role';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    OneToMany,
    JoinColumn,
} from "typeorm"
import { UserEntity } from './user';


@Entity()
export class Tenant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
  
    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity

    @OneToMany(() => Problem, (problem) => problem.tenant)
    problem: Problem
}