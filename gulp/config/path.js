// Получаем имя папки проекта
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
  build: {
    html: `${buildFolder}/`,
    popup: `${buildFolder}/popup/`,
    i18n: `${buildFolder}/i18n/`,
    css: `${buildFolder}/css/`,
    js: `${buildFolder}/js/`,
    img: `${buildFolder}/images/`,
    fonts: `${buildFolder}/fonts/`,
    htaccess: `${buildFolder}/`,
  },

  src: {
    html: `${srcFolder}/*.html`,
    popup: `${srcFolder}/popup/*.html`,
    i18n: `${srcFolder}/i18n/*.json`,
    scss: `${srcFolder}/scss/style.scss`,
    js: `${srcFolder}/js/*.js`,
    img: `${srcFolder}/images/**/*.*`,
    fonts: `${srcFolder}/fonts/*.*`,
    svg: `${srcFolder}/images/svg/*.svg`,
    htaccess: `${srcFolder}/.htaccess`,
  },

  watch: {
    html: `${srcFolder}/**/*.html`,
    popup: `${srcFolder}/**/*.html`,
    i18n: `${srcFolder}/**/*.json`,
    scss: `${srcFolder}/scss/**/*.scss`,
    js: `${srcFolder}/js/*.js`,
    img: `${srcFolder}/images/**/*.*`,
    svg: `${srcFolder}/images/svg/*.svg`,
  },

  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
}