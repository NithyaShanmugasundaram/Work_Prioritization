import mixpanel from 'mixpanel-browser';
mixpanel.init('084787a9206750413c53f0a28566b064');


let env_check = process.env.NODE_ENV === 'development';

let actions = {
  
  track: (name, props) => {
    if (env_check) mixpanel.track(name, props);
  },
 
};

export let Mixpanel = actions;