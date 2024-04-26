import Header from "../../components/Header";
import "./documentation.css";

export default function Documentation() {
  return (
    <div>
        <Header />
        <h1>Optimizing Data Retrieval in the Research Space</h1>
        <p>We've seen an immense growth in the availability and use of chatbots in our daily lives. With applications like ChatGPT, Gemini, and Vercel.ai, information has never been more easily and efficiently accessible. We wanted to capitalize on this idea and provide the researchers at the Alaska Center for Energy and Power with their own personal research assistant.</p>
        <p>Our project optimizes the data retrieval process beginning with thousands of research documents, PDFs, and ending with a user-friendly Chatbot UI. This project utilizes a RAG model and is finetuned for energy-related research.</p>
      
        <h2>System Overview</h2>
        <ul>
          <li>Back End</li>
          <li>Front End</li>
          <li>
            <a href="#screenshot">Screenshot of a Chat</a>
          </li>
          <li>Description automatically generated</li>
          <li>Chatbot UI</li>
        </ul>
      
        <h2>Front End</h2>
        <p>The Frontend UI is built using React.js for its flexible and adaptable framework. This allows for seamless integration and management of our various pages and components.</p>
      
        <h3>Running the UI Locally</h3>
        <pre>
          In your terminal, clone the GitHub repository onto your own device.
      
          git clone &lt;repo-url&gt;
      
          Navigate to the Frontend directory
      
          cd Frontend
      
          Install all necessary packages
      
          npm install
      
          Run the app in development mode
      
          npm start
      
          Open http://localhost:3000 to view it in the browser
        </pre>
      
        <h3>Deployment</h3>
        <p>Once you are ready to deploy your application, you can build the app for production into the build folder.</p>
        <pre>
          npm run build
        </pre>
      
        <h2>Hosting with Cloudflare Pages</h2>
        <p>We are using Cloudflare Pages for webpage deployment. Cloudflare Pages offers several advantages for hosting your webpage, particularly if it's a static website:</p>
        <ul>
          <li>Simplified deployment with seamless Git integration</li>
          <li>Fast delivery of your chatbot UI worldwide with Cloudflare's global network</li>
          <li>Built-in SSL for security concerns</li>
          <li>Free tier with unlimited websites and bandwidth (cost-effective for personal projects or small-scale deployments)</li>
          <li>Focus on development with Cloudflare Pages handling infrastructure</li>
          <li>Ensured accessibility and performance even with unexpected traffic spikes</li>
        </ul>
      
        <h2 id="screenshot">Screenshot of a Chat</h2>
        <p>A screenshot of the chat interface will be inserted here.</p>
    </div>
  );
};
