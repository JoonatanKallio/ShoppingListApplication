import { DropdownMenu } from '@radix-ui/themes';
import { Home, KeyRound, List, LogIn, Menu, User } from 'lucide-react';

interface NavBarDropdownProps {
    isAuthenticated: boolean;
}

export default function NavbarDropdown({
    isAuthenticated,
}: NavBarDropdownProps) {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Menu />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content variant="soft">
                {isAuthenticated ? (
                    <>
                        <DropdownMenu.Item>
                            <Home />
                            Home
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <List />
                            Lists
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <User />
                            Profile
                        </DropdownMenu.Item>
                    </>
                ) : (
                    <>
                        <DropdownMenu.Item>
                            <LogIn />
                            Login
                        </DropdownMenu.Item>
                        <DropdownMenu.Item>
                            <KeyRound />
                            Register
                        </DropdownMenu.Item>
                    </>
                )}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}
