import { Subscription } from 'rxjs';
import { NoteService } from './../../services/note.service';
import { Note } from './../../models/note.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.page.html',
  styleUrls: ['./display-note.page.scss'],
})
export class DisplayNotePage implements OnInit, OnDestroy {
  public note: Note;
  public isLoading = false;
  private subscription: Subscription;
  constructor(
    private noteService: NoteService,
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.note = new Note();
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (!params.has('id')) {
        this.router.navigate(['/home']);
        return;
      }
      this.isLoading = true;
      this.noteService
        .getNote(this.activatedRoute.snapshot.params.id)
        .subscribe(
          (data) => {
            this.note = data;
            this.isLoading = false;
          },
          (error) => {
            this.alertController
              .create({
                header: 'An Error occurred!',
                message: 'Note could not be fetched. please tray again later.',
                buttons: [
                  {
                    text: 'okay',
                    handler: () => {
                      this.router.navigateByUrl('/home');
                    },
                  },
                ],
              })
              .then((alertElement) => {
                alertElement.present();
              });
          }
        );
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
