import path from 'path';
import { mergeConfig } from 'vite';
import libConfig from '../../vite.lib.config';
import { prefixCSSClasses } from '../../tools/postcss-prefix';
import { importStyles } from '../../tools/styl-imports';

export default mergeConfig(libConfig, {
  root: __dirname,
  cacheDir: '../../node_modules/.vite/libs/editor',

  css: {
    preprocessorOptions: {
      styl: {
        additionalData: importStyles([
          path.join(__dirname, 'src/themes/default/colors.styl'),
          path.join(__dirname, 'src/themes/default/scrollbar.styl'),
        ]),
      }
    },
    postcss: {
      plugins: [
        prefixCSSClasses({
          prefix: "lsf-",
          ignore: [/^.antd?-/, /^.anticon/],
          ignorePaths: [/node_modules/, /.module/]
        })
      ],
    },
  },

  optimizeDeps: {
    exclude: [
      "@martel/audio-file-decoder"
    ]
  },

  build: {
    outDir: '../../dist/libs/editor',
    lib: {
      name: 'editor',
    },
    rollupOptions: {
      external: ["@martel/audio-file-decoder/decode-audio.wasm"],
    }
  },
});

