import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from './exports.js';

const storage = getStorage();

export const subirFileStore = async (file, imgPosts) => {
  if (!file) {
    return null;
  }

  const arquivoRef = ref(storage, `${imgPosts}/${file.name}`);
  await uploadBytes(arquivoRef, file);
  const trazerFile = getDownloadURL(arquivoRef);
  return trazerFile;
};
