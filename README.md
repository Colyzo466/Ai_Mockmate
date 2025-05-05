# Mockmate — Your AI-Powered Job Interview Coach

<div align="center">
  <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="Next.js" />
  <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="Vapi" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="Firebase" />
</div>

---

## 🚀 About Prepwise

**Mockmate** is an AI-driven platform designed to empower job seekers by simulating realistic interview scenarios using cutting-edge voice AI technology. By leveraging Vapi AI voice agents and Google Gemini’s intelligent question generation, Prepwise helps candidates refine their communication skills, sharpen technical knowledge, and build confidence — all from the comfort of their own devices.

Whether you're just starting your career or aiming for a senior position, Prepwise is your smart companion for interview success.

---

## 💡 Key Features

- 🎤 **AI-Powered Voice Interviews**  
  Simulate authentic interview conversations with AI voice agents powered by Vapi.

- 🔧 **Customizable Interview Scenarios**  
  Tailor interview sessions by role, experience level, and desired tech stack.

- 📊 **Real-Time Feedback and Insights**  
  Receive instant analysis of:
  - Communication effectiveness  
  - Technical knowledge  
  - Problem-solving ability  
  - Confidence and clarity

- 📈 **Progress Tracking Dashboard**  
  Manage and review all past interviews in a streamlined, intuitive dashboard.

- 💻 **Modern & Responsive UI**  
  Built with Tailwind CSS and Next.js to ensure a sleek user experience across all devices.

---

## 🧑‍💻 Tech Stack

- **Next.js** — Fast, scalable React framework for building dynamic interfaces.  
- **Firebase** — Robust backend services for authentication and real-time data storage.  
- **Tailwind CSS** — Utility-first CSS for modern and responsive design.  
- **Vapi AI** — Voice AI engine for interactive, voice-based interview simulations.  
- **Google Gemini** — AI-powered question generation tailored to roles and industries.  
- **Zod** — Schema validation for reliable type-safe development.

---

## ⚡ Getting Started

### Prerequisites

Make sure you have the following tools installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Colyzo466/Ai_Interview_Provider.git
   cd Ai_Interview_Provider
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:  
Create a `.env.local` file in the root directory and add the following:

   ```bash
   NEXT_PUBLIC_VAPI_WEB_TOKEN=
   NEXT_PUBLIC_VAPI_WORKFLOW_ID=
   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=
   FIREBASE_PROJECT_ID=
   FIREBASE_CLIENT_EMAIL=
   FIREBASE_PRIVATE_KEY=
   ```

4. Launch the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:  
   `http://localhost:3000`

---

## 📂 Project Structure

```
├── app/
│   ├── api/
│   │   └── vapi/
│   │       └── generate/
│   │           └── route.ts
│   ├── (root)/
│   │   ├── interview/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── feedback/
│   │   │           └── page.tsx
├── components/
│   ├── Agent.tsx
│   ├── DisplayTechIcons.tsx
│   └── ui/
├── lib/
│   ├── actions/
│   │   ├── auth.action.ts
│   │   └── general.action.ts
│   ├── utils.ts
├── firebase/
│   ├── admin.ts
│   └── client.ts
├── public/
│   └── assets/
├── types/
│   └── index.d.ts
```

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

We welcome contributions from developers of all skill levels!  
If you'd like to improve Prepwise, feel free to submit issues or open a pull request.

---

## 📬 Contact

For questions, feedback, or collaboration opportunities, please reach out:

- 📧 **Email:** colyzo466@gmail.com  
- 💻 **GitHub:** [Colyzo466](https://github.com/Colyzo466)

---

**Mockmate** — Empowering you to ace your next interview with confidence.
