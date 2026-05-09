# 📱 Telecare AI — Sign In Screen

A pixel-perfect React Native implementation of a Dribbble-inspired mobile authentication UI, built as part of the **Mobile Development Cohort** assignment.

---

## 🔗 Design Reference

[Dribbble — Osler AI Telehealth App UI](https://dribbble.com/shots/24783022-osler-AI-Telehealth-Telemedicine-App-Sign-In-Sign-Up-UI)

---

## 📸 App Screenshot

Login-Page/assets/images/sign in.jpeg

> _Run the app and take a screenshot, then replace this section with your image._

---

## ✨ Features

- ✅ App logo (green plus icon)
- ✅ Heading & subheading
- ✅ Email input field with icon & focus state
- ✅ Password input field with show/hide toggle
- ✅ Forgot Password link
- ✅ Sign In button using `Pressable` with press animation
- ✅ Social login buttons (Facebook, Google, Instagram) with deep linking
- ✅ Sign Up navigation link
- ✅ Keyboard avoiding behavior (iOS & Android)
- ✅ Responsive layout for all mobile screen sizes

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React Native | Core framework |
| Expo | Development environment |
| `@expo/vector-icons` | Ionicons, FontAwesome, AntDesign |
| `react-native-safe-area-context` | Safe area handling |

---

## 📦 Installation & Setup

### Prerequisites
- Node.js installed
- Expo CLI installed globally

```bash
npm install -g expo-cli
```

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# 2. Navigate into the project
cd your-repo-name

# 3. Install dependencies
npm install

# 4. Install safe area context
npm install react-native-safe-area-context

# 5. Start the Expo development server
npx expo start
```

Then scan the QR code with the **Expo Go** app on your phone.

---

## 📁 Project Structure

```
├── app/
│   └── (tabs)/
│       └── Loginpage.tsx    # Main Sign In screen
├── assets/
│   └── screenshot.png       # App screenshot (add after running)
├── README.md
└── package.json
```

---

## 🎨 Design Decisions

- **Color**: `#7AC142` (green) — matches the original Dribbble design
- **Components**: Only core React Native components used (no UI libraries)
- **Pressable**: Used throughout for consistent press feedback with `scale` animation
- **Deep Linking**: Social buttons open native apps if installed, fallback to browser
- **Focus States**: Input borders turn green on focus for better UX

---

## 👨‍💻 Author

**Dipanshu Gupta**
- Instagram: [@iamdipanshugupta](https://www.instagram.com/iamdipanshugupta/)

---

## 📅 Assignment Details

| | |
|---|---|
| **Cohort** | Mobile Development |
| **Start** | May 9, 2026 |
| **Due** | May 10, 2026 |
| **Task** | Recreate Dribbble UI in React Native |