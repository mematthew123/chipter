import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface NewsletterWelcomeProps {
    email: string;
}

export default function NewsletterWelcome({ email }: NewsletterWelcomeProps) {
    return (
        <Html>
            <Head />
            <Preview>
                Welcome to Chipter — You&apos;re on the list for seismic snack
                alerts
            </Preview>
            <Tailwind>
                <Body className='bg-[#FFFBEB] font-sans'>
                    <Container className='mx-auto my-10 max-w-2xl bg-[#FFFBEB]'>
                        {/* Header */}
                        <Section className='border-[3px] border-[#1A1A1A] bg-[#FF5C35] px-8 py-6'>
                            <Heading className='m-0 text-center font-mono text-4xl font-extrabold uppercase text-[#FFFBEB]'>
                                CHIPTER
                            </Heading>
                            <Text className='m-0 text-center font-serif text-lg italic text-[#FFFBEB]'>
                                The Seismic Scale for Snacks
                            </Text>
                        </Section>

                        {/* Main Content */}
                        <Section className='border-x-[3px] border-b-[3px] border-[#1A1A1A] bg-[#FFFBEB] px-8 py-8'>
                            <Heading className='mb-4 font-mono text-2xl font-bold uppercase text-[#1A1A1A]'>
                                YOU&apos;RE IN.
                            </Heading>

                            <Text className='mb-6 font-sans text-base text-[#1A1A1A]'>
                                Welcome to the only newsletter that takes chips
                                as seriously as you do.
                            </Text>

                            <Text className='mb-6 font-sans text-base text-[#1A1A1A]'>
                                <strong>Email:</strong> {email}
                            </Text>

                            {/* What to Expect */}
                            <Section className='mb-6 border-[3px] border-[#1A1A1A] bg-[#FFE566] p-4'>
                                <Text className='mb-2 font-mono text-sm font-bold uppercase text-[#1A1A1A]'>
                                    WHAT YOU GET:
                                </Text>
                                <Text className='m-0 mb-2 font-sans text-sm text-[#1A1A1A]'>
                                    • New reviews when chips hit 7.0+ on the
                                    Chipter Scale
                                </Text>
                                <Text className='m-0 mb-2 font-sans text-sm text-[#1A1A1A]'>
                                    • Badge announcements (Seismic, Tectonic,
                                    Epicenter)
                                </Text>
                                <Text className='m-0 mb-2 font-sans text-sm text-[#1A1A1A]'>
                                    • Exclusive first taste of legendary 9.0+
                                    chips
                                </Text>
                                <Text className='m-0 font-sans text-sm text-[#1A1A1A]'>
                                    • Zero fluff. Just chips that matter.
                                </Text>
                            </Section>

                            {/* The Scale Reference */}
                            <Section className='mb-6'>
                                <Text className='mb-4 font-mono text-sm font-bold uppercase text-[#1A1A1A]'>
                                    REMEMBER THE SCALE:
                                </Text>
                                <table
                                    cellPadding='4'
                                    cellSpacing='0'
                                    className='w-full'
                                >
                                    <tr>
                                        <td className='border-b-[2px] border-[#1A1A1A] font-mono text-sm font-bold text-[#FF5C35]'>
                                            7.0+
                                        </td>
                                        <td className='border-b-[2px] border-[#1A1A1A] font-mono text-sm uppercase text-[#1A1A1A]'>
                                            SEISMIC SNACK
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border-b-[2px] border-[#1A1A1A] font-mono text-sm font-bold text-[#FF5C35]'>
                                            8.0+
                                        </td>
                                        <td className='border-b-[2px] border-[#1A1A1A] font-mono text-sm uppercase text-[#1A1A1A]'>
                                            TECTONIC CRUNCH
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='border-b-[2px] border-[#1A1A1A] font-mono text-sm font-bold text-[#FF5C35]'>
                                            9.0+
                                        </td>
                                        <td className='border-b-[2px] border-[#1A1A1A] font-mono text-sm uppercase text-[#1A1A1A]'>
                                            EPICENTER ELITE
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='font-mono text-sm font-bold text-[#FF5C35]'>
                                            10.0
                                        </td>
                                        <td className='font-mono text-sm uppercase text-[#1A1A1A]'>
                                            OFF THE CHIPTER
                                        </td>
                                    </tr>
                                </table>
                            </Section>

                            {/* Tagline */}
                            <Section className='border-[3px] border-[#1A1A1A] bg-[#1A1A1A] p-4 text-center'>
                                <Text className='m-0 font-serif text-lg italic text-[#FFFBEB]'>
                                    &ldquo;Rating chips so you don&apos;t have
                                    to guess.&rdquo;
                                </Text>
                            </Section>
                        </Section>

                        {/* Footer */}
                        <Section className='border-x-[3px] border-b-[3px] border-[#1A1A1A] bg-[#666666] px-8 py-6'>
                            <Text className='m-0 mb-2 text-center font-mono text-xs uppercase text-[#FFFBEB]'>
                                © {new Date().getFullYear()} CHIPTER. ALL CHIPS
                                RESERVED.
                            </Text>
                            <Text className='m-0 text-center font-sans text-xs text-[#FFFBEB]'>
                                You&apos;re receiving this because you signed up
                                at{' '}
                                <Link
                                    href='https://chipter.com'
                                    className='text-[#FFE566] underline'
                                >
                                    chipter.com
                                </Link>
                            </Text>
                            <Text className='m-0 mt-4 text-center font-sans text-xs text-[#FFFBEB]'>
                                <Link
                                    href='{{unsubscribe}}'
                                    className='text-[#FFFBEB] underline'
                                >
                                    Unsubscribe
                                </Link>
                                {' · '}
                                <Link
                                    href='https://chipter.com'
                                    className='text-[#FFFBEB] underline'
                                >
                                    Visit Site
                                </Link>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
