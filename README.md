
# Hussain Syed — Portfolio (Next.js + Tailwind)

## Local Setup
```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deploy to Vercel
1. Push this folder to a new GitHub repo.
2. Create a Vercel account (https://vercel.com) and click **New Project** → Import the repo.
3. Accept defaults. Build & deploy.
4. Add a custom domain (optional).

## Where to replace content
- Contact email + LinkedIn: `app/page.js` (Contact section)
- Resume PDF: replace `public/HussainSyed_PEng_PMP_2025.pdf`
- Case study PDFs: replace files in `public/case-studies/`
- Images: replace placeholders in the Hero and Project cards (use `public/` folder and update `<img>` or background)

## Notes
- Tech: Next.js 14 (App Router) + Tailwind CSS 3
- No server code needed. Pure static deployment.
