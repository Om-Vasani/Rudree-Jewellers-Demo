# Rudree Jewellers - Next.js theme

## Setup
1. Clone repo
2. `npm install`
3. Create `.env.local` using `.env.example`
4. Add your images to `public/images/` (make sure filenames are lowercase)
5. `npm run dev`

## Deploy
- Push to GitHub, connect repo to Vercel, deploy.
- Ensure `.env` values are set in Vercel project settings.

## Notes
- API `/api/chat` is demo echo. Replace with OpenAI in server for real AI.
- Admin writes to Firestore — secure rules before production.
