import { Note } from './../models/note.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private collectionName = 'notes';

  constructor(private angularFireStore: AngularFirestore) {}

  getNotes(): Observable<Note[]> {
    return this.angularFireStore
      .collection<Note>(this.collectionName)
      .snapshotChanges()
      .pipe(
        map((response) =>
          response.map((note) => {
            const id = note.payload.doc.id;
            const data = note.payload.doc.data();
            return { id, ...data };
          })
        )
      );
  }

  getNote(noteId: string): Observable<Note> {
    return this.angularFireStore
      .collection(this.collectionName)
      .doc<Note>(noteId)
      .snapshotChanges()
      .pipe(
        map((a) => {
          const id = a.payload.id;
          const data = a.payload.data();
          return { id, ...data };
        })
      );
  }

  addNote(note: Note) {
    return this.angularFireStore
      .collection(this.collectionName)
      .add({ ...note });
  }

  updateNote(id: string, note: Note): Promise<void> {
    return this.angularFireStore
      .collection(this.collectionName)
      .doc<Note>(id)
      .update(note);
  }

  deleteNote(id: string): Promise<void> {
    return this.angularFireStore
      .collection(this.collectionName)
      .doc(id)
      .delete();
  }
}
