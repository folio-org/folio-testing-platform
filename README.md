## NOTE: THIS REPOSITORY IS DEPRECATED (superceded by the https://github.com/folio-org/platform-complete/tree/snapshot)

# FOLIO testing platform

This is an example of a Stripes "platform". It consists simply of an
NPM [`package.json`](https://docs.npmjs.com/files/package.json) that
specifies the version of `@folio/stripes-core` and of any Stripes
modules you wish to make available to generate client bundles. This
platform is set to build from the latest version of all the modules
generated in the npm-folioci repository.

Please see the
[quick start guide](https://github.com/folio-org/stripes-core/blob/master/doc/quick-start.md)
for more information.

The `stripes.config.js` is a configuration for a specific tenant. In
general, a platform supports multiple tenants, each of which may
include a different set of the available modules.  You can copy the
`stripes.config.js` file to be your `stripes.config.js.local`
configuration file.

### install node packages first

    $ yarn install

### run the sample

    $ yarn start

or

    # make the service available to other users
    $ STRIPES_HOST=full.host.name yarn start

