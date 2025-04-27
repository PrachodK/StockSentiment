📈 Stock Sentiment Analysis App
This project is a simple yet powerful AI-powered stock sentiment tool.
It allows users to search for S&P 500 companies and get quick Buy, Sell, or Hold recommendations based on AI analysis of news articles.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

🚀 Features
Live search with autocomplete for S&P 500 companies.

AI-driven sentiment analysis of latest company news.

Smart recommendations:

BUY if very positive
SELL if negative
HOLD if neutral

Responsive, clean design using custom CSS and Material UI.

Smooth loading states, error handling, and clean UX.

🛠 Tech Stack
Frontend: React.js (Create React App)
Backend: Flask (Python API)
Styling: Custom CSS and Material UI
AI: OpenAI API for sentiment extraction
(Optional) Database setup via server.js

⚙ Setup Instructions

Clone the repository:
bash
Copy
Edit
git clone https://github.com/PrachodK/StockSentiment.git
cd StockSentiment

Install frontend dependencies:
nginx
Copy
Edit
npm install
Add your OpenAI API Key inside app.py.

(Optional) Configure your database in server.js.

Start the frontend server:
sql
Copy
Edit
npm start
Start your backend Flask server separately.
