# 🎓 Training and Placement Management System – Frontend

This is the frontend of the TNP (Training & Placement) Management System built using **React** and **Tailwind CSS**, integrated with **Supabase** for authentication and data fetching.

---

## 🛠 Tech Stack

- Next.js
- Supabase JS Client
- Tailwind CSS
- React Query (for fetching and caching)
- Chart.js or Recharts (for analytics)
- Cloudinary (for uploading resumes/images)

---

## 📁 Project Structure

```bash
frontend/
│
├── src/
│   ├── app/             # Routes (Dashboard, Drives, Profile, etc.)
│   │   ├── (admin)
│   │   │   ├── layout.js
│   │   │   ├── dashboard
│   │   │   │   ├── page.js
│   │   │   │   └── ...
│   │   ├── (user)
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/        # Reusable components (Navbar, Cards, Charts)
│   ├── hooks/             # Custom hooks (useSupabase, useUserStats)
│   └── lib/               # Supabase client, helpers
│
├── public/
├── .env
└── README.md
```
