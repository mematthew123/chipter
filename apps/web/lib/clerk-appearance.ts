import type { Appearance } from '@clerk/types';

export const clerkAppearance: Appearance = {
    baseTheme: undefined, // We're building our own theme from scratch
    layout: {
        socialButtonsPlacement: 'bottom',
        socialButtonsVariant: 'blockButton',
    },
    variables: {
        // Colors matching Chipter palette
        colorPrimary: '#FF5C35', // hot-orange
        colorDanger: '#FF5C35',
        colorSuccess: '#4CAF50', // fresh-green
        colorWarning: '#FFE566', // chip-yellow
        colorNeutral: '#666666', // gray

        // Text colors
        colorText: '#1A1A1A', // almost-black
        colorTextSecondary: '#666666', // gray
        colorTextOnPrimaryBackground: '#FFFBEB', // warm-white

        // Background colors
        colorBackground: '#FFFBEB', // warm-white
        colorInputBackground: '#FFFBEB', // warm-white

        // Border radius - all sharp corners for brutalism
        borderRadius: '0px',

        // Font family
        fontFamily: '"JetBrains Mono", monospace',
        fontFamilyButtons: '"JetBrains Mono", monospace',

        // Font weights
        fontWeight: {
            normal: 400,
            medium: 700,
            bold: 800,
        },

        // Font sizes
        fontSize: '14px',

        // Spacing
        spacingUnit: '4px',
    },
    elements: {
        // Root containers
        rootBox: 'w-full',
        card: 'shadow-none border-0 bg-transparent',
        cardBox: 'shadow-none',

        // Headers
        headerTitle: 'hidden',
        headerSubtitle: 'hidden',

        // Form containers
        form: 'space-y-6',
        formHeader: 'space-y-2',

        // Form fields
        formFieldInput: `
            border-[3px] border-almost-black
            focus:outline-none focus:shadow-[2px_2px_0px_rgba(26,26,26,1)]
            rounded-none bg-warm-white px-3 py-2
            font-mono text-sm
            placeholder:text-gray placeholder:uppercase placeholder:text-xs
            transition-all duration-200
        `,
        formFieldLabel: `
            font-mono font-bold uppercase
            tracking-wide text-almost-black
            text-xs mb-2 block
        `,
        formFieldInputShowPasswordButton: `
            font-mono text-xs uppercase
            text-gray hover:text-hot-orange
            transition-colors duration-200
        `,
        formFieldAction: `
            font-mono text-xs uppercase
            text-hot-orange hover:text-almost-black
            transition-colors duration-200
        `,
        formFieldError: `
            font-mono text-xs text-hot-orange
            mt-1 uppercase tracking-wide
        `,
        formFieldSuccessText: `
            font-mono text-xs text-fresh-green
            mt-1 uppercase tracking-wide
        `,

        // Buttons
        formButtonPrimary: `
            bg-hot-orange hover:bg-hot-orange
            hover:-translate-x-0.5 hover:-translate-y-0.5
            hover:shadow-[4px_4px_0px_rgba(26,26,26,1)]
            text-warm-white border-[3px] border-almost-black
            font-mono font-bold uppercase tracking-wide
            transition-all duration-200 rounded-none
            px-6 py-3 text-sm
            active:translate-x-0 active:translate-y-0 active:shadow-none
        `,
        formButtonReset: `
            border-[3px] border-almost-black
            hover:-translate-x-0.5 hover:-translate-y-0.5
            hover:shadow-[4px_4px_0px_rgba(26,26,26,1)]
            bg-warm-white text-almost-black
            font-mono font-bold uppercase tracking-wide
            transition-all duration-200 rounded-none
            px-6 py-3 text-sm
        `,

        // Social buttons
        socialButtonsBlockButton: `
            border-[3px] border-almost-black
            hover:-translate-x-0.5 hover:-translate-y-0.5
            hover:shadow-[4px_4px_0px_rgba(26,26,26,1)]
            transition-all duration-200 rounded-none
            bg-warm-white font-mono font-bold
            text-almost-black py-3
        `,
        socialButtonsBlockButtonText: `
            font-mono font-bold uppercase
            tracking-wide text-xs
        `,
        socialButtonsIconButton: `
            border-[3px] border-almost-black
            hover:-translate-x-0.5 hover:-translate-y-0.5
            hover:shadow-[4px_4px_0px_rgba(26,26,26,1)]
            transition-all duration-200 rounded-none
            bg-warm-white p-3
        `,

        // Divider
        dividerRow: 'my-6',
        dividerLine: 'bg-almost-black h-[3px]',
        dividerText: 'font-mono uppercase text-xs text-gray bg-warm-white px-3',

        // Footer
        footer: 'space-y-4',
        footerAction: 'flex items-center justify-center gap-2',
        footerActionText: 'font-mono text-xs text-gray uppercase',
        footerActionLink: `
            text-hot-orange hover:text-almost-black
            font-mono font-bold uppercase
            tracking-wide text-xs
            transition-colors duration-200
        `,
        footerPages: 'mt-8',
        footerPagesLink: `
            font-mono text-xs uppercase
            text-gray hover:text-hot-orange
            transition-colors duration-200
        `,

        // OTP/Code inputs
        otpCodeFieldInput: `
            border-[3px] border-almost-black
            rounded-none font-mono text-center
            text-lg font-bold
            focus:outline-none focus:shadow-[2px_2px_0px_rgba(26,26,26,1)]
        `,
        otpCodeFieldInputs: 'gap-3',
        formResendCodeLink: `
            text-hot-orange hover:text-almost-black
            font-mono text-xs uppercase
            transition-colors duration-200
        `,

        // Identity preview
        identityPreview: `
            border-[3px] border-almost-black
            rounded-none p-4 bg-warm-white
        `,
        identityPreviewText: 'font-mono text-sm',
        identityPreviewEditButton: `
            text-hot-orange hover:text-almost-black
            font-mono text-xs uppercase
            transition-colors duration-200
        `,

        // Alert/Message boxes
        alert: `
            border-[3px] border-almost-black
            rounded-none p-4 bg-chip-yellow
            font-mono text-xs uppercase
        `,
        alertText: 'text-almost-black',

        // User button specific
        userButtonBox: 'border-[3px] border-almost-black rounded-none',
        userButtonTrigger: 'focus:shadow-[2px_2px_0px_rgba(26,26,26,1)]',
        userButtonAvatarBox: 'size-10 border-[3px] border-almost-black rounded-none',
        userButtonPopoverCard: `
            border-[3px] border-almost-black
            rounded-none shadow-[4px_4px_0px_rgba(26,26,26,1)]
            bg-warm-white
        `,
        userButtonPopoverActions: 'border-t-[3px] border-almost-black pt-2',
        userButtonPopoverActionButton: `
            font-mono text-xs uppercase
            hover:bg-chip-yellow transition-colors
            px-3 py-2 text-left w-full
        `,
        userButtonPopoverActionButtonText: 'text-almost-black',
        userButtonPopoverActionButtonIcon: 'text-hot-orange',
        userButtonPopoverFooter: 'border-t-[3px] border-almost-black pt-2',

        // User profile
        userProfileSection: 'border-b-[3px] border-almost-black pb-6',
        userProfileSectionHeader: 'font-mono font-bold uppercase text-sm mb-4',
        userProfileSectionContent: 'space-y-4',
        userProfileFormButtonPrimary: `
            bg-hot-orange hover:bg-hot-orange
            hover:-translate-x-0.5 hover:-translate-y-0.5
            hover:shadow-[4px_4px_0px_rgba(26,26,26,1)]
            text-warm-white border-[3px] border-almost-black
            font-mono font-bold uppercase tracking-wide
            transition-all duration-200 rounded-none
            px-4 py-2 text-xs
        `,

        // Navbar (for multi-step forms)
        navbar: 'border-b-[3px] border-almost-black',
        navbarButton: `
            font-mono text-xs uppercase
            px-4 py-3 hover:bg-chip-yellow
            transition-colors duration-200
        `,
        navbarButtonActive: 'bg-hot-orange text-warm-white',

        // Badges
        badge: `
            inline-flex items-center px-2 py-1
            border-[3px] border-almost-black
            font-mono text-xs uppercase font-bold
        `,
        badgePrimary: 'bg-hot-orange text-warm-white',
        badgeSecondary: 'bg-chip-yellow text-almost-black',
        badgeSuccess: 'bg-fresh-green text-warm-white',

        // Loading states
        spinner: 'text-hot-orange',
        loadingText: 'font-mono text-xs uppercase text-gray',

        // Tabs
        tabButton: `
            font-mono text-xs uppercase
            px-4 py-3 border-b-[3px] border-transparent
            hover:border-almost-black transition-all
        `,
        tabButtonActive: 'border-almost-black text-hot-orange',

        // Tables
        tableHead: 'border-b-[3px] border-almost-black',
        tableHeadCell: 'font-mono text-xs uppercase font-bold p-3',
        tableCell: 'font-mono text-sm p-3 border-b-[3px] border-almost-black',

        // Modals
        modalBackdrop: 'bg-almost-black/50',
        modalContent: `
            border-[3px] border-almost-black
            rounded-none shadow-[8px_8px_0px_rgba(26,26,26,1)]
            bg-warm-white
        `,
        modalHeader: 'border-b-[3px] border-almost-black p-6',
        modalCloseButton: `
            hover:-translate-x-0.5 hover:-translate-y-0.5
            transition-all duration-200
        `,

        // Alternative buttons (secondary actions)
        alternativeMethodsBlockButton: `
            border-[3px] border-almost-black
            hover:-translate-x-0.5 hover:-translate-y-0.5
            hover:shadow-[4px_4px_0px_rgba(26,26,26,1)]
            transition-all duration-200 rounded-none
            bg-warm-white font-mono text-xs
            uppercase py-3
        `,

        // Back button
        backRow: 'mb-6',
        backLink: `
            font-mono text-xs uppercase
            text-gray hover:text-hot-orange
            transition-colors duration-200
            flex items-center gap-2
        `,
    }
};

// Export individual component appearances for flexibility
export const signInAppearance: Appearance = {
    ...clerkAppearance,
    elements: {
        ...clerkAppearance.elements,
        // Any sign-in specific overrides
    }
};

export const signUpAppearance: Appearance = {
    ...clerkAppearance,
    elements: {
        ...clerkAppearance.elements,
        // Any sign-up specific overrides
    }
};

export const userButtonAppearance: Appearance = {
    ...clerkAppearance,
    elements: {
        ...clerkAppearance.elements,
        // Enhanced UserButton and UserProfile modal styling
        userButtonBox: 'size-10 border-[3px] border-almost-black rounded-none bg-warm-white hover:shadow-[2px_2px_0px_rgba(26,26,26,1)] transition-all',
        userButtonAvatarBox: 'rounded-none border-[3px] border-almost-black',
        userButtonAvatarImage: 'rounded-none',

        // UserButton dropdown menu
        userButtonPopoverCard: `
            border-[3px] border-almost-black rounded-none
            shadow-[6px_6px_0px_rgba(26,26,26,1)] bg-warm-white
            min-w-[280px]
        `,
        userButtonPopoverMain: 'p-0',
        userButtonPopoverActions: `
            border-t-[3px] border-almost-black p-0
        `,
        userButtonPopoverActionButton: `
            font-mono text-xs uppercase font-bold
            hover:bg-chip-yellow px-4 py-3
            text-left w-full transition-colors duration-200
            border-b-[3px] border-almost-black last:border-b-0
        `,
        userButtonPopoverActionButtonText: 'text-almost-black',
        userButtonPopoverActionButtonIcon: 'text-hot-orange size-4',
        userButtonPopoverFooter: `
            border-t-[3px] border-almost-black p-4
            bg-gray/10
        `,

        // UserProfile Modal (Manage Account)
        userProfileBox: 'max-w-4xl mx-auto',
        userProfilePageScrollBox: 'bg-warm-white',
        userProfilePage: 'min-h-[600px] bg-warm-white',

        // Modal container
        modalContent: `
            border-[3px] border-almost-black rounded-none
            shadow-[8px_8px_0px_rgba(26,26,26,1)] bg-warm-white
            max-w-4xl w-full
        `,
        modalCloseButton: `
            size-8 border-[3px] border-almost-black rounded-none
            hover:-translate-x-0.5 hover:-translate-y-0.5
            hover:shadow-[2px_2px_0px_rgba(26,26,26,1)]
            transition-all duration-200 bg-warm-white
        `,

        // Profile sections
        profileSection: `
            border-b-[3px] border-almost-black pb-6 mb-6
            last:border-b-0
        `,
        profileSectionHeader: `
            font-mono font-bold uppercase text-sm
            tracking-wide mb-4 text-almost-black
        `,
        profileSectionContent: 'space-y-4',
        profileSectionPrimaryButton: `
            bg-hot-orange hover:bg-hot-orange
            hover:-translate-x-0.5 hover:-translate-y-0.5
            hover:shadow-[4px_4px_0px_rgba(26,26,26,1)]
            text-warm-white border-[3px] border-almost-black
            font-mono font-bold uppercase tracking-wide
            transition-all duration-200 rounded-none
            px-4 py-2 text-xs
        `,

        // Avatar upload section
        avatarBox: 'size-24 border-[3px] border-almost-black rounded-none',
        avatarImage: 'rounded-none',
        avatarImageActionsContainer: 'mt-3',

        // Sidebar navigation
        navbarMobileMenuButton: `
            border-[3px] border-almost-black rounded-none
            p-2 hover:bg-chip-yellow
        `,
        navbarMobileMenuRow: 'border-b-[3px] border-almost-black p-4',

        scrollBox: 'bg-warm-white',
        pageScrollBox: 'bg-warm-white p-6',

        navbar: `
            border-b-[3px] border-almost-black bg-warm-white
            sticky top-0 z-10
        `,
        navbarButton: `
            font-mono text-xs uppercase font-bold
            px-4 py-4 hover:bg-chip-yellow
            transition-colors duration-200
            border-r-[3px] border-almost-black last:border-r-0
        `,
        navbarButtonActive: `
            bg-hot-orange text-warm-white
            hover:bg-hot-orange
        `,

        // Page headers
        headerTitle: `
            font-mono font-extrabold uppercase text-2xl
            tracking-tight text-almost-black
        `,
        headerSubtitle: `
            font-mono text-xs uppercase text-gray
            tracking-wide mt-2
        `,

        // Form fields in profile
        formFieldRow: 'mb-4',
        formContainer: 'space-y-6',

        // Action cards (for adding email, phone, etc.)
        accordionPanel: `
            border-[3px] border-almost-black rounded-none
            mb-4 bg-warm-white
        `,
        accordionTriggerButton: `
            w-full p-4 text-left font-mono text-sm
            font-bold uppercase hover:bg-chip-yellow
            transition-colors duration-200
            flex items-center justify-between
        `,
        accordionContent: 'p-4 border-t-[3px] border-almost-black',

        // List items (emails, devices, etc.)
        identificationLink: `
            border-[3px] border-almost-black rounded-none
            p-4 mb-3 hover:shadow-[2px_2px_0px_rgba(26,26,26,1)]
            transition-all duration-200 block bg-warm-white
        `,
        identityPreviewContainer: 'flex items-center justify-between',

        // Badges in profile
        badge: `
            inline-flex items-center px-2 py-1
            border-[3px] border-almost-black rounded-none
            font-mono text-xs uppercase font-bold
        `,
        badgePrimary: 'bg-hot-orange text-warm-white border-almost-black',
        badgeSecondary: 'bg-chip-yellow text-almost-black border-almost-black',

        // Delete account section
        dangerSection: `
            border-[3px] border-hot-orange rounded-none
            p-4 bg-hot-orange/10
        `,

        // Connected accounts
        socialButtonsIconButton: `
            border-[3px] border-almost-black rounded-none
            p-2 hover:-translate-x-0.5 hover:-translate-y-0.5
            hover:shadow-[2px_2px_0px_rgba(26,26,26,1)]
            transition-all duration-200
        `,

        // File upload
        fileDropAreaBox: `
            border-[3px] border-dashed border-almost-black
            rounded-none p-8 text-center
            hover:border-hot-orange transition-colors
        `,
        fileDropAreaHint: 'font-mono text-xs uppercase text-gray',
        fileDropAreaFooterHint: 'font-mono text-xs text-gray mt-2',

        // Action buttons in lists
        menuButton: `
            border-[3px] border-almost-black rounded-none
            p-1 hover:bg-chip-yellow transition-colors
        `,
        menuList: `
            border-[3px] border-almost-black rounded-none
            shadow-[4px_4px_0px_rgba(26,26,26,1)]
            bg-warm-white p-0 overflow-hidden
        `,
        menuItem: `
            font-mono text-xs uppercase px-4 py-3
            hover:bg-chip-yellow transition-colors
            border-b-[3px] border-almost-black last:border-b-0
        `,
    }
};