import { MomentsService } from './../../../services/moments.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'src/app/Moments';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent {
  btnText = 'Compartilhar';

  constructor(
    private momentsService: MomentsService,
    private messagesService: MessagesService,
    private router: Router
  ) {}

  async createHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    //todo

    await this.momentsService.createMoment(formData).subscribe();

    this.messagesService.add('Momento adicionado com sucesso');

    this.router.navigate(['/']);
  }
}
