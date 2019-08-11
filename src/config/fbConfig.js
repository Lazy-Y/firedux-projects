import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCLw8OYv70piedBNH0uYoI-as9knK93_dU',
  authDomain: 'fir-toredux.firebaseapp.com',
  databaseURL: 'https://fir-toredux.firebaseio.com',
  projectId: 'fir-toredux',
  storageBucket: 'fir-toredux.appspot.com',
  messagingSenderId: '732109372224',
  appId: '1:732109372224:web:8775ef4482d05d83',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const rrfConfig = {
  userProfile: 'users',
};
