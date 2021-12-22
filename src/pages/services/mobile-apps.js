import React, {Component} from 'react';
import {Link} from "gatsby";
import Layout from "../../components/global/layout";
import {
    InboxIcon,
    TrashIcon, UserGroupIcon,
    UsersIcon,

} from '@heroicons/react/outline'
import ContactForm from "../../components/contact-form";
import TravelMockup from "../../images/travel-mockup.png";
import Logo from "../../images/dnd-logo.png";
import ReactNative from "../../images/react-native.webp"
import Expo from "../../images/expo.webp"
import AWS from "../../images/aws.webp"
import Firebase from "../../images/firebase.webp"
import Flutter from "../../images/flutter.webp"
import Swift from "../../images/swift.webp"
import AppsImage from "../../images/mobile-apps.png";
import Testimonial from "../../components/testimonial";

const features = [
    {
        name: 'Business-tailored architecture',
        description: 'Software architecture have to follow business logic and provide scalability for future growth. Our team knows it instinctively.',
        icon: InboxIcon,
    },
    {
        name: 'Built to Scale',
        description: 'Web development services full of custom solutions optimized for efficiency, flexibility and deployment speed',
        icon: UsersIcon,
    },
    {
        name: '360° Support',
        description: 'We build websites from the ground up, including hosting, page navigation,\n' +
            'features, SEO, and more. From A to Z, we cover all of your bases.',
        icon: TrashIcon,
    },
    {
        name: 'Complete Product Teams',
        description: 'Enjoy access to our Product Designers, Project Managers, QA Engineers, Business Analysts, DevOps, or Full-stack developers.',
        icon: UserGroupIcon,
    },
    {
        name: 'Quality Assurance',
        description: 'We do QA before each deploy through manual and automated tests that catch bugs, performance issues, and conversion blockers.',
        icon: TrashIcon,
    },
    {
        name: 'World-class UX/UI',
        description: 'Designed to help your business with user adoption.',
        icon: TrashIcon,
    },
]
const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]

class MobileApps extends Component {
    render() {
        return (
            <Layout>
                <main className="overflow-hidden">
                    {/* Hero section */}
                    <div>
                        <div>
                            {/* Hero card */}
                            <div className="relative">
                                <div className="absolute inset-x-0 bottom-0 h-1/2" />
                                <div className="mx-auto">
                                    <div className="relative sm:overflow-hidden">
                                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 lg:max-w-7xl sm:mx-auto text-center">
                                            <span className="uppercase text-sm font-medium text-accent">Mobile App Development</span>
                                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                                <span className="block">Mobile development that accelerates product growth</span>
                                            </h1>
                                            <p className="mt-6 mx-auto max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                                                By understanding your goals, staying consistent with your brand, and maintaining transparency throughout the entire process, we build secure, functional, and user-friendly apps.
                                            </p>
                                            <div className="mt-10 max-w-sm sm:mx-auto sm:max-w-none sm:flex ">
                                                <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                                                    <Link
                                                        to="/contact"
                                                        className="flex items-center justify-center px-3 py-2 bg-accent text-white rounded-3xl text-base font-medium shadow-sm hover:bg-blue sm:px-6"
                                                    >
                                                        Book a free consultation
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Approach Text */}
                    <section>
                        <div className="px-4 py-8 sm:px-6 sm:py-16 lg:py-16 lg:px-8 lg:max-w-7xl sm:mx-auto lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
                            <div className="">
                                <div className="mb-5">
                                    <h2>Conception-to-launch mobile development services</h2>
                                </div>
                                <div className="">
                                    <p className="font-light">Beneath the surface, there are countless factors that support the speed,
                                        functionality, and security of your website. Our seasoned developers
                                        understand the latest strategies to maximize the efficiency of your website
                                        while including the features that you need. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <br/>
                                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                            <div className="mt-12 sm:mt-16 lg:mt-0">
                                <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                                    <img
                                        className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                        src={AppsImage}
                                        alt="Inbox user interface"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Approach Text */}

                    <section className="pb-24 bg-white font-light">
                        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <h2 className="sr-only">A better way to send money.</h2>
                            <dl className="space-y-10 text-center sm:text-left lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                                {features.map((feature) => (
                                    <div key={feature.name} className="sm:flex">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                                            <feature.icon className="h-6 w-6 text-accent sm:mt-3 sm:mr-4" aria-hidden="true" />
                                        </div>
                                        <dt>
                                            <p className="mt-5 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                            <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                                        </dt>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </section>

                    {/* Frameworks */}
                    <section className="bg-white">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-5 max-w-3xl mx-auto mb-24">
                                <h2 className="text-3xl md:text-4xl pb-8">Choose battle-tested web development services with community support over hype</h2>
                                <p className="text-base sm:text-xl font-light">Whatever web applications you’re building, we got your back at every stage of web development, including web design. We’ve built a core system for a bank, an MVP marketplace sold for millions, and other 5☆ custom projects for 140+ companies worldwide. All in accordance with the client’s digital marketing strategy.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6 font-medium">
                                <div className="col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img className="h-12 mb-3" src={ReactNative} alt="Tuple" />
                                    </div>
                                    <div>
                                        <p>React Native</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-2 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img className="h-12 mb-3" src={Firebase} alt="Mirage" />
                                    </div>
                                    <div>
                                        <p>Firebase</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img
                                            className="h-12 mb-3"
                                            src={AWS}
                                            alt="Transistor"
                                        />
                                    </div>
                                    <div>
                                        <p>Amazon Web Services</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img
                                            className="h-12 mb-3"
                                            src={Expo}
                                            alt="Transistor"
                                        />
                                    </div>
                                    <div>
                                        <p>Expo</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img
                                            className="h-12 mb-3"
                                            src={Flutter}
                                            alt="Workcation"
                                        />
                                    </div>
                                    <div>
                                        <p>Flutter</p>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col justify-center md:col-span-3 lg:col-span-1 text-center">
                                    <div className="mx-auto">
                                        <img
                                            className="h-12 mb-3"
                                            src={Swift}
                                            alt="Workcation"
                                        />
                                    </div>
                                    <div>
                                        <p>Swift</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Frameworks */}

                    {/* Testimonial */}
                    <Testimonial />
                    {/* Testimonial */}

                    {/* Case Study */}
                    <section>
                        <div className="relative bg-travel-teal lg:pt-24 lg:pb-24">
                            <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                                <div className="h-full w-full xl:grid xl:grid-cols-2">
                                    <div className="h-full xl:relative xl:col-start-2 w-full hidden lg:block">
                                        <img
                                            className="my-auto h-3/4 w-full object-cover xl:absolute xl:inset-0 rounded"
                                            src={TravelMockup}
                                            alt="People working on laptops"
                                        />
                                        <div
                                            aria-hidden="true"
                                            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                                <div className="relative pt-12 pb-16 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24 text-center sm:text-left">
                                    <div className="mt-3 mb-7 text-3xl font-extrabold lg:mb-16">
                                        <img
                                            className="mx-auto h-16 sm:mx-0"
                                            src={Logo}
                                            alt="Doughnuts & Dragons Logo"
                                        />
                                    </div>
                                    <div>
                                        <h2 className="uppercase text-5xl tracking-tighter">Hustle Never Stops</h2>
                                    </div>
                                    <p className="mt-5 text-lg text-gray-300 md:mr-48">
                                        Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare
                                        feugiat viverra eleifend fusce orci in quis amet.
                                    </p>
                                    <div className="w-1/2 mx-auto sm:mx-0">
                                        <Link className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
                                            View Case Study
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Case Study */}

                    {/* Contact Form */}
                    <ContactForm />
                    {/* Contact Form */}
                </main>
            </Layout>
        );
    }
}

export default MobileApps;