# 🌐 Network

## Description
Network is a full-stack social media application built with Next.js. It includes core features such as authentication, post creation with text and images, likes, comments, notifications, suggested users, profile updates, dark mode, and a responsive modern UI design.

## 🔗Live Link
<a href="https://network-social-media.vercel.app/" target="_blank">
  Network Social Media
</a>

## Features
- 🔐 User authentication (Email/Password and Google)
- 📝 Post creation with text and image uploads
- ❤️ Like and comment on posts
- 🔔 Notifications for likes, comments, and follows
- 👥 Suggested users to follow
- 🛠️ Profile management (update and delete)
- 🌙 Dark mode support
- 📱 Responsive design for mobile and desktop

## Technologies Used
- **Frontend**: React, Next.js
- **Styling**: Tailwind CSS, Shadcn UI
- **Authentication**: Clerk
- **Database**: Neon (PostgreSQL)
- **ORM**: Prisma
- **Image Uploads**: Uploadthing
- **Deployment**: Vercel

## Prerequisites
To follow along with this project, you should have a basic understanding of:
- ⚛️ React
- 💻 JavaScript/TypeScript
- 📚 Next.js

All services used in this project have generous free plans, so you won't need to pay anything to get started.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/network.git
   cd network
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add your environment variables in the below manner:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=***
   CLERK_SECRET_KEY=***
   DATABASE_URL=***
   UPLOADTHING_TOKEN=***
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage
- 🆕 Sign up or log in using Google or email/password.
- 🖼️ Create posts with text and images.
- 👍 Like and comment on posts.
- 🔧 Manage your profile and view notifications.

## Contributing
🤝 Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
📜 This project is licensed under the MIT License.

## Contact
📧 For any questions or support, feel free to reach out to me at [sashijut@gmail.com].
