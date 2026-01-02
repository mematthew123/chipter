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

interface ChipSubmissionAdminProps {
    chipName: string;
    brand: string;
    reason?: string;
    submitterEmail: string;
}

export default function ChipSubmissionAdmin({
    chipName,
    brand,
    reason,
    submitterEmail,
}: ChipSubmissionAdminProps) {
    return (
        <Html>
            <Head />
            <Preview>
                New chip submission: {brand} {chipName}
            </Preview>
            <Tailwind>
                <Body className='bg-[#FFFBEB] font-sans'>
                    <Container className='mx-auto my-10 max-w-2xl bg-[#FFFBEB]'>
                        {/* Header */}
                        <Section className='border-[3px] border-[#1A1A1A] bg-[#1A1A1A] px-8 py-6'>
                            <Heading className='m-0 text-center font-mono text-3xl font-extrabold uppercase text-[#FFE566]'>
                                ⚠️ NEW SUBMISSION
                            </Heading>
                            <Text className='m-0 text-center font-mono text-sm uppercase text-[#FFFBEB]'>
                                Admin Notification
                            </Text>
                        </Section>

                        {/* Main Content */}
                        <Section className='border-x-[3px] border-b-[3px] border-[#1A1A1A] bg-[#FFFBEB] px-8 py-8'>
                            <Heading className='mb-4 font-mono text-xl font-bold uppercase text-[#1A1A1A]'>
                                CHIP SUBMISSION DETAILS
                            </Heading>

                            {/* Submission Info */}
                            <Section className='mb-6 border-[3px] border-[#1A1A1A] bg-white p-4'>
                                <table className='w-full'>
                                    <tr>
                                        <td className='pb-2 font-mono text-sm font-bold uppercase text-[#1A1A1A]'>
                                            Brand:
                                        </td>
                                        <td className='pb-2 font-sans text-base text-[#1A1A1A]'>
                                            {brand}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='pb-2 font-mono text-sm font-bold uppercase text-[#1A1A1A]'>
                                            Chip Name:
                                        </td>
                                        <td className='pb-2 font-sans text-base text-[#1A1A1A]'>
                                            {chipName}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='pb-2 font-mono text-sm font-bold uppercase text-[#1A1A1A]'>
                                            Submitted By:
                                        </td>
                                        <td className='pb-2 font-sans text-base text-[#1A1A1A]'>
                                            <Link
                                                href={`mailto:${submitterEmail}`}
                                                className='text-[#FF5C35] underline'
                                            >
                                                {submitterEmail}
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className='pb-2 font-mono text-sm font-bold uppercase text-[#1A1A1A]'>
                                            Date:
                                        </td>
                                        <td className='pb-2 font-sans text-base text-[#1A1A1A]'>
                                            {new Date().toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })}
                                        </td>
                                    </tr>
                                </table>
                            </Section>

                            {/* Reason if provided */}
                            {reason && (
                                <Section className='mb-6'>
                                    <Text className='mb-2 font-mono text-sm font-bold uppercase text-[#1A1A1A]'>
                                        SUBMITTER&apos;S PITCH:
                                    </Text>
                                    <Section className='border-[3px] border-[#1A1A1A] bg-[#FFE566] p-4'>
                                        <Text className='m-0 font-serif text-base italic text-[#1A1A1A]'>
                                            &ldquo;{reason}&rdquo;
                                        </Text>
                                    </Section>
                                </Section>
                            )}

                            {/* Action Items */}
                            <Section className='mb-6 border-[3px] border-[#1A1A1A] bg-[#FF5C35] p-4'>
                                <Text className='mb-2 font-mono text-sm font-bold uppercase text-[#FFFBEB]'>
                                    REVIEW CHECKLIST:
                                </Text>
                                <Text className='m-0 mb-1 font-sans text-sm text-[#FFFBEB]'>
                                    ☐ Check if chip exists in database
                                </Text>
                                <Text className='m-0 mb-1 font-sans text-sm text-[#FFFBEB]'>
                                    ☐ Verify availability in market
                                </Text>
                                <Text className='m-0 mb-1 font-sans text-sm text-[#FFFBEB]'>
                                    ☐ Assess review worthiness
                                </Text>
                                <Text className='m-0 font-sans text-sm text-[#FFFBEB]'>
                                    ☐ Add to review queue if approved
                                </Text>
                            </Section>

                            {/* Quick Actions */}
                            <Section className='text-center'>
                                <Link
                                    href={`mailto:${submitterEmail}?subject=Re: Chip Submission - ${brand} ${chipName}`}
                                    className='mr-4 font-mono text-sm font-bold uppercase text-[#FF5C35] underline'
                                >
                                    Reply to Submitter
                                </Link>
                                <Link
                                    href='https://chipter.com/studio'
                                    className='font-mono text-sm font-bold uppercase text-[#FF5C35] underline'
                                >
                                    Open Sanity Studio
                                </Link>
                            </Section>
                        </Section>

                        {/* Footer */}
                        <Section className='border-x-[3px] border-b-[3px] border-[#1A1A1A] bg-[#666666] px-8 py-4'>
                            <Text className='m-0 text-center font-mono text-xs uppercase text-[#FFFBEB]'>
                                CHIPTER ADMIN NOTIFICATION
                            </Text>
                            <Text className='m-0 mt-1 text-center font-sans text-xs text-[#FFFBEB]'>
                                This is an internal notification for chip submission review
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}