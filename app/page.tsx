import dynamic from "next/dynamic";
/**
 * The bulk of the application code is in App.tsx, but we have to
 * do this trick to prevent server-side rendering of the canvas. This
 * makes the entire app render on the client side.
 *
 */
const App = dynamic(() => import("./App"), {
  ssr: false,
});

export default App;
