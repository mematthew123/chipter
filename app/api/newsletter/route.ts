import { Resend } from 'resend';
import NewsletterWelcome from '@/app/emails/NewsletterWelcome';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        console.log('Newsletter signup for:', email);

        // Validate email
        if (!email) {
            return Response.json(
                { error: 'Email is required' },
                { status: 400 },
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return Response.json(
                { error: 'Please provide a valid email address' },
                { status: 400 },
            );
        }

        console.log('Sending welcome email via Resend...');

        // TODO: For production with Resend:
        // 1. Verify your domain at resend.com/domains
        // 2. Update 'from' to use your domain (e.g., 'newsletter@chipter.com')
        // 3. Change 'to' from admin email to subscriber email: to: [email]
        // 4. Remove the replyTo field (no longer needed)
        // 5. Consider adding email to a database or list provider

        // Currently sends to admin email for testing (works without domain verification)
        const { data, error } = await resend.emails.send({
            from: 'Chipter Newsletter <onboarding@resend.dev>',
            to: ['hello@zephyrpixels.dev'], // Your verified email
            replyTo: email, // Subscriber's email for easy reply
            subject: `New Chipter newsletter signup: ${email}`,
            react: NewsletterWelcome({ email }),
        });

        if (error) {
            console.error('Resend error:', error);
            return Response.json(
                { error: 'Failed to subscribe. Please try again.' },
                { status: 500 },
            );
        }

        console.log('Newsletter signup processed successfully:', data);

        // In production with verified domain:
        // 1. Send actual welcome email to subscriber
        // 2. Save email to database
        // 3. Add to email list provider
        // 4. Handle duplicate signups

        return Response.json({
            success: true,
            message: 'Thanks for subscribing! We got your signup.',
            data,
        });
    } catch (error) {
        console.error('Server error:', error);
        return Response.json(
            { error: 'An unexpected error occurred' },
            { status: 500 },
        );
    }
}
