import { Subscription } from 'rxjs';
import { Note } from './../../models/note.model';
import { LoadingController, AlertController } from '@ionic/angular';
import { NoteService } from './../../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.page.html',
  styleUrls: ['./update-note.page.scss'],
})
export class UpdateNotePage implements OnInit, OnDestroy {
  public id = '';
  public noteForm: FormGroup;
  public selectedPriority: string;
  private subscription: Subscription;

  constructor(
    private noteService: NoteService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.noteForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (!params.has('id')) {
        this.router.navigate(['/home']);
        return;
      }
      this.id = params.get('id');
      this.subscription = this.noteService
        .getNote(this.activatedRoute.snapshot.paramMap.get('id'))
        .subscribe(
          (response) => {
            this.selectedPriority = response.priority;
            this.noteForm.get('title').setValue(response.title);
            this.noteForm.get('priority').setValue(response.priority);
            this.noteForm.get('content').setValue(response.content);
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

  onSubmit() {
    if (this.noteForm.invalid) {
      return;
    }

    this.loadingController
      .create({
        message: 'Updating note...',
      })
      .then((loadingElement) => {
        loadingElement.present();
      });

    const note: Note = Object.assign({}, this.noteForm.value);
    this.noteService.updateNote(this.id, note).then(() => {
      this.loadingController.dismiss();
      this.router.navigate(['/home']);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
