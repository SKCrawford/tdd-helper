import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    /** The primary color. */
    primary: string;

    /** The secondary color. */
    secondary: string;

    /** The tertiary color. */
    tertiary: string;

    /** The complement to the primary color. Harsher than textPrimary. */
    complementary: string;

    /** Text color on top of primary color backgrounds. Gentler than complementary. */
    textPrimary: string;

    /** Text color on top of secondary color backgrounds. */
    textSecondary: string;

    /** Text color on top of tertiary color backgrounds. */
    textTertiary: string;
  }
}
