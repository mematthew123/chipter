import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

interface ChipSubmissionConfirmationProps {
    chipName: string;
    brand: string;
    reason?: string;
}

export default function ChipSubmissionConfirmation({
    chipName,
    brand,
    reason,
}: ChipSubmissionConfirmationProps) {
    return (
        <Html>
            <Head />
            <Preview>
                We received your chip submission — {brand} {chipName}
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
                                SUBMISSION RECEIVED.
                            </Heading>

                            <Text className='mb-6 font-sans text-base text-[#1A1A1A]'>
                                We&apos;ve logged your chip for potential review.
                                We take our responsibility seriously.
                            </Text>

                            {/* Submission Details */}
                            <Section className='mb-6 border-[3px] border-[#1A1A1A] bg-[#FFE566] p-4'>
                                <Text className='mb-2 font-mono text-sm font-bold uppercase text-[#1A1A1A]'>
                                    SUBMITTED CHIP:
                                </Text>
                                <Text className='m-0 mb-2 font-sans text-base text-[#1A1A1A]'>
                                    <strong>Brand:</strong> {brand}
                                </Text>
                                <Text className='m-0 mb-2 font-sans text-base text-[#1A1A1A]'>
                                    <strong>Chip:</strong> {chipName}
                                </Text>
                                {reason && (
                                    <Text className='m-0 font-sans text-base text-[#1A1A1A]'>
                                        <strong>Your Case:</strong> {reason}
                                    </Text>
                                )}
                            </Section>

                            {/* What Happens Next */}
                            <Section className='mb-6'>
                                <Text className='mb-4 font-mono text-sm font-bold uppercase text-[#1A1A1A]'>
                                    WHAT HAPPENS NEXT:
                                </Text>
                                <Text className='m-0 mb-2 font-sans text-sm text-[#1A1A1A]'>
                                    • We&apos;ll add it to our review queue
                                </Text>
                                <Text className='m-0 mb-2 font-sans text-sm text-[#1A1A1A]'>
                                    • If selected, we&apos;ll source the chip
                                </Text>
                                <Text className='m-0 mb-2 font-sans text-sm text-[#1A1A1A]'>
                                    • It will undergo rigorous Chipter Scale testing
                                </Text>
                                <Text className='m-0 font-sans text-sm text-[#1A1A1A]'>
                                    • Reviews are published when ready, not rushed
                                </Text>
                            </Section>

                            {/* Disclaimer */}
                            <Section className='border-[3px] border-[#1A1A1A] bg-[#1A1A1A] p-4 text-center'>
                                <Text className='m-0 font-serif text-base italic text-[#FFFBEB]'>
                                    &ldquo;We reserve the right to ignore submissions that
                                    bore us.&rdquo;
                                </Text>
                            </Section>
                        </Section>

                        {/* Footer */}
                        <Section className='border-x-[3px] border-b-[3px] border-[#1A1A1A] bg-[#666666] px-8 py-6'>
                            <Text className='m-0 mb-2 text-center font-mono text-xs uppercase text-[#FFFBEB]'>
                                © {new Date().getFullYear()} CHIPTER. ALL CHIPS RESERVED.
                            </Text>
                            <Text className='m-0 text-center font-sans text-xs text-[#FFFBEB]'>
                                You submitted a chip at{' '}
                                <Link
                                    href='https://chipter.com'
                                    className='text-[#FFE566] underline'
                                >
                                    chipter.com
                                </Link>
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}