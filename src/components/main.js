import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import About from './about';
import Portfolio from './portfolio';
import Projects from './projects';

import Project from './projects/project';
import MasterThesis from './projects/masterThesis';
import Moa from './projects/moa';
import Flubber from './projects/flubber';
import Librarian from './projects/librarian';
import Omr from './projects/omr';
import Legionen from './projects/legionen';
import HiByeBook from './projects/hibyebook';
import Siege from './projects/siege';
import LookForMy from './projects/lookForMy';
import TyglaDig from './projects/tygladig';
import Windmill from './projects/windmill';

const Main = () => (
	<Switch>
		<Route exact path="/landingpage" component={ Landing } />
		<Route path="/about" component={ About } />
		<Route path="/portfolio" component={ Portfolio } />
		<Route path="/projects" component={ Projects } />
		
		{/* Route to all projects */}
		<Route path="/project" component={ Project } />
		<Route path="/master-thesis" component={ MasterThesis } />
		<Route path="/moa" component={ Moa } />
		<Route path="/flubber" component={ Flubber } />
		<Route path="/librarian" component={ Librarian } />
		<Route path="/omr" component={ Omr } />
		<Route path="/legionen" component={ Legionen } />
		<Route path="/hibyebook" component={ HiByeBook } />
		<Route path="/siege" component={ Siege } />
		<Route path="/look-for-my" component={ LookForMy } />
		<Route path="/tygladig" component={ TyglaDig } />
		<Route path="/windmill" component={ Windmill } />
	</Switch>
)

export default Main;