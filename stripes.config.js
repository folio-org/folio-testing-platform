module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    showPerms: false
  },
  modules: {
    "@folio/users" : {},
    "@folio/inventory" : {},
    "@folio/calendar" : {},
    "@folio/checkout" : {},
    "@folio/checkin" : {},
    "@folio/requests" : {},
    "@folio/search" : {},
    "@folio/organization" : {},
    "@folio/developer" : {},
    "@folio/circulation" : {},
    "@folio/eholdings" : {},
    "@folio/vendors": {},
    "@folio/finance": {},
    "@folio/plugin-find-user" : {},
    "@folio/plugin-find-instance" : {},
    "@folio/tags": {},
    "@folio/myprofile": {}
  },
  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/opentown-libraries-favicon.png',
    },
  },
};
