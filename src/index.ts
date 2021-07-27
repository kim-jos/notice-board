
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { Client } from '@elastic/elasticsearch'

admin.initializeApp(functions.config().firebase);
const env = functions.config();

const auth = {
    username: env.elasticsearch.username,
    password: env.elasticsearch.password,
};

const client = new Client({
    node: env.elasticsearch.url,
    auth: auth
})

exports.createPost = functions.firestore
    .document('notices')
    .onCreate( async (snap, context) => {
        await client.index({
            index: 'notices',
            type: '_doc',
            id: snap.id,
            body: snap.data()
        })
    })

exports.updatePost = functions.firestore
    .document('notices')
    .onUpdate( async (snap, context) => {
        await client.update({
            index: 'notices',
            type: '_doc',
            id: context.params.CityId,
            body: snap.after.data()
        })
    });

exports.deletePost = functions.firestore
    .document('notices')
    .onDelete( snap => {
        client.delete({
            index: 'notices',
            type: '_doc',
            id: snap.id,
        })
    });