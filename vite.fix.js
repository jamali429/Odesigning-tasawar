// vite.fix.js
import crypto from 'crypto';

if (!crypto.hash) {
  crypto.hash = (algo, data) => {
    return crypto.createHash(algo).update(data).digest();
  };
}
