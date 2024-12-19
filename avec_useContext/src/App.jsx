import "react";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";

const styleP = {
  'width': '40%',
  'text-align': 'justify',
}

const styleFlex = {
  'display': 'flex',
  'flex-direction': 'row',
  'justify-content': 'center'
}

const App = () => {
  return (
    <ThemeProvider>
      <div>
      <h1>Bienvenue sur l&apos;application React ThemeSwitcher !</h1>
        <ThemeButton />
        <hr />
        <p>Ici, nous utilisons le hook <strong>UseContext</strong>.</p>
        <h2>Explication de la différence</h2>
        <div style={styleFlex}>
          <div style={styleP}>
            <h3>1. Sans useContext :</h3>
            <p>- Prop drilling → On passe theme et toggleTheme manuellement de composant en composant.</p>
            <p>- Plus compliqué à maintenir lorsque la structure de l&apos;application devient complexe.</p>
          </div>
          <div style={styleP}>
            <h3>2. Avec useContext :</h3>
            <p>- On fournit le contexte global via le ThemeProvider.</p>
            <p>- Tous les composants enfants peuvent consommer ce contexte directement grâce au hook useContext.</p>
            <p>- Plus propre et plus facile à comprendre.</p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;