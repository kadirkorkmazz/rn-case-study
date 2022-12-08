import axios from 'axios';

interface IProfile {}

export function getNewUserData() {
  return new Promise<any>((resolve, reject) => {
    const url = `https://randomuser.me/api/`;
    axios
      .get(url)
      .then((resp) => resolve(resp.data))
      .catch((err) => {
        reject(err);
      });
  });
}
