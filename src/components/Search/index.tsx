import Button from '../Button'
import * as C from './style'

import { InputHTMLAttributes, FormEvent } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  submit: (event: FormEvent<HTMLFormElement>) => void
}

export default function Search({ submit, ...props }: InputProps) {
  return (
    <C.Form onSubmit={submit}>
      <C.Input {...props} />
      <Button type="submit">Buscar</Button>
    </C.Form>
  )
}
