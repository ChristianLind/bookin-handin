import { Role } from 'src/users/role';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm"
import { UserEntity } from './user';


@Entity()
export class BoardMember {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone: string;
  
    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity

  constructor(user: UserEntity, phone: string) {
  
  }
}