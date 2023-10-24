/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

import Logo from "./Logo";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Popover className="relative bg-transparent w-full">
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="relative z-20">
        <div className="max-w-[1324px] mx-auto flex justify-between items-center px-5 py-5 sm:px-6 sm:py-4 w-full lg:px-0">
          <div>
            <a href="#" className="flex">
              <Logo />
              <span className=" font-montreal-medium text-xl ml-3">
                ReCycle®
              </span>
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:block font-montreal-medium text-gray-50">
            <Popover.Group as="nav" className="flex space-x-10 ">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-50" : "text-gray-100",
                        "grou rounded-md inline-flex items-center text-base font-medium hover:text-gray-300 focus:outline-none"
                      )}
                    >
                      <span>E-Bikes</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-50" : "text-gray-100",
                          "ml-2 h-5 w-5 group-hover:text-gray-200"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform bg-white">
                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {/* <div
                            className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                          >
                          </div> */}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <a href="#" className="text-base font-medium hover:text-gray-300">
                Specs
              </a>
              <a href="#" className="text-base font-medium hover:text-gray-300">
                Our impact
              </a>
            </Popover.Group>
          </div>
          <div className="hidden md:flex items-center">
            <button className="inline-flex items-center justify-center px-5 py-2 border border-transparent rounded-full text-base text-white bg-black hover:bg-gray-900">
              Order now
            </button>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <Logo />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 ">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4"></div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-1 gap-4">
                <a
                  href="#"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Specs
                </a>

                <a
                  href="#"
                  className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  Our impact
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Order now
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
