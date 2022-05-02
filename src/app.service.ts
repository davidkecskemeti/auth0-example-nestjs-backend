import { Todo } from './todo.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTodos(): Todo[] {
    return [
      { id: 1, title: 'Learn Typescript', completed: true },
      { id: 2, title: 'Learn Express', completed: false },
      { id: 3, title: 'Learn Node', completed: false },
    ];
  }
}
