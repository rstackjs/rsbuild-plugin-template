// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginExample } from '../src/index.ts';

define.app({
  plugins: [pluginExample()],
});
