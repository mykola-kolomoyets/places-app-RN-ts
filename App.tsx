import { StatusBar } from 'expo-status-bar';
import {Fragment} from "react";

import Navigation from "./components/navigation";


export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      
      <Navigation />
    </Fragment>
  );
}
