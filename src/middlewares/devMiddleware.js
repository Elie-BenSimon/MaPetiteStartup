import axios from 'axios';

import {
  GET_RECRUITABLE_DEVLIST,
  REQUEST_DEV,
  setRecruitableDevList,
  recruitDev,
} from 'src/actions/dev';

const devMiddleware = (store) => (next) => (action) => {
  const config = {
    // header with JWT
    headers: {
      Authorization: `Bearer ${store.getState().user.token}`,
    },
  };

  switch (action.type) {
    case GET_RECRUITABLE_DEVLIST: {
      const startupid = store.getState().startup.startupId;
      // console.log(startupid);

      // retrieve recruitable dev list
      axios.get(
        `http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/startup/${startupid}/recruitment`,
        config,
      )
        .then((response) => {
          // console.log(response);
          store.dispatch(setRecruitableDevList(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
      break;
    case REQUEST_DEV: {
      const startupid = store.getState().startup.startupId;
      console.log(startupid, action.id);
      // request to hire a dev
      axios.patch(
        `http://f-gahery-server.eddi.cloud/projet-08-ma-petite-startup-back/public/api/dev/${action.id}`,
        {
          startup: startupid,
        },
        config,
      )
        .then((response) => {
          const dev = store.getState().dev.recruitableDevList.find((dev) => (dev.id == action.id));
          console.log(response, dev);
          store.dispatch(recruitDev(dev));
        })
        .catch((error) => {
          console.log(error);
        });
    }
      break;
    default:
  }

  next(action);
};

export default devMiddleware;
