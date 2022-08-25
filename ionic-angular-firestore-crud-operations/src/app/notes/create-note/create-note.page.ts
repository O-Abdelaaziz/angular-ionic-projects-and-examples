import { Subscription } from 'rxjs';
import { NoteService } from './../../services/note.service';
import { Router } from '@angular/router';
import { Note } from './../../models/note.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.page.html',
  styleUrls: ['./create-note.page.scss'],
})
export class CreateNotePage implements OnInit {
  public noteForm: FormGroup;

  constructor(
    private noteService: NoteService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.noteForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      priority: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {}

  onSubmit() {
    if (this.noteForm.invalid) {
      return;
    }

    this.loadingController
      .create({
        message: 'Creating note...',
      })
      .then((loadingElement) => {
        loadingElement.present();
      });

    const note: Note = Object.assign({}, this.noteForm.value);
    this.noteService.addNote(note).then((_) => {
      this.loadingController.dismiss();
      this.noteForm.reset();
      this.router.navigate(['/home']);
    });
  }

  onReset() {
    this.noteForm.reset();
  }
}
