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

/* Imperative Method (vanilla JS) --> focus on how should it be done */
// const newEl = document.createElement("h1");
// newEl.textContent = "Let's make a cool website";
// newEl.className = "header";
// document.body.append(newEl);

/* Declarative Method (React) --> focus on what should be done */
// ReactDOM.render(
//   <h1 className="header">Let's make a cool website</h1>,
//   document.body
// );
