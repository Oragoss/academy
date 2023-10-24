import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind} from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Tailwind>
            {/* <Body style={body}> */}
            <Body className='bg-white'>
                <Container>
                    {/* <Text style={heading}>Hello {name}</Text> */}
                    <Text className='font-bold text-3xl'>Hello {name}</Text>
                    <Link href='https://www.youtube.com'>https://www.youtube.com</Link>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
};

//Leaving these here for the sole purpose of demonstrating the possibility
const body: CSSProperties = {
    background: '#fff',

}

const heading: CSSProperties = {
    fontSize: '32px'
}

export default WelcomeTemplate