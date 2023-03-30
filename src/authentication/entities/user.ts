import { Role } from 'src/users/role';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Tenant } from './tenant';
import { BoardMember } from './boardmember';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(type => Tenant, tenant => tenant.user)
	tenant: Tenant | null

  @OneToOne(type => BoardMember, boardMember => boardMember.user)
  boardmember: BoardMember | null

  @Column({
    type:"enum", 
    enum: Role, 
    default: [Role.User]
  })
  role: Role;

  constructor(username: string, password: string) {
    
  }
}