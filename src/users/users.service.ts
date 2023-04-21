import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { CraeteUserDTO } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}

  async create(createCatDto: CraeteUserDTO): Promise<User> {
    const createdCat = new this.userModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
}
