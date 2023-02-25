import { format } from "date-fns";
import {
  getDownloadURL as getStorageDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "./firebase";

const BUCKET_URL = "gs://twitter-clone-f247f.appspot.com";

export async function uploadImage(image, uid) {
  const formattedDate = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss'Z'");
  const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
  await uploadBytes(ref(storage, bucket), image);
  return bucket;
}

export async function getDownloadURL(bucket) {
  if (bucket) {
    return await getStorageDownloadURL(ref(storage, bucket));
  } else {
    return "";
  }
}

export async function uploadAvatar(image, uid) {
  const bucket = `${BUCKET_URL}/${uid}/${avatar}/avatar.jpg`;
  await uploadBytes(ref(storage, bucket), image);
  return bucket;
}
