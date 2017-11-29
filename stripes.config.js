module.exports = {
  okapi: { 'url':'http://localhost:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    showPerms: false
  },
  modules: {
    "@folio/trivial" : {},
    "@folio/users" : {},
    "@folio/inventory" : {},
    "@folio/items" : {},
    "@folio/checkout" : {},
    "@folio/checkin" : {},
    "@folio/requests" : {},
    "@folio/search" : {},
    "@folio/organization" : {},
    "@folio/developer" : {},
    "@folio/circulation" : {},
    "@folio/plugin-markdown-editor" : {},
    "@folio/plugin-markdown-better" : {},
    "@folio/plugin-find-user" : {},
    "@folio/util-notes" : {}
  }
};
