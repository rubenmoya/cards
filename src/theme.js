import dracula from 'prism-react-renderer/themes/dracula'
import duotoneDark from 'prism-react-renderer/themes/duotoneDark'
import duotoneLight from 'prism-react-renderer/themes/duotoneLight'
import github from 'prism-react-renderer/themes/github'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight'
import oceanicNext from 'prism-react-renderer/themes/oceanicNext'
import palenight from 'prism-react-renderer/themes/palenight'
import shadesOfPurple from 'prism-react-renderer/themes/shadesOfPurple'
import ultramin from 'prism-react-renderer/themes/ultramin'
import vsDark from 'prism-react-renderer/themes/vsDark'

export const toPx = n => `${n}px`
export const toEm = n => `${n}em`

export const editorTheme = {
  dracula,
  duotoneDark,
  duotoneLight,
  default: github,
  nightOwl,
  nightOwlLight,
  oceanicNext,
  palenight,
  shadesOfPurple,
  ultramin,
  vsDark
}

const speed = {
  quickly: 150,
  normal: 300,
  slowly: 450
}

export const theme = {
  colors: {
    github,
    modes: editorTheme
  },
  fonts: {
    sans:
      'Inter, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif',
    mono:
      '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace'
  },
  speed,
  transition: {
    short: `${speed.quickly}ms cubic-bezier(.25,.8,.25,1)`,
    medium: `${speed.normal}ms cubic-bezier(.25,.8,.25,1)`,
    long: `${speed.slowly}ms cubic-bezier(.4, 0, .2, 1)`
  },
  breakpoints: [576, 768, 991, 1220].map(toPx),
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96].map(toPx),
  fontWeights: {
    lighter: 100,
    light: 200,
    normal: 400,
    regular: 500,
    bold: 600
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512].map(toPx),
  styles: {
    root: {
      fontFamily: 'sans',
      lineHeight: 1.5,
      margin: 0,
      overflow: 'hidden'
    }
  }
}

export default theme
