import { Todo } from './todo.model';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { PermissionsGuard } from './permissions.guard';
import { Permissions } from './auth/permissions.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AuthGuard('jwt'), PermissionsGuard)
  @Permissions('read')
  @Get('/todos')
  getTodos(): Todo[] {
    return this.appService.getTodos();
  }
}
