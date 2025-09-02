# CodeGenie - Full Stack Coding Platform

A comprehensive coding platform inspired by LeetCode, built with React.js frontend and Node.js backend. This platform allows users to solve coding problems, submit solutions, get AI assistance, and includes admin functionality for problem management.

## 🚀 Features

### For Users

- **Problem Solving**: Browse and solve coding problems with multiple difficulty levels
- **Multi-language Support**: Write solutions in JavaScript, Java, and C++
- **Real-time Code Editor**: Monaco Editor with syntax highlighting and IntelliSense
- **Test Case Execution**: Run code against visible test cases before submission
- **Submission System**: Submit solutions and get instant feedback with detailed results
- **AI Chat Assistant**: Get hints and explanations using integrated Gemini AI
- **Video Editorials**: Watch solution explanations through integrated video player
- **Submission History**: Track your progress and view past submissions
- **Problem Filtering**: Filter problems by difficulty, tags, and solved status
- **User Authentication**: Secure login/signup with JWT tokens

### For Admins

- **Problem Management**: Create, edit, and delete coding problems
- **Test Case Management**: Add visible and hidden test cases
- **Video Upload**: Upload solution videos to Cloudinary
- **User Management**: Monitor user activity and submissions
- **Reference Solutions**: Provide multiple language solutions

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Monaco Editor** - VS Code-like code editor
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **React Hook Form** - Form handling with validation
- **Axios** - HTTP client for API calls

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Redis** - In-memory caching and session storage
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Judge0 API** - Code execution and testing
- **Google Gemini AI** - AI chat assistance
- **Cloudinary** - Media storage and management

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- MongoDB database
- Redis server
- Judge0 API key
- Google Gemini API key
- Cloudinary account

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd leetcode-clone
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=3000
DB_CONNECT_STRING=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_KEY=your_jwt_secret_key
REDIS_PASS=your_redis_password
JUDGE0_KEY=your_judge0_api_key
GEMINI_KEY=your_gemini_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env.production` file in the frontend directory if needed for production builds.

### 4. Start the Application

#### Development Mode

Start the backend server:

```bash
cd backend
npm run dev
```

Start the frontend development server:

```bash
cd frontend
npm run dev
```

The application will be available at:

- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## 📁 Project Structure

```
├── backend/
│   ├── src/
│   │   ├── config/          # Database and Redis configuration
│   │   ├── controllers/     # Route handlers
│   │   ├── middleware/      # Authentication middleware
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── utils/           # Utility functions
│   │   └── index.js         # Server entry point
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── store/           # Redux store configuration
│   │   ├── utils/           # Utility functions
│   │   ├── App.jsx          # Main App component
│   │   └── main.jsx         # React entry point
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🔧 API Endpoints

### Authentication

- `POST /user/signup` - User registration
- `POST /user/login` - User login
- `POST /user/logout` - User logout
- `GET /user/checkAuth` - Check authentication status

### Problems

- `GET /problem/getAllProblem` - Get all problems
- `GET /problem/problemById/:id` - Get problem by ID
- `GET /problem/problemSolvedByUser` - Get user's solved problems
- `POST /problem/createProblem` - Create new problem (Admin)
- `DELETE /problem/deleteProblem/:id` - Delete problem (Admin)

### Submissions

- `POST /submission/run/:problemId` - Run code against test cases
- `POST /submission/submit/:problemId` - Submit solution
- `GET /submission/history/:problemId` - Get submission history

### AI Chat

- `POST /ai/chat` - Chat with AI assistant

### Video Management

- `POST /video/upload/:problemId` - Upload solution video (Admin)

## 🎯 Usage

### For Users

1. **Sign up/Login**: Create an account or login to existing account
2. **Browse Problems**: View available problems with filtering options
3. **Solve Problems**:
   - Click on a problem to open the problem page
   - Read the problem description and examples
   - Write your solution in the code editor
   - Test your code with "Run" button
   - Submit your final solution
4. **Get Help**: Use the AI chat for hints and explanations
5. **Track Progress**: View your submission history and solved problems

### For Admins

1. **Access Admin Panel**: Login with admin credentials and navigate to /admin
2. **Create Problems**: Add new coding problems with test cases
3. **Upload Videos**: Add solution explanation videos
4. **Manage Content**: Edit or delete existing problems

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS configuration
- Input validation and sanitization
- Role-based access control
- Secure cookie handling

## 🚀 Deployment

### Backend Deployment

1. Set up MongoDB Atlas or self-hosted MongoDB
2. Configure Redis instance
3. Set environment variables
4. Deploy to platforms like Heroku, Railway, or DigitalOcean

### Frontend Deployment

1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the `dist` folder to platforms like Vercel, Netlify, or AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🐛 Known Issues

- Video playback may require additional browser permissions
- Code execution timeout is limited by Judge0 API constraints
- Large file uploads may require additional configuration

## 🔮 Future Enhancements

- [ ] Contest mode with time-limited challenges
- [ ] Discussion forums for each problem
- [ ] Code sharing and collaboration features
- [ ] Advanced analytics and progress tracking
- [ ] Mobile responsive design improvements
- [ ] Additional programming language support
- [ ] Plagiarism detection system
- [ ] Company-specific problem sets

## 📞 Support

For support, email [email] or create an issue in the repository.

## 🙏 Acknowledgments

- Judge0 API for code execution
- Google Gemini for AI assistance
- Cloudinary for media management
- Monaco Editor for the code editing experience
- The open-source community for various libraries and tools used
