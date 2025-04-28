"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { skillsData, type Skill } from "@/types/data";
import IconsBundle from "../social-icons";
function filterSkillsData(skillsData: Skill[]) {
  const acc: Record<string, Skill[]> = { "Most Used": [] };

  skillsData.forEach((skill) => {
    if (!skill.hidden) {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);

      if (skill.mostUsed) {
        acc["Most Used"].push(skill);
      }
    }
  });

  return acc;
}

export function Technologies() {
  const filteredSkillsData = filterSkillsData(skillsData);
  const categories = Object.keys(filteredSkillsData);
  const [tabIndex, setTabIndex] = useState(0);

  const onNextTab = () => {
    setTabIndex((prev) => (prev + 1) % categories.length);
  };

  const onPrevTab = () => {
    setTabIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="my-10 w-full">
      <h3 className="text-2xl font-extrabold leading-9 tracking-tight sm:text-3xl md:text-4xl">
        Technologies I&apos;ve worked with
      </h3>

      <div className="mt-5">
        <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
          <Tab.List className="grid w-full grid-cols-2 gap-2 md:grid-cols-5">
            {categories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `rounded-md px-4 py-2 text-sm font-medium transition ${
                    selected
                      ? category === "Most Used"
                        ? "bg-gradient-to-tr from-blue-300 via-sky-300 to-cyan-300 text-slate-900"
                        : "bg-gray-200 text-gray-900"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  } ${
                    category === "Most Used" ? "col-span-2 md:col-span-1" : ""
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="mt-6">
            {categories.map((category) => (
              <Tab.Panel
                key={category}
                className="rounded-lg border border-gray-200 p-4 shadow-sm"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-semibold">{category}</h4>
                  {category === "Most Used" && (
                    <p className="text-sm text-gray-500">
                      These are my most used technologies.
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-5 gap-4 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-10">
                  {filteredSkillsData[category].map((skill) => (
                    <div key={skill.id} className="relative group">
                      <button
                        className={`flex h-14 w-14 items-center justify-center rounded-md  bg-white dark:bg-black p-2 text-gray-700 shadow-sm hover:bg-gray-50 ${
                          skill.level === "learning" ? "border-green-300" : ""
                        }`}
                      >
                        <IconsBundle
                          kind={skill.id}
                          size={10}
                          iconType="icon"
                        />
                      </button>
                      <div className="absolute inset-x-0 bottom-full mb-2 hidden w-max max-w-[150px] -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white group-hover:block left-1/2">
                        {skill.name}
                      </div>
                    </div>
                  ))}
                </div>

                {category !== "Most Used" && (
                  <div className="mt-6 flex items-center justify-between border-t pt-4">
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="mr-2 inline-block h-3 w-3 rounded-full bg-green-300"></span>
                      Currently Learning
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={onPrevTab}
                        className="flex h-8 w-8 items-center justify-center rounded-md border bg-white dark:bg-black text-gray-600 hover:bg-gray-100"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        <span className="sr-only">Previous Tab</span>
                      </button>
                      <button
                        onClick={onNextTab}
                        className="flex h-8 w-8 items-center justify-center rounded-md border bg-white dark:bg-black text-gray-600 hover:bg-gray-100"
                      >
                        <ChevronRight className="h-4 w-4" />
                        <span className="sr-only">Next Tab</span>
                      </button>
                    </div>
                  </div>
                )}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
