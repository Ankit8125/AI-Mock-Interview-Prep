# InterviewPrep
A job interview preparation platform powered by Vapi AI Voice agents, designed to help candidates practice and improve their interview skills with AI-driven voice interactions and real-time feedback.

## Tools & Technologies Used
• **Next.js**: Server-side rendering and frontend framework.<br>
• **Firebase**: Authentication and data storage.<br>
• **Tailwind CSS**: Styling framework.<br>
• **Vapi AI**: AI-powered voice agents for mock interviews.<br>
• **shadcn/ui**: UI components for modern and responsive design.<br>
• **Google Gemini**: AI model (**gemini-2.0-flash-001**) for generating and analyzing interview responses.<br>
• **Zod**: Schema validation for form inputs and API responses.<br>

## Features
• <strong>Authentication</strong>: Sign Up and Sign In using Firebase authentication.<br>
• <strong>Create Interviews</strong>: Generate mock job interviews with AI assistance.<br>
• <strong>AI Feedback</strong>: Receive instant feedback from AI on interview responses.<br>
• <strong>Modern UI/UX</strong>: Sleek, user-friendly interface for seamless navigation.<br>
• <strong>Interview Page</strong>: Conduct AI-driven interviews with real-time feedback and detailed transcripts.<br>
• <strong>Dashboard</strong>: Manage and track past interview sessions.<br>
• <strong>Responsiveness</strong>: Fully responsive design for all devices.<br>

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Ankit8125/InterviewPrep.git
    cd InterviewPrep
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set up environment variables:
    Create a `.env.local` file and add the following credentials:
    ```bash
    NEXT_PUBLIC_VAPI_WEB_TOKEN=
    NEXT_PUBLIC_VAPI_WORKFLOW_ID=
    GOOGLE_GENERATIVE_AI_API_KEY=
    NEXT_PUBLIC_BASE_URL=
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
    Replace placeholders with actual credentials.

4. Run the app:
    ```bash
    npm run dev
    ```
    Open `http://localhost:3000` in your browser to view the project.

