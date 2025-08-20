
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import HeroImage from "@/assets/hero-section.png"
import OfferImage from "@/assets/offer-section.png"
import OpenBook from "@/assets/svg/open-book.svg"
import World from "@/assets/svg/world.svg"
import Suitcase from "@/assets/svg/suitcase.svg"
import RoboFace from "@/assets/svg/robo-face.svg"
import Language from "@/assets/svg/language.svg"
import StockUp from "@/assets/svg/stock-up.svg"
import Checklist from "@/assets/svg/checklist.svg"
import Line from "@/assets/svg/straight-line.svg"
import ArrowLine from "@/assets/svg/arrow-line.svg"
import Brain from "@/assets/svg/brain.svg"
import Stock from "@/assets/svg/stock.svg"
import { NavLink } from "react-router"

import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu"
import { NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu"

const LandingPage = () => {
    return (
        <>
            <Header />

            <section id="hero" className="px-4 py-12 h-10/10">
                <div className="flex gap-8 justify-center items-center flex-col-reverse lg:flex-row lg:gap-20">
                    <div className="flex justify-center">
                        <img src={HeroImage} alt="A girl with a laptop" className="w-full max-w-lg h-auto" />
                    </div>
                    <div className="w-full lg:w-1/2 max-w-lg text-center lg:text-left">
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">Learn Smarter, Not Harder</h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">AI-powered learning tailored to your pace, language, and goals.</p>
                        <Button className="mt-8 cursor-pointer">Create Account</Button>
                    </div>
                </div>
            </section>

            <section id="offer" className="px-4 py-12 h-10/10">
                <div className="flex gap-8 justify-center items-center flex-col lg:flex-row lg:gap-20">
                    <div className="w-full lg:w-1/2 max-w-lg text-center lg:text-left">
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">Education Shouldn't Be One-Size-FitsAll</h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600">Most learners struggle because education platforms are rigid</p>
                        
                        <div className="mt-6 text-left">
                            <div className="flex gap-5 flex items-center">
                                <img src={ OpenBook } alt="Open book SVG" className="max-w-[30px] h-auto" />
                                <p className="text-sm sm:text-xl lg:text-2xl text-gray-700">The same content for fast and slow learners.</p>
                            </div>
                            <div className="flex gap-5 flex justify-left items-center my-3">
                                <img src={ World } alt="World SVG" className="max-w-[30px] h-auto" />
                                <p className="text-sm sm:text-xl lg:text-2xl text-gray-700">Limited support for regional languages.</p>
                            </div>
                            <div className="flex gap-5 flex justify-left items-center my-3">
                                <img src={ Suitcase } alt="World SVG" className="max-w-[30px] h-auto" />
                                <p className="text-sm sm:text-xl lg:text-2xl text-gray-700">No direct link to career opportunities.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img src={OfferImage} alt="What we offer template" className="w-full max-w-lg h-auto" />
                    </div>
                </div>
            </section>

            <section id="features" className="px-4 py-12 h-10/10">
                <div className="flex gap-8 justify-center items-center flex-col lg:gap-20">
                    <div className="w-full max-w-lg text-center">
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl">What Makes Us Different?</h1>
                    </div>

                    <div className="w-full flex flex-col lg:max-w-6xl lg:grid grid-cols-2 grid-rows-2 gap-4">
                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex items-center gap-8">
                                    <img src={ RoboFace } alt="Robot Face" className="w-[40px] lg:max-w-[60px]"/>
                                    <CardTitle className="text-xl lg:text-2xl">Adaptive AI Tutor</CardTitle>
                                </div>
                            </CardHeader>
                            <CardDescription className="flex justify-center">
                                <p className="text-lg text-center">Lessons and quizzes that adjust to your learning style</p>
                            </CardDescription>
                        </Card>

                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex items-center gap-8">
                                    <img src={ Language } alt="Robot Face" className="w-[40px] lg:max-w-[60px]"/>
                                    <CardTitle className="text-xl lg:text-2xl">Multi-Language Support</CardTitle>
                                </div>
                            </CardHeader>
                            <CardDescription className="flex justify-center">
                                <p className="text-lg text-center">Learn in English, Hindi, Marathi, or more</p>
                            </CardDescription>
                        </Card>

                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex items-center gap-8">
                                    <img src={ StockUp } alt="Robot Face" className="w-[40px] lg:max-w-[60px]"/>
                                    <CardTitle className="text-xl lg:text-2xl">Skill Gap Tracker</CardTitle>
                                </div>
                            </CardHeader>
                            <CardDescription className="flex justify-center">
                                <p className="text-lg text-center">See your strengths and areas for improvement</p>
                            </CardDescription>
                        </Card>

                        <Card className="w-full">
                            <CardHeader>
                                <div className="flex items-center gap-8">
                                    <img src={ Suitcase } alt="Robot Face" className="w-[40px] lg:max-w-[60px]"/>
                                    <CardTitle className="text-xl lg:text-2xl">Career Path Guidance</CardTitle>
                                </div>
                            </CardHeader>
                            <CardDescription className="flex justify-center">
                                <p className="text-lg text-center">From learning to job opportunities</p>
                            </CardDescription>
                        </Card>
                        
                    </div>
                </div>
            </section>

            <section id="work" className="px-4 py-12 h-screen">
                <div className="flex gap-8 justify-center items-center flex-col">
                    <div className="w-full max-w-lg text-center">
                        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">Your Learning Journey in 3 Steps</h1>
                    </div>

                    <div className="lg:w-lg">
                        <div className="flex items-center justify-between my-1">
                            <img src={ Checklist } alt="Checklist" className="w-[50px] h-auto" />
                            <img src={ Line } alt="Straight Line" className="w-[60px] h-auto rotate-90" />
                            <div className="flex flex-col text-center lg:text-left">
                                <h2 className="font-bold text-lg">Sign Up</h2>
                                <p className="">Choose your skill goal and language preference</p>
                            </div>
                        </div>

                        <img src={ ArrowLine } alt="Arrow Line" className="w-[60px] rotate-90" />

                        <div className="flex items-center justify-between my-1">
                            <img src={ Brain } alt="Checklist" className="w-[50px] h-auto" />
                            <img src={ Line } alt="Straight Line" className="w-[60px] h-auto rotate-90" />
                            <div className="flex flex-col text-center lg:text-left lg:mr-14">
                                <h2 className="font-bold text-lg">Learn With AI</h2>
                                <p className="">Interactive lessons and adaptive quizzes</p>
                            </div>
                        </div>

                        <img src={ ArrowLine } alt="Arrow Line" className="w-[60px] rotate-90" />

                        <div className="flex items-center justify-between my-1">
                            <img src={ Stock } alt="Checklist" className="w-[50px] h-auto" />
                            <img src={ Line } alt="Straight Line" className="w-[60px] h-auto rotate-90 lg:ml-8" />
                            <div className="flex flex-col text-center lg:text-left lg:ml-8">
                                <h2 className="font-bold text-lg">Grow</h2>
                                <p className="">Get personalized career suggestions and opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Header() {
    return (
        <>
            <header className="w-full border-b-2 border-dark p-2 md:p-4 lg:p-5 relative">
                <div className="flex justify-between items-center">
                    <div className="font-bold text-2xl">
                        <h1>Edian</h1>
                    </div>

                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavMenuButton link="./" menuName="Home" />
                            <NavMenuButton link="./" menuName="What We Offer?" />
                            <NavMenuButton link="./" menuName="Features" />
                            <NavMenuButton link="./" menuName="How It Works?" />
                            <NavMenuButton link="./" menuName="Impact/Vision" />
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div>
                        <NavLink to="/signup">
                            <Button className="mr-1 sm:mr-2 cursor-pointer">Sign Up</Button>
                        </NavLink>
                        <Button className="ml-1 sm:ml-2 cursor-pointer">Sign In</Button>
                    </div>
                </div>

            </header >
        </>
    );
}

type NavMenuButtonPageProps = {
    link: string;
    menuName: string;
}

const NavMenuButton: React.FC<NavMenuButtonPageProps> = ({ link, menuName }) => {
    return (
        <>
            <NavigationMenuItem>
                <NavigationMenuLink href={link} className="text-lg">
                    {menuName}
                </NavigationMenuLink>
            </NavigationMenuItem>
        </>
    );
}

export default LandingPage;