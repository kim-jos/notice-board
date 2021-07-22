import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Notice } from '../app/notice'
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor(private firestore: AngularFirestore) { }

  getNotice(noticeId: string) {
    return this.firestore
      .collection('notices')
      .doc(noticeId)
      .valueChanges()
  }

  getNoticeList() {
    return this.firestore.collection('notices').snapshotChanges();
  }

  getComments(noticeId: any) {
    return this.firestore
      .collection('notices')
      .doc(noticeId)
      .collection('comments')
      .snapshotChanges();
  }

  createNotice(notice: any) {
    console.log('created notice')
    return this.firestore.collection('notices').add({
      ...notice,
      time: firebase.default.firestore.FieldValue.serverTimestamp()
    });
  }

  createComment(comment: any, noticeId: any) {
    console.log('comment added')
    return this.firestore
      .collection('notices')
      .doc(noticeId)
      .collection('comments')
      .add({
        ...comment,
        time: firebase.default.firestore.FieldValue.serverTimestamp()
      })
  }

  updateNotice(notice: Notice, noticeId: any) {
    this.firestore
      .collection('notices')
      .doc(noticeId)
      .update({
        // time: firebase.default.firestore.FieldValue.serverTimestamp(),
        ...notice
      })
      .then(() => console.log('update complete'))
  }

  deleteNotice(noticeId: string) {
    this.firestore
      .collection('notices')
      .doc(noticeId)
      .delete()
      .then(() => console.log('deleted successfully'));
  }
}
