import pubs from './pubs';
import barathons from './barathon';

export default (app: any): void => {
    app.use('/pubs', pubs);
    app.use('/barathons',barathons);
};




