import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
const style: CSSProperties = {//se define la clase de react para limitar a que solo se pongan atributos css, no inventar propiedades
    color: '#0070f3',
    textDecoration: 'underline'
}
type Props = { // para que detecte el children y definir los tipos recibidos por parametros
  children?: React.ReactNode,
  text: string,
  href: string
};

export const ActiveLink :  React.FC<Props>  = ({text, href}) => {

  const {asPath} = useRouter();
  return (
    <Link href={href} style={ asPath === href ? style : undefined}>{text}
    </Link>
  )
};