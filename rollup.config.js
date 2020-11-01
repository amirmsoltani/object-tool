import nodeResolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const extensions = [
    '.ts'
];
const noDeclarationFiles = { compilerOptions: { declaration: false } };

const babelRuntimeVersion = pkg.devDependencies['@babel/runtime'].replace(
    /^[^0-9]*/,
    ''
)

const name = 'ObjectTool';

export default [
    // CommonJs
    {
        input: 'src/index.ts',
        output: { file: 'lib/index.js', format: 'cjs', indent: false },
        external: [],
        plugins: [nodeResolve({
            extensions
        }),
        typescript({ useTsconfigDeclarationDir: true }),
        babel({
            extensions,
            plugins: [
                ['@babel/plugin-transform-runtime', { version: babelRuntimeVersion }],
            ],
            runtimeHelpers: true,
        })
        ]
    },

    //ES
    {
        input: 'src/index.ts',
        output: { file: 'es/index.js', format: 'es', indent: false },
        external: [],
        plugins: [
            nodeResolve({
                extensions
            }),
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                extensions,
                plugins: [
                    [
                        '@babel/plugin-transform-runtime',
                        { version: babelRuntimeVersion, useESModules: true },
                    ]
                ],
                runtimeHelpers: true,
            })
        ],
    },
    // ES for Browsers
    {
        input: 'src/index.ts',
        output: { file: 'es/index.mjs', format: 'es', indent: false },
        plugins: [
            nodeResolve({
                extensions,
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                extensions,
                exclude: 'node_modules/**',
            }),
            terser({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    warnings: false,
                },
            }),
        ],
    },

    // UMD Development
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'umd',
            name,
            indent: false,
        },
        plugins: [
            nodeResolve({
                extensions,
            }),
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                extensions,
                exclude: 'node_modules/**',
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('development'),
            }),
        ],
    },

    // UMD Production
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.min.js',
            format: 'umd',
            name: 'Redux',
            indent: false,
        },
        plugins: [
            nodeResolve({
                extensions,
            }),
            typescript({ tsconfigOverride: noDeclarationFiles }),
            babel({
                extensions,
                exclude: 'node_modules/**',
            }),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            terser({
                compress: {
                    pure_getters: true,
                    unsafe: true,
                    unsafe_comps: true,
                    warnings: false,
                },
            }),
        ],
    },

];