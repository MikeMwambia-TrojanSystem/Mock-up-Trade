import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './QuestionsDropdown';
import { QuestionBase }     from './Questions';
import { TextboxQuestion }  from './QuestionsTextbox';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  // TODO: make asynchronous
  getQuestions() {

    let questions: QuestionBase<any>[] = [

      /*new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),*/

      new TextboxQuestion({
        key: 'Registered Business Name',
        label: 'Regisered Business Name',
        value: ' ',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}