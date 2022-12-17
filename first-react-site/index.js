function MainContent() {
  return (
    <main>
      <h1>Something about something.</h1>
      <p>Let's make a cool website using React!</p>
    </main>
  );
}

ReactDOM.render(
  <div>
    <MainContent />
  </div>,
  document.body
);

// Imperative Method (in contrast to React's Declarative Method above)
// the imperative method --> how should it be done?
// the declarative method --> what should be done? (this is the React way)
// const newEl = document.createElement("h1");
// newEl.textContent = "Let's make a cool website";
// newEl.className = "header";
// document.body.append(newEl);
