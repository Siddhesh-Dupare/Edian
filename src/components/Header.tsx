import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

import KeyButtonBottom from "@/assets/key-button-bottom.svg"

const Header = () => {
    return (
        <>
            <header className="w-full border-b-2 border-dark p-2 md:p-4 lg:p-6 relative">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-2xl">
                        <h1>Edian</h1>
                    </div>

                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="./" className="text-lg">
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="./" className="text-lg">
                                    What We Offer?
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="./" className="text-lg">
                                    Features
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="./" className="text-lg">
                                    How It Works?
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="./" className="text-lg">
                                    Impact/Vision
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div>
                        <Button className="mr-2">Sign Up</Button>
                        <Button className="ml-2">Sign In</Button>
                    </div>
                </div>

                <div className="lg:hidden absolute -bottom-4 bg-zinc-200 w-5/6 mx-auto left-0 right-0">
                    <div className="">
                        <img src={KeyButtonBottom} alt="key-buttom-bottom" className="ml-auto" />
                    </div>
                </div>
            </header >

        </>
    );
}

export default Header;
