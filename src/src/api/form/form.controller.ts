import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FormService } from './form.service';
import { CreateFormDto } from './dto/create-form.dto';
import { UpdateFormDto } from './dto/update-form.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('form')
@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) { }

  @Post('/createForm')
  async create(@Body() createFormDto: CreateFormDto) {
    return await this.formService.create(createFormDto);
  }

  @Get()
  findAll() {
    return this.formService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.formService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFormDto: UpdateFormDto) {
  //   return this.formService.update(+id, updateFormDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.formService.remove(+id);
  // }
}
