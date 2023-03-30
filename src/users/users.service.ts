import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardMember } from 'src/authentication/entities/boardmember';
import { Tenant } from 'src/authentication/entities/tenant';
import { UserEntity } from 'src/authentication/entities/user';
import { Repository } from 'typeorm';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  @InjectRepository(BoardMember) private boardMemberRepository: Repository<BoardMember>,
  @InjectRepository(Tenant) private tenantRepository: Repository<Tenant>) {}

    async findUserById(id: number) : Promise<UserEntity> {
        return this.userRepository.findOne({where: {id: id}});
    }

    async findOne(username: string): Promise<UserEntity> {
        const result = await this.userRepository.findOne({where: {username: username}, relations: {tenant: true}});
        console.log("findOne user service", result);
        
        return result;
    }

    async create(username: string, password: string) : Promise<User> {
        return this.userRepository.save({username, password})
    }

    async create_tenant(username: string, password: string, email: string) : Promise<Tenant> {
        const user: User = {username, password};
        
        const savedUser = await this.userRepository.save(user);
        const tenant = { email, user: savedUser }
        const savedTenant = await this.tenantRepository.save(tenant);

        return savedTenant;  
    }

    async findRole(id: number) : Promise<User> {
        const user: User = {id};

        const result = await this.tenantRepository.findOne({ 
            where: 
            {
                id: user.id
            }, relations: {
                user: true
            }
        });
        console.log("result", result);
        return result;
    }

    async create_boardMember(username: string, password: string, email: string, phone: string) : Promise<BoardMember> {
        const user: User = {username, password, phone};
        
        const savedUser = await this.userRepository.save(user);
        const boardMember = { email, user: savedUser }
        const savedBoardMember = await this.boardMemberRepository.save(boardMember);

        return savedBoardMember;
    }
}
