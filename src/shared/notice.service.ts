import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Notice, Comment } from '../app/notice'
import * as firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})

export class NoticeService {

  constructor(private firestore: AngularFirestore) { }

  // searchNoticeList(start, end) {
  //   return this.getNoticeList().subscribe(() => {
  //   })
  // }

  getNotice(noticeId: string) {
    return this.firestore
      .collection('notices')
      .doc<Notice>(noticeId)
      .valueChanges()
  }

  getNoticeList(row?: Date) {
    return this.firestore
      .collection('notices', ref => ref
        .orderBy('time')
        .startAfter(row || 0)
        .limit(3))
      .snapshotChanges()
  }

  getComments(noticeId: string) {
    return this.firestore
      .collection('notices')
      .doc(noticeId)
      .collection('comments')
      .snapshotChanges();
  }

  createNotice(notice: Notice) {
    console.log('created notice')
    return this.firestore.collection('notices').add({
      ...notice,
      time: firebase.default.firestore.FieldValue.serverTimestamp()
    });
  }

  createComment(comment: Comment, noticeId: string) {
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

  updateNotice(notice: Notice, noticeId: string) {
    this.firestore
      .collection('notices')
      .doc(noticeId)
      .update({
        // time: firebase.default.firestore.FieldValue.serverTimestamp(),
        ...notice
      })
      .then(() => console.log('notice update complete'))
    }

  deleteNotice(noticeId: string) {
    this.firestore
      .collection('notices')
      .doc(noticeId)
      .delete()
      .then(() => console.log('notice deleted successfully'));
    }
    
    deleteComment(noticeId: string, commentId: string) {
      this.firestore
      .collection('notices')
      .doc(noticeId)
      .collection('comments')
      .doc(commentId)
      .delete()
      .then(() => console.log('comment deleted successfully'));
  }

}