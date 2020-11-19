import React from 'react';

import { Switch, Route, useParams } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

const tenant = "tenant nao informado"
// Ler Prefixo da URL
// console.log(window.location.href)
// console.log(window.location.pathname)
const host = window.location.host
// console.log(window.location.hash)
// console.log(window.location.origin)
const prefix = host.split(".localhost")

console.log("Prefixo: ", prefix.length)

const pref = prefix[0]

const Routes: React.FC = () => (
  <Switch>
    <Route path="/:tenant/produto/:id"  children={<Produto />} />
    <Route path="/:tenant"  component={Dashboard} />

    {(prefix.length > 1) ? <Route path="/" exact children={<Child />} /> : <Route path="/" exact children={<Child2 />} />}
  </Switch>
);

function Child() {
  return (
    <div>
      <h1>{pref}</h1>
      <h2>Dashboard Site</h2>
    </div>
  );
}

function Child2() {
  return (
    <div>
      <h1>Home LandPage</h1>
      <h3> </h3>
    </div>
  );
}

function Produto() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { tenant, id } = useParams();
  return (
    <div>
      <h1>TENANT: {tenant}</h1>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default Routes;
