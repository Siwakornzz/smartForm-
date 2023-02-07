import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';
import { DataBase } from 'src/database/database.providers';
import { LogService } from 'src/helper/services/log.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { FormDB } from './entities/form.entity';

@Injectable()
export class FormService {
  private logger = new LogService(FormService.name);
  constructor(
    @Inject('SEQUELIZE') private readonly sequelize: Sequelize,
    @Inject(DataBase.FormDB) private readonly formRepositoryModel: typeof FormDB,
  ) { }
  async create(body: CreateFormDto) {
    const tag = this.create.name;

    try {
      if (!body) throw new Error('body is required try again later !!!');
      const _create = new FormDB();
      _create.firstName = body.firstName;
      _create.lastName = body.lastName;
      _create.nickName = body.nickName;
      _create.licensePlate = body.licensePlate;
      _create.phoneNumber = body.phoneNumber;

      await _create.save();
      return _create;
    } catch (error) {
      console.error(`${tag} -> `, error);
      this.logger.error(`${tag} -> `, error);
      throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    const tag = this.findAll.name;

    try {
      const resultFindAll = await this.formRepositoryModel.findAll();
      if (!resultFindAll) throw new Error('no data found try again later');
      return resultFindAll;
    } catch (error) {
      console.error(`${tag} -> `, error);
      this.logger.error(`${tag} -> `, error);
      throw new HttpException(`${error}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} form`;
  }

  update(id: number, updateFormDto: UpdateFormDto) {
    return `This action updates a #${id} form`;
  }

  remove(id: number) {
    return `This action removes a #${id} form`;
  }
}
