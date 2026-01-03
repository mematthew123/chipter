# UserProfile Modal vs Navigation Mode

## Current Setup (Modal - Default)
The UserProfile opens as a modal when users click "Manage Account" from the UserButton dropdown. This is the default behavior and what's currently configured.

## To Switch to Navigation Mode (Dedicated Page)
If you prefer users to navigate to a dedicated page instead of opening a modal:

1. **Update environment variables in `.env`:**
```env
# Uncomment this line
NEXT_PUBLIC_CLERK_USER_PROFILE_URL=/user-profile
```

2. **Update UserButton in `Header.tsx`:**
Change from:
```tsx
<UserButton
    appearance={userButtonAppearance}
    userProfileMode="modal"
>
```
To:
```tsx
<UserButton
    appearance={userButtonAppearance}
    userProfileMode="navigation"
    userProfileUrl="/user-profile"
>
```

3. **The dedicated page is already set up at:**
`/user-profile` - This page displays the full UserProfile component

## Custom Pages Added
Both modal and dedicated page modes include these custom Chipter pages:

- **My Reviews** - View and manage your chip review history
- **Saved Chips** - Your watchlist of chips to try
- **Preferences** - Customize your chip preferences and notifications
- **Stats** - View your Chipter achievements and statistics
- **Submit a Chip** - Quick link to submit a new chip for review
- **Account** - Default Clerk account settings
- **Security** - Default Clerk security settings

The custom pages appear first in the navigation, followed by the default Clerk pages.