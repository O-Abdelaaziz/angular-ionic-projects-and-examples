import { NoteService } from './../../services/note.service';
import { Note } from './../../models/note.model';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.page.html',
  styleUrls: ['./list-note.page.scss'],
})
export class ListNotePage implements OnInit, OnDestroy {
  public notes: Note[] = [];
  public isLoading = false;
  private subscription: Subscription;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.onGetNotesList();
  }

  ionViewWillEnter() {
    this.onGetNotesList();
  }

  onGetNotesList() {
    this.isLoading = true;

    this.noteService.getNotes().subscribe((response) => {
      this.notes = response;
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
