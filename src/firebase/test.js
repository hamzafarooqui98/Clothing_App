import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('pjcLu2waZOSwMHhPbNTC').collection('cartItems').doc('61QzSgYm6pxe8vMJK6V8');
firestore.doc('/users/pjcLu2waZOSwMHhPbNTC/cartItems/61QzSgYm6pxe8vMJK6V8');
firestore.collection('/users/pjcLu2waZOSwMHhPbNTC/cartItems');