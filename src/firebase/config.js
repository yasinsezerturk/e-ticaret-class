//// burada google firebase ile etkileşime buradan girilecek.
////firebase ile etkileşime geçildi

import { initializeApp } from "firebase/app";
//authentication işlemleri için(kullanıcı kaydı)
import {getAuth} from "firebase/auth" 
//firestore database erişimi için 
import {getFirestore} from "firebase/firestore"
//storage erişimi için (resim kayıt yeri)
import {getStorage} from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyCk_BBJfjtb8eX4MryNk5hlbpjFfZXd-Hw",
  authDomain: "e-ticaret-class-3da97.firebaseapp.com",
  projectId: "e-ticaret-class-3da97",
  storageBucket: "e-ticaret-class-3da97.appspot.com",
  messagingSenderId: "960847830586",
  appId: "1:960847830586:web:a4be35d5c8565600471f03"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);
export const storage=getStorage(app);

export default app;