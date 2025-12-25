import NewsletterWelcome from '@/app/emails/NewsletterWelcome';

export default function EmailPreviewPage() {
    return (
        <div className='min-h-screen bg-gray-100 p-8'>
            <div className='max-w-4xl mx-auto'>
                <div className='bg-white rounded-lg shadow-lg p-6 mb-6'>
                    <h1 className='font-mono font-bold text-2xl uppercase text-almost-black mb-2'>
                        EMAIL TEMPLATE PREVIEW
                    </h1>
                    <p className='text-gray-600 mb-4'>
                        Development preview of the newsletter welcome email
                    </p>
                    <div className='border-t-[3px] border-almost-black pt-4'>
                        <p className='font-mono text-sm'>
                            <strong>Template:</strong> NewsletterWelcome.tsx
                        </p>
                        <p className='font-mono text-sm'>
                            <strong>Test Email:</strong> test@example.com
                        </p>
                    </div>
                </div>

                <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
                    <div className='border-[3px] border-almost-black'>
                        <NewsletterWelcome email='test@example.com' />
                    </div>
                </div>
            </div>
        </div>
    );
}
