// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import './core/polyfill';

import { renderClient } from '@fs/home/user/Downloads/github/next-blog-01/umi-blog-example-main/node_modules/@umijs/renderer-react';
import { getRoutes } from './core/route';
import { createPluginManager } from './core/plugin';
import { createHistory } from './core/history';
import { ApplyPluginsType, PluginManager } from 'umi';
import './plugin-tailwindcss/tailwind.css';

async function render() {
  const pluginManager = createPluginManager();
  const { routes, routeComponents } = await getRoutes(pluginManager);

  // allow user to extend routes
  pluginManager.applyPlugins({
    key: 'patchRoutes',
    type: 'event',
    args: {
      routes,
      routeComponents,
    },
  });
  const context = {
    routes,
    routeComponents,
    pluginManager,
    rootElement: document.getElementById('root'),
    history: createHistory({
      type: 'browser',
    }),
    basename: '/',
  };

  return (pluginManager.applyPlugins({
    key: 'render',
    type: ApplyPluginsType.compose,
    initialValue() {
      return renderClient(context);
    },
  }))();
}


render();
