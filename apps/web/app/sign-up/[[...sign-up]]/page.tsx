import { SignUp } from '@clerk/nextjs';
import { signUpAppearance } from '@/lib/clerk-appearance';

export default function SignUpPage() {
    return (
        <div className='min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12 bg-warm-white'>
            <div className='w-full max-w-md'>
                {/* Brutalist header */}
                <div className='mb-8 text-center'>
                    <h1 className='text-headline text-almost-black uppercase tracking-tight mb-2'>
                        Join the Crunch
                    </h1>
                    <p className='font-serif italic text-lg text-gray'>
                        "Every chip deserves a critic."
                    </p>
                </div>

                {/* Main sign-up card */}
                <div className='card-brutal p-8 bg-warm-white'>
                    <SignUp appearance={signUpAppearance} />
                </div>

                {/* Bottom decoration */}
                <div className='mt-8 text-center'>
                    <div className='inline-block border-t-[3px] border-almost-black pt-4'>
                        <p className='font-mono text-xs uppercase tracking-wider text-gray'>
                            No chip left unreviewed
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}