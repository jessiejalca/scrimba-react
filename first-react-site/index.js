// You can "invent" elements by using functions & return
function Navigation() {
  return nav;
}
function MainContent() {
  return (
    <main>
      <h1>Something about something.</h1>
      <p>Let's make a cool website using React!</p>
    </main>
  );
}

// The JSX you want to render can be placed in a variable
// using parentheses
const nav = (
  <nav>
    <h1>Big Belly Burger</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);
const page = (
  <div>
    <Navigation />
    <MainContent />
  </div>
);

// The job of the renderer is to take the JSX objects &
// turn them into real HTML elements
ReactDOM.render(page, document.body);

/* Imperative Method (vanilla JS) 
   --> focus on how should it be done */
// const newEl = document.createElement("h1");
// newEl.textContent = "Let's make a cool website";
// newEl.className = "header";
// document.body.append(newEl);

/* Declarative Method (React) 
   --> focus on what should be done */
// ReactDOM.render(
//   <h1 className="header">Let's make a cool website</h1>,
//   document.body
// );
