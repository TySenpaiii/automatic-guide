import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
print ("Welcome to my Naruto Quiz")

playing = input("Do you want to play? ")

if playing != "yes":
quit()

print ("Okay! Let's play :)")

answer = input("What clan does Madara belong to? ")
if answer == "Uchiha":
print ('correct')
else: print ('incorrect')

answer = input ("What clan does Hashirama belong to?")
if answer == "Senju":
print ('correct')
else: print ('inncorrect')

print("You got " + str(score) + "questions correct!")
"tim" + "1" = "tim1"