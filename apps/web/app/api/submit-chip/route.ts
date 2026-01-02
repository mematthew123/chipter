import { Resend } from 'resend';
import ChipSubmissionConfirmation from '@/app/emails/ChipSubmissionConfirmation';
import ChipSubmissionAdmin from '@/app/emails/ChipSubmissionAdmin';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { chipName, brand, reason, email } = await request.json();

        console.log('Chip submission received:', { chipName, brand, email });

        // Validate required fields
        if (!chipName || !brand || !email) {
            return Response.json(
                { error: 'Chip name, brand, and email are required' },
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

        console.log('Sending chip submission emails via Resend...');

        // Send admin notification email
        const { data: adminData, error: adminError } = await resend.emails.send({
            from: 'Chipter Submissions <onboarding@resend.dev>',
            to: ['hello@zephyrpixels.dev'], // Your admin email
            subject: `New Chip Submission: ${brand} ${chipName}`,
            react: ChipSubmissionAdmin({
                chipName,
                brand,
                reason,
                submitterEmail: email,
            }),
        });

        if (adminError) {
            console.error('Resend admin email error:', adminError);
            // Don't fail the submission if admin email fails
            // Continue to send confirmation to user
        }

        // Send confirmation email to submitter
        // TODO: For production with verified domain:
        // 1. Verify your domain at resend.com/domains
        // 2. Update 'from' to use your domain (e.g., 'submissions@chipter.com')
        // 3. Change 'to' to the actual submitter email: to: [email]
        // 4. Remove the replyTo field

        // Currently sends to admin email with replyTo for testing
        const { data: confirmData, error: confirmError } = await resend.emails.send({
            from: 'Chipter <onboarding@resend.dev>',
            to: ['hello@zephyrpixels.dev'], // Change to [email] in production
            replyTo: email, // Submitter's email for easy reply
            subject: `Chip Submission Received: ${brand} ${chipName}`,
            react: ChipSubmissionConfirmation({
                chipName,
                brand,
                reason,
            }),
        });

        if (confirmError) {
            console.error('Resend confirmation email error:', confirmError);
            return Response.json(
                { error: 'Failed to process submission. Please try again.' },
                { status: 500 },
            );
        }

        console.log('Chip submission processed successfully:', {
            adminData,
            confirmData,
        });

        // TODO: In production, consider:
        // 1. Saving submission to database
        // 2. Creating a Sanity document for tracking
        // 3. Adding to a review queue system
        // 4. Implementing rate limiting to prevent spam

        return Response.json({
            success: true,
            message: 'Chip submitted for review. We take our responsibility seriously.',
            data: {
                chipName,
                brand,
                submittedAt: new Date().toISOString(),
            },
        });
    } catch (error) {
        console.error('Server error:', error);
        return Response.json(
            { error: 'An unexpected error occurred' },
            { status: 500 },
        );
    }
}