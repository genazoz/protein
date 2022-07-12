import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {ThemeProvider} from "styled-components";

import "./index.sass";
import App from "./App";
import theme from "./theme";
import GlobalStyles from "./globalStyles";
import {store} from "./redux/store";
import {Provider} from "react-redux";

const $rootElem = document.getElementById("root");

if($rootElem) {
    const root = ReactDOM.createRoot($rootElem);

    root.render(
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Router>
                <Provider store={store}>
                    <App/>
                </Provider>
            </Router>
        </ThemeProvider>
    );
}
