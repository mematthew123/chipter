import { SignIn } from '@clerk/nextjs';
import { signInAppearance } from '@/lib/clerk-appearance';

export default function SignInPage() {
    return (
        <div className='min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 bg-warm-white'>
            <div className='w-full max-w-md'>
                {/* Brutalist header */}
                <div className='mb-8 text-center'>
                    <h1 className='text-headline text-almost-black uppercase tracking-tight mb-2'>
                        Welcome Back
                    </h1>
                    <p className='font-serif italic text-lg text-gray'>
                        &quot;Your chips await your judgment.&quot;
                    </p>
                </div>

                {/* Main sign-in card */}
                <div className='card-brutal p-8 bg-warm-white'>
                    <SignIn appearance={signInAppearance} />
                </div>

                {/* Bottom decoration */}
                <div className='mt-8 text-center'>
                    <div className='inline-block border-t-[3px] border-almost-black pt-4'>
                        <p className='font-mono text-xs uppercase tracking-wider text-gray'>
                            Serious about snacks since 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}