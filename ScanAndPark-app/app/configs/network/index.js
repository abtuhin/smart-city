import ENV from '../env';

const baseURLs = {
  DEV: {
    api: 'http://502e-2a02-810d-8ac0-2874-18a0-3484-35a4-acc0.ngrok.io',
    cdn: '',
  },
  STAGING: {
    api: 'http://3e012dde65c0.ngrok.io',
    cdn: '',
  },
};

const baseURL = baseURLs[ENV];

export default baseURL;
