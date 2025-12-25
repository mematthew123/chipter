// This file allows you to preview your email template in development
// Visit http://localhost:3000/emails/preview to see it

import NewsletterWelcome from './NewsletterWelcome';

export default function EmailPreview() {
    return (
        <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
            <h1>Email Template Preview</h1>
            <p>Below is how your welcome email will look:</p>
            <hr />
            <div style={{ border: '1px solid #ccc', padding: '20px' }}>
                <NewsletterWelcome email='test@example.com' />
            </div>
        </div>
    );
}
