/* eslint-disable react/prop-types */
import "react";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";

const IntermediateComponent = ({ theme, toggleTheme }) => {
  //! Ce composant ne fait rien avec theme, mais doit quand même le recevoir
  return <ThemeButton theme={theme} toggleTheme={toggleTheme} />;
};

const  style = {
  'text-align': 'center',
  'width': '100%'
}

const styleP = {
  'width': '30%',
  'text-align': 'justify',
  'margin-left': '35%'
}

const textOrange = {
  'color': 'orange',
}

const App = () => {
  return (
    <ThemeProvider>
      {({ theme, toggleTheme }) => (
        <div style={style}>
          <h1>Bienvenue sur l&apos;application React ThemeSwitcher !</h1>
          <IntermediateComponent theme={theme} toggleTheme={toggleTheme} />
          <hr />
          <p>Ici, nous n&apos;utilisons pas le hook <strong>UseContext</strong>.</p>
          <h2>Explication du problème</h2>
          <p style={styleP}>
            Ici, on passe les props « <i><code style={textOrange}>theme</code></i> » et « <i><code style={textOrange}>toggleTheme</code></i> » 
            depuis le <strong><code>ThemeProvider</code></strong> jusqu&apos;au <strong><code>ThemeButton</code></strong> en passant par un 
            composant intermédiaire (<i>prop drilling</i>). Ce n&apos;est pas l&apos;idéal, car si ton
            application deviens complexe, on vas devoir transmettre beaucoup de props inutiles à des composants
            qui ne les utilisent même pas.
          </p>
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;