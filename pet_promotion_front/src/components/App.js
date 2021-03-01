import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Auth from '../components/MainPanel/AuthPanel/Auth';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import AnimalPostCreate from './MainPanel/Animal/AnimalPost/AnimalPostCreate'
import AnimalPostMain from './MainPanel/Animal/AnimalPost/AnimalPostMain';
import AnimalDetailMain from './MainPanel/Animal/AnimalDetail/AnimalDetailMain';
import UserMain from './MainPanel/User/UserMain';
import Main from './MainPanel/MainList/Main';

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
margin: 0;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
display: block;
}
body {
line-height: 1;
}
ol, ul{
list-style: none;
}
blockquote, q {
quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
content: '';
content: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
a{
  text-decoration: none;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Router>
          <Route exact path="/" component={Main} render={()=> <Redirect to="auth" />} />
          <Route path="/auth" component={Auth} />
          <Route path="/animalpostmain" component={AnimalPostMain} />
          <Route path="/animaldetailmain" component={AnimalDetailMain} />
          <Route path="/animalpostcreate" component={AnimalPostCreate} />
          <Route path="/usermain" component={UserMain} />
        </Router>
      </div>
    </>
  );
}

export default App;
