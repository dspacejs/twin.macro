/**
 * Pseudo-classes (Variants)
 * In Twin, these are always available on just about any class
 *
 * See MDN web docs for more information
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
 */

const variantConfig = ({
  variantDarkMode,
  variantLightMode,
  prefixDarkLightModeClass,
}) => ({
  // Before/after pseudo elements
  // Usage: tw`before:(content block w-10 h-10 bg-black)`
  before: ':before',
  after: ':after',

  // Interactive links/buttons
  hover: ':hover',
  focus: ':focus',
  active: ':active',
  visited: ':visited',
  hocus: ':hover, :focus',
  link: ':link',
  target: ':target',
  'focus-visible': ':focus-visible',
  'focus-within': ':focus-within',

  // Form element states
  autofill: ':autofill',
  disabled: ':disabled',
  checked: ':checked',
  'not-checked': ':not(:checked)',
  default: ':default',
  enabled: ':enabled',
  indeterminate: ':indeterminate',
  'in-range': ':in-range',
  invalid: ':invalid',
  valid: ':valid',
  optional: ':optional',
  'out-of-range': ':out-of-range',
  required: ':required',
  'placeholder-shown': ':placeholder-shown',
  placeholder: '::placeholder',
  'read-only': ':read-only',
  'read-write': ':read-write',

  // Child selectors
  'not-disabled': ':not(:disabled)',
  'first-of-type': ':first-of-type',
  'not-first-of-type': ':not(:first-of-type)',
  'last-of-type': ':last-of-type',
  'not-last-of-type': ':not(:last-of-type)',
  'first-letter': '::first-letter',
  'first-line': '::first-line',
  first: ':first-child',
  'not-first': ':not(:first-child)',
  last: ':last-child',
  'not-last': ':not(:last-child)',
  'only-child': ':only-child',
  only: ':only-child',
  'not-only-child': ':not(:only-child)',
  'only-of-type': ':only-of-type',
  'not-only-of-type': ':not(:only-of-type)',
  even: ':nth-child(even)',
  odd: ':nth-child(odd)',
  'even-of-type': ':nth-of-type(even)',
  'odd-of-type': ':nth-of-type(odd)',
  svg: 'svg',
  all: '*',
  'all-child': '> *',
  sibling: '~ *',

  // Content
  empty: ':empty',

  // Group states
  // You'll need to add className="group" to an ancestor to make these work
  // https://github.com/ben-rogerson/twin.macro/blob/master/docs/group.md
  'group-hover': variantData =>
    prefixDarkLightModeClass('.group:hover &', variantData),
  'group-focus': variantData =>
    prefixDarkLightModeClass('.group:focus &', variantData),
  'group-hocus': variantData =>
    prefixDarkLightModeClass('.group:hover &, .group:focus &', variantData),
  'group-active': variantData =>
    prefixDarkLightModeClass('.group:active &', variantData),
  'group-visited': variantData =>
    prefixDarkLightModeClass('.group:visited &', variantData),

  // Media types
  print: '@media print',
  screen: '@media screen',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
  'motion-safe': '@media (prefers-reduced-motion: no-preference)',
  'motion-reduce': '@media (prefers-reduced-motion: reduce)',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer
  'any-pointer-none': '@media (any-pointer: none)',
  'any-pointer-fine': '@media (any-pointer: fine)',
  'any-pointer-coarse': '@media (any-pointer: coarse)',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer
  'pointer-none': '@media (pointer: none)',
  'pointer-fine': '@media (pointer: fine)',
  'pointer-coarse': '@media (pointer: coarse)',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover
  'any-hover-none': '@media (any-hover: none)',
  'any-hover': '@media (any-hover: hover)',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover
  'can-hover': '@media (hover: hover)',
  'cant-hover': '@media (hover: none)',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation
  landscape: '@media (orientation: landscape)',
  portrait: '@media (orientation: portrait)',

  // Dark mode
  dark: variantDarkMode,

  // Light mode
  light: variantLightMode,

  // Selection
  selection: '::selection',
})

export default variantConfig
