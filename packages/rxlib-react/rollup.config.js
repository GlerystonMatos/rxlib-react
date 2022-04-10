import postCSS from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: [
        {
            file: './lib/cjs/index.js',
            format: 'cjs',
        },
        {
            file: './lib/esm/index.js',
            format: 'es',
        },
    ],
    external: [...Object.keys(pkg.peerDependencies || {})],
    plugins: [
        postCSS(),
        commonjs(),
        nodeResolve(),
        typescript({
            typescript: require('typescript'),
        }),
    ],
};