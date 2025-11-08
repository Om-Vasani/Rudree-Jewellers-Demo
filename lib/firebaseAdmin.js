    // Optional server-side Firebase admin setup (for Cloud Functions or serverless admin tasks)
import admin from 'firebase-admin'

if (!admin.apps.length) {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_JSON) : null
  if (serviceAccount) {
    admin.initializeApp({ credential: admin.credential.cert(serviceAccount), storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET })
  } else {
    try { admin.initializeApp() } catch(e) { /* ignore - may be running in client env */ }
  }
}

export const adminDB = admin.firestore ? admin.firestore() : null
export const adminStorage = admin.storage ? admin.storage().bucket() : null
