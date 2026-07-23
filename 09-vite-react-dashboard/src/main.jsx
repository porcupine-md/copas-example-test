import { createRoot } from 'react-dom/client';
import './style.css';

const projects = [
  ['Mitra Kitchen', 'Website + SEO', 'Live'],
  ['Klinik Tumbuh', 'Booking portal', 'Review'],
  ['Kopi Sore', 'Brand campaign', 'Draft'],
];
function App() {
  return <main><nav><b>northstar/</b><span>Agency OS</span><button>New project</button></nav><section className="hero"><p>MONDAY, 09:42</p><h1>Your client work,<br/>without the chaos.</h1><div className="metrics"><article><strong>12</strong><small>Active projects</small></article><article><strong>86%</strong><small>On-time this month</small></article><article><strong>Rp48.5jt</strong><small>Pipeline value</small></article></div></section><section className="work"><div><h2>Client pulse</h2><a href="#">View all →</a></div>{projects.map(([name, type, status]) => <article className="project" key={name}><i>{name.slice(0, 1)}</i><span><b>{name}</b><small>{type}</small></span><em className={status.toLowerCase()}>{status}</em></article>)}</section></main> }
createRoot(document.getElementById('root')).render(<App />);
