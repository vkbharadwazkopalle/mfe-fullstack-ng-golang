module.exports = {
  name: 'remote1',
  exposes: {
    './Module': 'apps/remote1/src/app/remote-entry/entry.module.ts',
  },
};
