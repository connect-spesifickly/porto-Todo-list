"use client";
import React from "react";
import { useState } from "react";

export default function TeamNav() {
  const [people] = useState<
    Array<{
      name: string;
      role: string;
      imageUrl: string;
      skill: string;
      email: string;
    }>
  >([
    {
      name: "Fernando Brewer",
      role: "President and Chief Executive Officer",
      imageUrl: "https://randomuser.me/api/portraits/men/40.jpg",
      skill: "management",
      email: "fernando.brewer@example.com",
    },
    {
      name: "Ralf Y. Thomas",
      role: "Chief Financial Officer",
      imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
      skill: "accounting",
      email: "ralf.y.thomas@example.com",
    },
    {
      name: "Jeremy Watson",
      role: "Member of the Managing Board",
      imageUrl: "https://randomuser.me/api/portraits/men/34.jpg",
      skill: "management phsycal resources",
      email: "jeremy.watson@example.com",
    },
    {
      name: "Jerome Marshall",
      role: "Member of the Managing Board",
      imageUrl: "https://randomuser.me/api/portraits/men/31.jpg",
      skill: "management human and relation resources",
      email: "jerome.marshall@example.com",
    },
  ]);
  return (
    <div className="bg-black min-h-[100vh] h-auto flex items-center pt-[120px] pb-[20px]">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-white">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-20 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-white">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-300">
                    {person.role}
                  </p>
                  <p className="text-sm/6 font-semibold text-white">
                    skill: {person.skill}
                  </p>
                  <p className="text-sm/6 font-semibold text-white">
                    email: {person.email}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
