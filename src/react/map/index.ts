import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import Component from '../../components/map/map.js';

export default createComponent({
  tagName: 'sl-map',
  elementClass: Component,
  react: React,
  events: {}
});
