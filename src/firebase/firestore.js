import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import { getDownloadURL } from "./storage";
const TWEETS_COLLECTION = "tweets";

export function addTweetWithImage(uid, content, createdAt, imageBucket) {
  addDoc(collection(db, TWEETS_COLLECTION), {
    uid,
    content,
    createdAt,
    imageBucket,
  });
}

export function addTweetWithoutImage(uid, content, createdAt) {
  addDoc(collection(db, TWEETS_COLLECTION), {
    uid,
    content,
    createdAt,
  });
}

export async function getTweets(uid, setTweets) {
  const tweetsQuery = query(
    collection(db, TWEETS_COLLECTION),
    where("uid", "==", uid),
    orderBy("createdAt", "desc")
  );

  const unsubscribe = onSnapshot(tweetsQuery, async (snapshot) => {
    let allTweets = [];
    for (const documentSnapshot of snapshot.docs) {
      const tweet = documentSnapshot.data();
      allTweets.push({
        ...tweet,
        createdAt: tweet["createdAt"],
        id: documentSnapshot.id,
        imageUrl: await getDownloadURL(tweet["imageBucket"]),
      });
    }
    setTweets(allTweets);
  });
  return unsubscribe;
}

export function deleteTweet(id) {
  deleteDoc(doc(db, TWEETS_COLLECTION, id));
}
