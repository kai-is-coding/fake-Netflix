import ReactGA from "react-ga";
export function initGA() {
  ReactGA.initialize("UA-161392993-3");
}

export function PageView() {
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export function Event(category, action, label) {
  ReactGA.event({
    category,
    action,
    label,
  });
}
