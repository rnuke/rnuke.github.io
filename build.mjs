import { Parcel } from '@parcel/core';

let bundler = new Parcel({
  entries: ['_assets/main.css', '_assets/main.js'],
  targets: {
    default: {
      distDir: 'assets'
    }
  },
  defaultConfig: '@parcel/config-default',
  mode: 'production',
  defaultTargetOptions: {
    engines: {
      browsers: ['> 0.5%, last 2 versions, not dead']
    }
  }
});

try {
  let { bundleGraph, buildTime } = await bundler.run();
  let bundles = bundleGraph.getBundles();
  console.log(`✨ Built ${bundles.length} bundles in ${buildTime}ms!`);
} catch (err) {
  console.log(err.diagnostics);
}
