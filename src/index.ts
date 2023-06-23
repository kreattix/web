import { Heading, Label, Paragraph, Span, SubTitle, Title } from './components'

export * from './components'

declare global {
  interface HTMLElementTagNameMap {
    'kd-span': Span
    'kd-label': Label
    'kd-paragraph': Paragraph
    'kd-subtitle': SubTitle
    'kd-title': Title
    'kd-heading': Heading
  }
}
