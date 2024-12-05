// Import React and CSS for the app
import React from 'react'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>How I Built This Web Page Using React</h1>
        
        <section>
          <h2>Steps to Install React</h2>
          <p>
            First, I installed Node.js, which includes npm (Node Package Manager). 
            Then, I ran the command <code>npx create-react-app lab10</code> 
            to initialize a new React project. This command set up the project structure 
            with all necessary dependencies and configurations. Finally, I navigated 
            into the project folder and started the local server using <code>npm start</code>.
          </p>
        </section>
        
        <section>
          <h2>Steps to Build the Web Page</h2>
          <p>
            I modified the default <code>App.js</code> file to show the structure of the page 
            using React components. Each section was styled using the accompanying <code>App.css</code> file,
            which I modified to achieve the desired style for the website.
          </p>
        </section>
        
        <section>
          <h2>Challenges Faced and Solutions</h2>
          <p>
            <strong>Challenge:</strong> Styling the page without relying on Bootstrap or similar frameworks.<br />
            <strong>Solution:</strong> I used custom CSS within the <code>App.css</code> file, applying CSS modules for 
            better organization and styling. 
          </p>
          <p>
            <strong>Challenge:</strong> Making the React app accessible online.<br />
            <strong>Solution:</strong> I deployed the app to Github, which provides a simple and efficient way 
            to host React projects for free. 
          </p>
        </section>
      </header>
    </div>
  );
}

// Export the App component
export default App;

