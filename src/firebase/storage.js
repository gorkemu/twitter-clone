import { format } from "date-fns";
import {
  deleteObject,
  getDownloadURL as getStorageDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import { BUCKET_URL, storage } from "./firebase";

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

export async function uploadAvatar(avatar, uid) {
  const bucket = `${BUCKET_URL}/${uid}/avatar/avatar.jpg`;
  await uploadBytes(ref(storage, bucket), avatar);
  return bucket;
}

export async function getUserAvatar(uid) {
  const avatar = await getStorageDownloadURL(
    ref(storage, `${BUCKET_URL}/${uid}/avatar/avatar.jpg`)
  );
  return avatar;
}

export async function getDefaultAvatar() {
  const avatar = await getStorageDownloadURL(
    ref(storage, `${BUCKET_URL}/defaultAvatar.png`)
  );
  return avatar;
}

export function deleteImage(bucket) {
  deleteObject(ref(storage, bucket));
}
